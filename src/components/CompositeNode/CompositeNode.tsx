import { NaicsHierarchyItem } from './naics';

export type SelectionValue = -1 | 0 | 1;

export type ChildrenState = {
  selected: string[];
  undetermined: string[];
  notSelected: string[];
};
export type CompositeNodeConstructorArgs = {
  id: string;
  name: string;
  parent: CompositeNode | null;
  children?: CompositeNode[];
  onChange?: (args: { root: CompositeNode; subtreeState: ChildrenState }) => void;
};
export type RecalculateSubtreeSelectionArgs = { shouldRollup: boolean };
export type SetIsSelectedForSelfAndChildrenArgs = {
  newSelectedStatus: SelectionValue;
  shouldParentRecalculate?: boolean;
};
export class CompositeNode {
  /*
    Needs:
    - Add children (create tree structure, w/ checkedIds)
    - Calculate self and subtree status --  (w/ rollup no -> that tells parent to recalc if necessary)
    - onChange:
        - Flip all children to selected (or vice-versa, dep on state)
        - Tell parent to recalculate status (recursive)
    */
  #name: string;
  id: string;
  #onChange?: (args: ReturnType<typeof this.setIsSelectedForSelfAndChildren>) => void;
  #parent: CompositeNode | null;
  children: CompositeNode[];
  isSelected: SelectionValue;

  constructor(args: CompositeNodeConstructorArgs) {
    // super(args);
    this.#name = args.name;
    this.id = args.id;
    this.#parent = args.parent;
    this.isSelected = -1;
    this.#onChange = args.onChange;
    if (args.children) {
      this.children = args.children;
      this.children.forEach((child) => child.setParent(this));
    } else {
      this.children = [];
    }
  }

  toString() {
    return `
{
  id: ${this.id},
  name: ${this.#name},
  parent: ${this.#parent ? this.#parent.getId() : this.#parent},
  isSelected: ${this.isSelected},
  children: [${this.children.map((child) => child.getId()).join(', ')}],
}
`;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.#name;
  }
  getParent() {
    return this.#parent;
  }
  setParent(parent: CompositeNode | null) {
    this.#parent = parent;
    return this.#parent;
  }
  getChildren() {
    return this.children;
  }
  setChildren(children: CompositeNode[]) {
    this.children = children;
    return this.children;
  }
  getIsSelected() {
    return this.isSelected;
  }
  getIsSelectedAsBoolOrUndefined() {
    switch (this.isSelected) {
      case -1:
        return false;
      case 1:
        return true;
      default:
        return undefined;
    }
  }
  getRoot(): CompositeNode {
    if (this.#parent) {
      return this.#parent.getRoot();
    }
    return this;
  }

  /**
   * Sets the SelectionValue for the current node and all children
   */
  setIsSelectedForSelfAndChildren({
    newSelectedStatus,
    shouldParentRecalculate = true,
  }: SetIsSelectedForSelfAndChildrenArgs): ReturnType<typeof this.recalculateSubtreeSelection> {
    this.isSelected = newSelectedStatus;
    this.children.forEach((child) =>
      child.setIsSelectedForSelfAndChildren({ newSelectedStatus, shouldParentRecalculate: false })
    );
    if (shouldParentRecalculate && this.#parent) {
      // This node has a parent, so we must tell it to recalculate it's own state after setting children
      return this.#parent.recalculateSubtreeSelection({ shouldRollup: true });
    }
    // This node has NO parent, so we know the subtree state is whatever `newSelectedStatus` is, and this is the root
    let subtreeState: ChildrenState;
    switch (this.isSelected) {
      case -1:
        subtreeState = { selected: [], notSelected: [this.id], undetermined: [] };
        break;
      case 1:
        subtreeState = { selected: [this.id], notSelected: [], undetermined: [] };
        break;
      case 0:
      default:
        subtreeState = { selected: [], notSelected: [], undetermined: [this.id] };
        break;
    }

    return { root: this, subtreeState };
  }

