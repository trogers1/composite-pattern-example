import { CompositeNode, RecalculateIsSelectedReturnType } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('recalculateIsSelected', () => {
    it('should set isSelected and return root+tree-state for a single parent and child manually when NOT requested by setIsSelectedForSelfAndChildren', () => {
      const node199 = new CompositeNode({ id: '199', name: 'test199', parent: null });
      const node198 = new CompositeNode({ id: '198', name: 'test198', parent: null });
      const node19 = new CompositeNode({ id: '19', name: 'test19', parent: null, children: [node198, node199] });
      // Set to 1
      node199.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node198.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      expect(node19.getIsSelected()).toStrictEqual(-1);
      let result = node19.recalculateIsSelected();
      let expectedResult: RecalculateIsSelectedReturnType = {
        root: node19,
        state: {
          selected: ['198', '199'],
          notSelected: [],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(1);

      // Set to 0 when mixed
      node199.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node198.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      expect(node19.getIsSelected()).toStrictEqual(1);
      result = node19.recalculateIsSelected();
      expectedResult = {
        root: node19,
        state: {
          selected: ['198'],
          notSelected: [],
          undetermined: ['199'],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0);
      // Again, with diff values
      node199.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      expect(node19.getIsSelected()).toStrictEqual(0);
      result = node19.recalculateIsSelected();
      expectedResult = {
        root: node19,
        state: {
          selected: ['198', '199'], // First set to the same to then set differently
          notSelected: [],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(1);
      node198.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      result = node19.recalculateIsSelected();
      expectedResult = {
        root: node19,
        state: {
          selected: ['199'],
          notSelected: ['198'],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0);

      // Set to -1
      node199.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      node198.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      expect(node19.getIsSelected()).toStrictEqual(0);
      result = node19.recalculateIsSelected();
      expectedResult = {
        root: node19,
        state: {
          selected: [],
          notSelected: ['198', '199'],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(-1);
    });
    it('should set isSelected and return root+tree-state for a single parent and child', () => {
      const node199 = new CompositeNode({ id: '199', name: 'test199', parent: null });
      const node198 = new CompositeNode({ id: '198', name: 'test198', parent: null });
      const node19 = new CompositeNode({ id: '19', name: 'test19', parent: null, children: [node198, node199] });
      // Set to 1
      expect(node19.getIsSelected()).toStrictEqual(-1);
      let result = node199.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      let expectedResult: RecalculateIsSelectedReturnType = {
        root: node19,
        state: {
          selected: ['199'],
          notSelected: ['198'],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0);
      result = node198.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      expectedResult = {
        root: node19,
        state: {
          selected: ['198', '199'],
          notSelected: [],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(1);
    });
    it('should set isSelected and return root+tree-state for a deeply nested parent and child recursively to the final parent', () => {
      const node19925 = new CompositeNode({ id: '19925', name: 'test19925', parent: null });
      const node1992 = new CompositeNode({ id: '1992', name: 'test1992', parent: null, children: [node19925] });
      const node199 = new CompositeNode({ id: '199', name: 'test199', parent: null, children: [node1992] });
      const node19 = new CompositeNode({ id: '19', name: 'test19', parent: null, children: [node199] });
      // Set to 1
      expect(node19.getIsSelected()).toStrictEqual(-1);
      let result = node19925.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      let expectedResult: RecalculateIsSelectedReturnType = {
        root: node19,
        state: {
          selected: ['199'],
          notSelected: [],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(1);

      // 0
      result = node19925.setIsSelectedForSelfAndChildren({ newSelectedStatus: 0 });
      expectedResult = {
        root: node19,
        state: {
          selected: [],
          notSelected: [],
          undetermined: ['199', '1992', '19925'], // Since it goes all the way down when 'undetermined'
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0);

      // -1
      result = node19925.setIsSelectedForSelfAndChildren({ newSelectedStatus: -1 });
      expectedResult = {
        root: node19,
        state: {
          selected: [],
          notSelected: ['199'],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(-1);
    });
    it('should set isSelected and return root+tree-state for a parent and child recursively until the isSelected status does not change', () => {
      const node19925 = new CompositeNode({ id: '19925', name: 'test19925', parent: null });
      const node1992 = new CompositeNode({ id: '1992', name: 'test1992', parent: null, children: [node19925] });
      const node1991 = new CompositeNode({ id: '1991', name: 'test1991', parent: null });
      const node199 = new CompositeNode({ id: '199', name: 'test199', parent: null, children: [node1991, node1992] });
      const node198 = new CompositeNode({ id: '198', name: 'test198', parent: null });
      const node19 = new CompositeNode({ id: '19', name: 'test19', parent: null, children: [node198, node199] });
      // Set to 1
      expect(node19.getIsSelected()).toStrictEqual(-1);
      let result = node1992.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      let expectedResult: RecalculateIsSelectedReturnType = {
        root: node19,
        state: {
          selected: ['1992'],
          notSelected: ['1991', '198'],
          undetermined: ['199'],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0); // Should not have changed the root!

      // Do the same thing twice--should change nothing
      result = node1992.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      expectedResult = {
        root: node19,
        state: {
          selected: ['1992'],
          notSelected: ['1991', '198'],
          undetermined: ['199'],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0); // Should not have changed the root!

      // Set the 19925 leaf to the same thing--should change nothing
      result = node19925.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      expectedResult = {
        root: node19,
        state: {
          selected: ['1992'],
          notSelected: ['1991', '198'],
          undetermined: ['199'],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0); // Should not have changed the root!

      // Set the 1991 leaf to 1, should roll up to all of 199 being selected, but not touch 198
      result = node1991.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
      expectedResult = {
        root: node19,
        state: {
          selected: ['199'],
          notSelected: ['198'],
          undetermined: [],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0); // Should not have changed the root!

      // 0
      result = node198.setIsSelectedForSelfAndChildren({ newSelectedStatus: 0 });
      expectedResult = {
        root: node19,
        state: {
          selected: ['199'],
          notSelected: [],
          undetermined: ['198'],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0);

      // -1
      result = node19925.setIsSelectedForSelfAndChildren({ newSelectedStatus: -1 });
      expectedResult = {
        root: node19,
        state: {
          selected: ['1992'],
          notSelected: ['1991'],
          undetermined: ['199', '198'],
        },
      };
      expect(result).toStrictEqual(expectedResult);
      expect(node19.getIsSelected()).toStrictEqual(0);
    });
  });
});
