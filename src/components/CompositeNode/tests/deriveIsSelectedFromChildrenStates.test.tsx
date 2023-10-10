import { ChildrenState, CompositeNode } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('deriveIsSelectedFromChildrenStates', () => {
    it("should return the node's own state if it has no children", () => {
      const node8391 = new CompositeNode({ id: '8391', name: 'test8391', parent: null });
      const node265 = new CompositeNode({ id: '265', name: 'test265', parent: null });
      const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null });
      node265.setIsSelectedForSelfAndChildren({ newSelectedStatus: 0 });
      node43.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      expect(node8391.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: -1,
        childrenState: {
          selected: [],
          notSelected: [],
          undetermined: [],
        },
      });
      expect(node265.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: 0,
        childrenState: {
          selected: [],
          notSelected: [],
          undetermined: [],
        },
      });
      expect(node43.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: 1,
        childrenState: {
          selected: [],
          notSelected: [],
          undetermined: [],
        },
      });
    });
    it('should return isSelected value of 0 if any children are undetermined', () => {
      const node22311 = new CompositeNode({ id: '22311', name: 'test22311', parent: null });
      const node2231 = new CompositeNode({ id: '2231', name: 'test2231', parent: null, children: [node22311] });
      const node2232 = new CompositeNode({ id: '2232', name: 'test2232', parent: null });
      const node223 = new CompositeNode({ id: '223', name: 'test223', parent: null, children: [node2231, node2232] });
      const node22691 = new CompositeNode({ id: '22691', name: 'test22691', parent: null });
      const node22692 = new CompositeNode({ id: '22692', name: 'test22692', parent: null });
      const node2269 = new CompositeNode({
        id: '2269',
        name: 'test2269',
        parent: null,
        children: [node22691, node22692],
      });
      const node226 = new CompositeNode({ id: '226', name: 'test226', parent: null, children: [node2269] });
      const node22 = new CompositeNode({
        id: '22',
        name: 'test22',
        parent: null,
        children: [node223, node226],
      });
      node223.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node2231.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node2232.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      let anticipatedChildrenState: ChildrenState = {
        selected: ['2231'],
        notSelected: ['2232', '226'],
        undetermined: ['223'],
      };
      expect(node22.getChildrenState()).toStrictEqual(anticipatedChildrenState);
      expect(node22.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: 0,
        childrenState: anticipatedChildrenState,
      });

      // Set a complicated tree state including undetermined
      node223.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node2231.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node22311.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node2232.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      node226.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node2269.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node22691.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node22692.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      anticipatedChildrenState = {
        selected: ['2269', '2231'], // Should rollup to 2269 since children are also selected
        notSelected: ['2232'],
        undetermined: ['226', '223'],
      };
      expect(node22.getChildrenState()).toStrictEqual(anticipatedChildrenState);
      expect(node22.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: 0,
        childrenState: anticipatedChildrenState,
      });
    });
    it('should return isSelected value of -1 if all children are notSelected', () => {
      const node22311 = new CompositeNode({ id: '22311', name: 'test22311', parent: null });
      const node2231 = new CompositeNode({ id: '2231', name: 'test2231', parent: null, children: [node22311] });
      const node2232 = new CompositeNode({ id: '2232', name: 'test2232', parent: null });
      const node223 = new CompositeNode({ id: '223', name: 'test223', parent: null, children: [node2231, node2232] });
      const node22691 = new CompositeNode({ id: '22691', name: 'test22691', parent: null });
      const node22692 = new CompositeNode({ id: '22692', name: 'test22692', parent: null });
      const node2269 = new CompositeNode({
        id: '2269',
        name: 'test2269',
        parent: null,
        children: [node22691, node22692],
      });
      const node226 = new CompositeNode({ id: '226', name: 'test226', parent: null, children: [node2269] });
      const node22 = new CompositeNode({
        id: '22',
        name: 'test22',
        parent: null,
        children: [node223, node226],
      });

      const anticipatedChildrenState = {
        selected: [],
        notSelected: ['223', '226'],
        undetermined: [],
      };
      expect(node22.getChildrenState()).toStrictEqual(anticipatedChildrenState);
      expect(node22.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: -1,
        childrenState: anticipatedChildrenState,
      });
    });
    it('should return isSelected value of 1 if all children are selected', () => {
      const node22311 = new CompositeNode({ id: '22311', name: 'test22311', parent: null });
      const node2231 = new CompositeNode({ id: '2231', name: 'test2231', parent: null, children: [node22311] });
      const node2232 = new CompositeNode({ id: '2232', name: 'test2232', parent: null });
      const node223 = new CompositeNode({ id: '223', name: 'test223', parent: null, children: [node2231, node2232] });
      const node22691 = new CompositeNode({ id: '22691', name: 'test22691', parent: null });
      const node22692 = new CompositeNode({ id: '22692', name: 'test22692', parent: null });
      const node2269 = new CompositeNode({
        id: '2269',
        name: 'test2269',
        parent: null,
        children: [node22691, node22692],
      });
      const node226 = new CompositeNode({ id: '226', name: 'test226', parent: null, children: [node2269] });
      const node22 = new CompositeNode({
        id: '22',
        name: 'test22',
        parent: null,
        children: [node223, node226],
      });
      expect(node22.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['223', '226'],
        undetermined: [],
      });

      node223.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node226.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      const anticipatedChildrenState = {
        selected: ['223', '226'],
        notSelected: [],
        undetermined: [],
      };
      expect(node22.getChildrenState()).toStrictEqual(anticipatedChildrenState);
      expect(node22.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: 1,
        childrenState: anticipatedChildrenState,
      });
    });
    it('should return isSelected value of 0 if children a mix of selected and notSelected, but no undetermined', () => {
      const node22311 = new CompositeNode({ id: '22311', name: 'test22311', parent: null });
      const node2231 = new CompositeNode({ id: '2231', name: 'test2231', parent: null, children: [node22311] });
      const node2232 = new CompositeNode({ id: '2232', name: 'test2232', parent: null });
      const node223 = new CompositeNode({ id: '223', name: 'test223', parent: null, children: [node2231, node2232] });
      const node22691 = new CompositeNode({ id: '22691', name: 'test22691', parent: null });
      const node22692 = new CompositeNode({ id: '22692', name: 'test22692', parent: null });
      const node2269 = new CompositeNode({
        id: '2269',
        name: 'test2269',
        parent: null,
        children: [node22691, node22692],
      });
      const node226 = new CompositeNode({ id: '226', name: 'test226', parent: null, children: [node2269] });
      const node22 = new CompositeNode({
        id: '22',
        name: 'test22',
        parent: null,
        children: [node223, node226],
      });
      expect(node22.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['223', '226'],
        undetermined: [],
      });

      node223.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node226.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      const anticipatedChildrenState = {
        selected: ['223'],
        notSelected: ['226'],
        undetermined: [],
      };
      expect(node22.getChildrenState()).toStrictEqual(anticipatedChildrenState);
      expect(node22.deriveIsSelectedFromChildrenStates()).toStrictEqual({
        isSelected: 0,
        childrenState: anticipatedChildrenState,
      });
    });
  });
});