  deriveIsSelectedFromChildrenStates(): { isSelected: SelectionValue; childrenState: ChildrenState } {
    const childrenState = this.getChildrenState();
    if (!childrenState.notSelected.length && !childrenState.selected.length && !childrenState.undetermined.length) {
      // No children. So 'rollup' state is it's own state
      return { isSelected: this.isSelected, childrenState };
    }
    if (childrenState.undetermined.length) {
      // If any children are undetermined, so is this node.
      return { isSelected: 0, childrenState };
    }
    if (childrenState.notSelected.length && !childrenState.selected.length) {
      // We only have notSelected children, so we're not selected
      return { isSelected: -1, childrenState };
    }
    if (childrenState.selected.length && !childrenState.notSelected.length) {
      // We only have selected children, so we're also selected
      return { isSelected: 1, childrenState };
    }
    // Some are selected, some not. Undetermined.
    return { isSelected: 0, childrenState };
  }

  // /**
  //  * Retrieve a collated subtree state for all children of a given node
  //  */
  // getSubtreeState(node: CompositeNode): ChildrenState {
  //   return node
  //     .getChildren()
  //     .map((childNode) => childNode.getChildrenState({}))
  //     .reduce(
  //       (childrenState: ChildrenState, currChildState) => {
  //         childrenState.selected = [...childrenState.selected, ...currChildState.selected];
  //         childrenState.notSelected = [...childrenState.notSelected, ...currChildState.notSelected];
  //         childrenState.undetermined = [...childrenState.undetermined, ...currChildState.undetermined];
  //         return childrenState;
  //       },
  //       { notSelected: [], undetermined: [], selected: [] }
  //     );
  // }

  /**
   * Get an object with the current arrays for each possible state for each id (with rollup)
   *
   * This function will assume that the state for each node is accurate and not traverse further if
   * the current node has a isSelected value of -1 or 1 (because any children should match)
   */
  getChildrenState(): ChildrenState {
    return this.children.reduce(
      (acc: ChildrenState, curr: CompositeNode) => {
        switch (curr.getIsSelected()) {
          case -1:
            acc.notSelected.push(curr.id);
            break;
          case 1:
            acc.selected.push(curr.id);
            break;
          default:
            const childrenState = curr.getChildrenState();
            acc.selected = [...childrenState.selected, ...acc.selected];
            acc.notSelected = [...childrenState.notSelected, ...acc.notSelected];
            acc.undetermined = [curr.id, ...childrenState.undetermined, ...acc.undetermined];
        }
        return acc;
      },
      { notSelected: [], undetermined: [], selected: [] }
    );
  }

  /**
   * Recalculate and set isSelected based on the state of CompositeNode's children
   * then return the resultant CheckedIdsRollup for the subtree with
   * the current node as the root.
   *
   * @param shouldRollup indicates whether or not all subtree statuses are taken into account to 'rollup' to their parent, or if all are simply returned
   */
  recalculateSubtreeSelection({ shouldRollup }: RecalculateSubtreeSelectionArgs): {
    root: CompositeNode;
    subtreeState: ChildrenState;
  } {
    const { isSelected, childrenState } = this.deriveIsSelectedFromChildrenStates();
    console.log({
      id: this.id,
      recalcNewSelectionValueWithRollup: isSelected,
    });
    const oldSelectionStatus = this.isSelected;
    this.isSelected = isSelected;
    if (this.#parent && oldSelectionStatus !== isSelected) {
      console.log(`${this.#parent.getId()} exists and old (${oldSelectionStatus}) !== new (${isSelected})`);
      return this.#parent.recalculateSubtreeSelection({ shouldRollup: true });
    }
    console.log(`No more parents (or status is the same)`);
    console.log(`returning from recalc: ${this.getId()}, ${JSON.stringify(childrenState)}`);
    return { root: this.getRoot(), subtreeState: childrenState };
  }

  /**
   * Removes a child from `children` from this node if it matches by `id`. If removal is successful,
   * the node is returned. Otherwise, if no matching child was found, returns `null`.
   */
  removeChildById(id: string): CompositeNode | null {
    const currChildren = [...this.children];
    let removedChild: CompositeNode | null = null;
    this.children = currChildren.reduce((acc: CompositeNode[], curr: CompositeNode) => {
      if (curr.getId() !== id) {
        acc.push(curr);
      } else {
        removedChild = curr;
      }
      return acc;
    }, []);
    return removedChild;
  }

