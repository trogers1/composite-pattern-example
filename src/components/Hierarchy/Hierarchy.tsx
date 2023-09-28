import { Component } from 'react';
import { NaicsHierarchyItem } from './naics';

export type SelectionValue = -1 | 0 | 1;
export type CheckedIdsRollup = Record<string, boolean>;
type ChildrenState = {
  selected: string[];
  undetermined: string[];
  notSelected: string[];
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

  constructor(props: {
    id: string;
    name: string;
    parent: CompositeNode | null;
    onChange: (args: { root: CompositeNode; checkedIds: CheckedIdsRollup }) => void;
    checkedIds: CheckedIdsRollup;
  }) {
    // super(props);
    this.#name = props.name;
    this.id = props.id;
    this.#parent = props.parent;
    this.isSelected = props.checkedIds[props.id] ? 1 : -1; // This doesn't seem right
    this.#onChange = props.onChange;
    this.children = [];
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.#name;
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

  //   /**
  //    * This should give back all IDs for all children of the current CompositeNode, AND it's own ID.
  //    */
  //   getAllChildrenIds(): string[] {
  //     return this.children.reduce(
  //       (acc: string[], curr: CompositeNode) => {
  //         return [...acc, curr.getId(), ...curr.getAllChildrenIds()];
  //       },
  //       [] as string[]
  //     );
  //   }

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
      return this.#parent.recalculateSubtreeSelection({});
    }
    const checkedIds = this.isSelected ? { [this.id]: true } : {};
    console.log(`${this.id} has NO parent after setting state. checkedIds: ${checkedIds}`);

    return { root: this, checkedIds };
  }

  getRollupState(childrenStates: ChildrenState): SelectionValue {
    if (!childrenStates.notSelected.length && !childrenStates.selected.length && !childrenStates.undetermined.length) {
      // not sure about this one...
      return -1;
    }
    if (childrenStates.undetermined.length) {
      // If any children are undetermined, so is this parent.
      return 0;
    }
    if (childrenStates.notSelected.length && !childrenStates.selected.length) {
      return -1;
    }
    if (childrenStates.selected.length && !childrenStates.notSelected.length) {
      return 1;
    }
    return 0;
  }

  /**
   * Retrieve a collated subtree state for all children of a given node
   */
  getSubtreeState(node: CompositeNode): ChildrenState {
    return node
      .getChildren()
      .map((childNode) => childNode.getChildrenState({}))
      .reduce(
        (childrenState: ChildrenState, currChildState) => {
          childrenState.selected = [...childrenState.selected, ...currChildState.selected];
          childrenState.notSelected = [...childrenState.notSelected, ...currChildState.notSelected];
          childrenState.undetermined = [...childrenState.undetermined, ...currChildState.undetermined];
          return childrenState;
        },
        { notSelected: [], undetermined: [], selected: [] }
      );
  }

  /**
   * Get an object with the current arrays for each possible state for each id (with rollup)
   *
   * @param isFullRefresh boolean used to determine if each child status should be believed, or if all descendents should be checked to determine child status
   */
  getChildrenState({ isFullRefresh }: { isFullRefresh?: boolean }): ChildrenState {
    return this.children.reduce(
      (acc: ChildrenState, curr: CompositeNode) => {
        if (isFullRefresh) {
          const subtreeState = this.getSubtreeState(curr);
          acc.selected = [...acc.selected, ...subtreeState.selected];
          acc.notSelected = [...acc.notSelected, ...subtreeState.notSelected];
          acc.undetermined = [...acc.undetermined, ...subtreeState.undetermined];
          const rollupValue = this.getRollupState(subtreeState);
        }
        if (curr.getIsSelected() === 1) {
          // Assume all children are selected as well and skip
          // This is a rollup!
          acc.selected.push(curr.getId());
          return acc;
        }
        if (curr.getIsSelected() === -1) {
          acc.notSelected.push(curr.getId());
        }
        if (curr.getIsSelected() === 0) {
          acc.undetermined.push(curr.getId());
          // Undetermined means we need to keep going to not lose track of our selected and notSelected children
          const subtreeState = this.getSubtreeState(curr);
          acc.selected = [...acc.selected, ...subtreeState.selected];
          acc.notSelected = [...acc.notSelected, ...subtreeState.notSelected];
          acc.undetermined = [...acc.undetermined, ...subtreeState.undetermined];
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
  recalculateSubtreeSelection({ isFullRefresh }: { isFullRefresh?: boolean }): {
    root: CompositeNode;
    checkedIds: CheckedIdsRollup;
  } {
    const childStates = this.getChildrenState({ isFullRefresh });
    console.log({ recalcState: childStates });
    const newSelectionValueWithRollup = this.getRollupState(childStates);
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
      return this.#parent.recalculateSubtreeSelection({});
    }
    console.log(`No more parents (or status is the same)`);
    const checkedIds = childStates.selected.reduce((acc: CheckedIdsRollup, curr) => {
      acc[curr] = true;
      return acc;
    }, {});
    console.log(`returning from recalc: ${this.getId()}, ${JSON.stringify(checkedIds)}`);
    return { root: this.getRoot(), checkedIds };
  }

  //   /**
  //    * Should set itself appropriately, given an id. If children need set, it will recursively call this function on the appropriate children.
  //    *
  //    * - If id is a child of the node
  //    * @param value A SelectionValue, if setting to a known state, otherwise `undefined` will cause the node to search children to determine the appropriate state.
  //    */
  //   getIsSelectedStatusByIds(selectedIds: string[]): void {
  //     let appropriateState: SelectionValue = value;
  //     const allChildrenIds = this.getAllChildrenIds();

  //     switch (appropriateState) {
  //       case 0:
  //         this.isSelected = 0;
  //         // this.#parent?.setIsSelected(0); // We know it must be undetermined
  //         break;
  //       case 1:
  //         this.isSelected = 1;
  //         // this.#parent?.setIsSelected(); // We can't know the parent's state, tell it to recalculate
  //         break;
  //       case -1:
  //         this.isSelected = -1;
  //         // this.#parent?.setIsSelected(); // We can't know the parent's state, tell it to recalculate
  //         break;
  //       default:
  //         throw new Error(
  //           `Should never reach this state in switch: ${appropriateState}`
  //         );
  //     }
  //   }

  //   getSelectedChildren() {
  //     this.children.filter((child) => child.getIsSelected() === 1);
  //   }

  /**
   * Attempt to add a NaicsHierarchyItem or CompositeNode as a child to this node. It may be added recursively to children
   * of the children of this CompositeNode, if applicable. If it is a parent to this node, this will be added as a child and
   * the new parent node will be returned.
   *
   * The function will NOT add a new child to it's children if it is not a valid ancestor.
   *
   * @returns the parent node that the child was added to.
   */
  addChild({
    item,
    node,
    checkedIds,
  }: {
    item?: NaicsHierarchyItem;
    node?: CompositeNode;
    checkedIds: CheckedIdsRollup;
  }): CompositeNode | null {
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
          checkedIds,
        });
      const parent = newNode.addChild({ node: this, checkedIds });
      if (!parent) {
        throw new Error(`Couldn't add self to parent! newNode: ${newNode.getId()}; self: ${this.getId()}`);
      }
      return parent;
    }
    const myChildThatIsAParent = this.children.find((myChild) => myChild.isAncestorById(id));
    if (myChildThatIsAParent) {
      return item
        ? myChildThatIsAParent.addChild({ item: item, checkedIds })
        : myChildThatIsAParent.addChild({ node: node, checkedIds });
    }
    // child should be a direct child CompositeNode
    const childNode =
      node ||
      new CompositeNode({
        id: item!.id,
        name: item!.name,
        parent: this,
        onChange: this.#onChange,
        checkedIds,
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

  //   /**
  //    * Determines if this node should be a sibling of a particular ID
  //    * E.g. "151" should be a sibling of "152", and "2135" should be a sibling of "2138"
  //    *  */
  //   isSiblingById(id: string): boolean {
  //     const thisParentId = this.id.slice(0, this.id.length - 1);
  //     const thatParentId = id.slice(0, id.length - 1);
  //     if (thisParentId === thatParentId) {
  //       return true;
  //     }
  //     return false;
  //   }
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

// export class RootNode {
//   children: CompositeNode[];
//   #checkedIds: Record<string, boolean>;
//   constructor(naics: NaicsHierarchyItem[]) {
//     naics.sort(
//       (industryA, industryB) => Number(industryA.id) - Number(industryB.id),
//     );
//     for (const industry of naics) {
//       const newNode = new CompositeNode({
//         ...industry,
//         onChange: this.toggleCheckedId,
//         checkedIds: this.#checkedIds,
//       });
//       this.addChild(newNode);
//     }
//   }
//   toggleCheckedId(id: string) {
//     this.#checkedIds[id] = !Boolean(this.#checkedIds[id]);
//   }

//   addChild(newNode: CompositeNode) {
//     const myChildThatIsAParent = this.children.find((myChild) =>
//       myChild.isAncestorById(newNode.getId()),
//     );
//     if (myChildThatIsAParent) {
//       return myChildThatIsAParent.addChild(newNode);
//     }
//     this.children.push(newNode);
//   }

//   render() {
//     return (
//       <>
//         <h1>Root</h1>
//         {this.children.forEach((child) =>
//           child.render({ checkedIds: this.#checkedIds }),
//         )}
//       </>
//     );
//   }
// }
