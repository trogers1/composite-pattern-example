import { NaicsHierarchyItem } from './naics';

export type SelectionValue = -1 | 0 | 1;

type ChildrenState = {
  selected: string[];
  undetermined: string[];
  notSelected: string[];
};
export type CompositeNodeConstructorArgs = {
  id: string;
  name: string;
  parent: CompositeNode | null;
  onChange: (args: { root: CompositeNode; subtreeState: ChildrenState }) => void;
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
  #onChange: (args: ReturnType<typeof this.setSelectionValueForSelfAndChildren>) => void;
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
    this.children = [];
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
  getChildren() {
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
  getRoot() {
    return this.#parent || this;
  }

  /**
   * Sets the SelectionValue for the current node and all children
   */
  setSelectionValueForSelfAndChildren(
    newSelectedStatus: SelectionValue
  ): ReturnType<typeof this.recalculateSubtreeSelection> {
    this.isSelected = newSelectedStatus;
    this.children.forEach((child) => child.setSelectionValueForSelfAndChildren(newSelectedStatus));
    if (this.#parent) {
      console.log(`${this.id} has a parent after setting state. Must recalculate...`);
      return this.#parent.recalculateSubtreeSelection({ shouldRollup: true });
    }
    const subtreeState: ChildrenState = this.isSelected
      ? { selected: [this.id], notSelected: [], undetermined: [] }
      : { selected: [], notSelected: [this.id], undetermined: [] };
    console.log(`${this.id} has NO parent after setting state. subtreeState: ${subtreeState}`);

    return { root: this, subtreeState };
  }

  getSelectionStatusConsideringRollup(childrenStates: ChildrenState, currNode: CompositeNode): SelectionValue {
    if (!childrenStates.notSelected.length && !childrenStates.selected.length && !childrenStates.undetermined.length) {
      // No children. So 'rollup' state is it's own state
      return currNode.isSelected;
    }
    if (childrenStates.undetermined.length) {
      // If any children are undetermined, so is this node.
      return 0;
    }
    if (childrenStates.notSelected.length && !childrenStates.selected.length) {
      // We only have notSelected children, so we're not selected
      return -1;
    }
    if (childrenStates.selected.length && !childrenStates.notSelected.length) {
      // We only have selected children, so we're also selected
      return 1;
    }
    // Some are selected, some not. Undetermined.
    return 0;
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
   */
  getChildrenState({ shouldRollup }: { shouldRollup: boolean }): ChildrenState {
    return this.children.reduce(
      (acc: ChildrenState, curr: CompositeNode) => {
        const currSubtreeState = curr.getChildrenState({ shouldRollup });
        const rollupValue = this.getSelectionStatusConsideringRollup(currSubtreeState, curr);
        switch (rollupValue) {
          case -1:
            acc.notSelected = [curr.id, ...acc.notSelected];
          case 1:
            acc.selected = [curr.id, ...acc.selected];
          default:
            acc.selected = [...currSubtreeState.selected, ...acc.selected];
            acc.notSelected = [...currSubtreeState.notSelected, ...acc.notSelected];
            acc.undetermined = [curr.id, ...currSubtreeState.undetermined, ...acc.undetermined];
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
   * @param isFullRefresh boolean used to determine if each child status should be believed, or if all descendents should be checked to determine child status
   */
  recalculateSubtreeSelection({ shouldRollup }: { shouldRollup: boolean }): {
    root: CompositeNode;
    subtreeState: ChildrenState;
  } {
    const childStates = this.getChildrenState({ shouldRollup });
    console.log({ recalcState: childStates });
    const newSelectionValueWithRollup = this.getSelectionStatusConsideringRollup(childStates, this);
    console.log({
      id: this.id,
      recalcNewSelectionValueWithRollup: newSelectionValueWithRollup,
    });
    const oldSelectionStatus = this.isSelected;
    this.isSelected = newSelectionValueWithRollup;
    if (this.#parent && oldSelectionStatus !== newSelectionValueWithRollup) {
      console.log(
        `${this.#parent.getId()} exists and old (${oldSelectionStatus}) !== new (${newSelectionValueWithRollup})`
      );
      return this.#parent.recalculateSubtreeSelection({ shouldRollup: true });
    }
    console.log(`No more parents (or status is the same)`);
    console.log(`returning from recalc: ${this.getId()}, ${JSON.stringify(childStates)}`);
    return { root: this.getRoot(), subtreeState: childStates };
  }

  /**
   * Attempt to add a NaicsHierarchyItem or CompositeNode as a child to this node. It may be added recursively to children
   * of the children of this CompositeNode, if applicable. If it is a parent to this node, this will be added as a child and
   * the new parent node will be returned.
   *
   * The function will NOT add a new child to it's children if it is not a valid ancestor.
   *
   * @returns the parent node that the child was added to.
   */
  addChild({ item, node }: { item?: NaicsHierarchyItem; node?: CompositeNode }): CompositeNode | null {
    const id = item?.id || node!.getId();
    if (!this.isAncestorById(id)) {
      return null;
    }
    if (this.isChildById(id)) {
      const newNode =
        node ||
        new CompositeNode({
          id: item!.id,
          name: item!.name,
          parent: null,
          onChange: this.#onChange,
        });
      const parent = newNode.addChild({ node: this });
      if (!parent) {
        throw new Error(`Couldn't add self to parent! newNode: ${newNode.getId()}; self: ${this.getId()}`);
      }
      return parent;
    }
    const myChildThatIsAParent = this.children.find((myChild) => myChild.isAncestorById(id));
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
    this.children.push(childNode);
    return this;
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
   * Determines if this node should be the child of a particular ID
   * E.g. "151" should be a child of "15", and "216" should be a child of "21"
   *  */
  isChildById(id: string): boolean {
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
              const changeResults = this.setSelectionValueForSelfAndChildren(newSelectedStatus);
              console.log('Calling #onChange with...');
              console.log({ changeResults });
              this.#onChange(changeResults);
            }}
            checked={this.getIsSelectedAsBoolOrUndefined()}
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