  /**
   * Attempt to add a NaicsHierarchyItem or CompositeNode as a child to this node. It may be added recursively to children
   * of the children of this CompositeNode, if applicable. If it is a parent to this node, this will be added as a child.
   *
   * The function will NOT add a new child to it's children if it is not a valid ancestor.
   * The function will NOT add a new child if it's ID matches a current child. Instead it will return `null`
   *
   * @returns the top-level root node for the tree this child was added to, or `null` if unsuccessful.
   */
  addChild({ item, node }: { item?: NaicsHierarchyItem; node?: CompositeNode }): CompositeNode | null {
    const id = item?.id || node!.getId();
    if (this.children.some((child) => child.getId() === id)) {
      // This node already has a child that matches. Return `null`.
      return null;
    }
    if (!this.isAncestorById(id)) {
      if (this.isDescendantById(id)) {
        // If this node has a parent, we should add the new node to the parent until we
        // find one that's an ancestor or we find that the new node should be the root
        if (this.#parent) {
          return this.#parent.addChild({ item, node });
        }
        // We must be the root, so we will swap and the new node will become root
        const parentNode =
          node ||
          new CompositeNode({
            id: item!.id,
            name: item!.name,
            parent: null,
            onChange: this.#onChange,
          });
        const root = parentNode.addChild({ node: this });
        if (!root || root.getId() !== parentNode.getId()) {
          throw new Error(`Couldn't add self to parent! parentNode: ${parentNode.getId()}; self: ${this.getId()}`);
        }
        return root;
      }
      return null;
    }
    const myChildrenThatAreAncestors = this.children.reduce((acc: CompositeNode[], currChild: CompositeNode) => {
      if (currChild.isAncestorById(id)) {
        acc.push(currChild);
      }
      return acc;
    }, []);
    if (myChildrenThatAreAncestors.length > 1) {
      throw new Error(
        `There should only be one ancestor possible. Found: ${myChildrenThatAreAncestors
          .map((child) => child.getId())
          .join(', ')}`
      );
    }
    const myChildThatIsAParent: CompositeNode | undefined = myChildrenThatAreAncestors[0];
    if (myChildThatIsAParent) {
      return item ? myChildThatIsAParent.addChild({ item: item }) : myChildThatIsAParent.addChild({ node: node });
    }
    // child should be a direct child CompositeNode
    const childNode =
      node ||
      new CompositeNode({
        id: item!.id,
        name: item!.name,
        parent: this,
        onChange: this.#onChange,
      });

    childNode.setParent(this); // required if the childNode was already a node

    // Check if there are any children of this node that SHOULD be children of the new child instead
    const childrenToAdopt = this.children.reduce((acc: CompositeNode[], curr: CompositeNode) => {
      if (curr.isDescendantById(childNode.getId())) {
        acc.push(curr);
      }
      return acc;
    }, []);
    for (let adoptee of childrenToAdopt) {
      this.removeChildById(adoptee.getId());
      childNode.addChild({ node: adoptee });
    }

    this.children.push(childNode);
    return this.getRoot();
  }

  /**
   * Determines if this node should be the parent of a particular ID
   * E.g. "151" should be a child of "15", and "216" should be a child of "21"
   *  */
  isAncestorById(id: string): boolean {
    if (id.length > this.id.length && id.startsWith(this.id)) {
      return true;
    }
    return false;
  }
  /**
   * Determines if this node should be the descendant of a particular ID
   * E.g. "151" should be a descendant of "15", and "2168" should be a descendant of "21"
   *  */
  isDescendantById(id: string): boolean {
    if (id.length < this.id.length && this.id.startsWith(id)) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div key={this.id}>
        <label style={{ paddingLeft: `${this.id.length}rem` }}>
          <input
            type="checkbox"
            onChange={() => {
              let newSelectedStatus: SelectionValue;
              if (this.isSelected === 0 || this.isSelected === 1) {
                newSelectedStatus = -1;
              } else {
                newSelectedStatus = 1;
              }
              console.log({ onChange: newSelectedStatus, id: this.id });
              const changeResults = this.setIsSelectedForSelfAndChildren({ newSelectedStatus });
              console.log('Calling #onChange with...');
              console.log({ changeResults });
              this.#onChange && this.#onChange(changeResults);
            }}
            checked={this.getIsSelectedAsBoolOrUndefined()}
            data-indeterminate={this.getIsSelectedAsBoolOrUndefined() === undefined}
            ref={(input) => {
              if (input) {
                input.indeterminate = this.getIsSelectedAsBoolOrUndefined() === undefined;
              }
            }}
          />
          <span className="peer-checked:bg-blue-300">
            {this.id}, {this.#name}
            {this.children.map((child) => child.render())}
          </span>
        </label>
      </div>
    );
  }
}
