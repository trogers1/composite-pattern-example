import { CompositeNode } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('getChildrenState', () => {
    it('should correctly return no children states', () => {
      const node1733 = new CompositeNode({ id: '1733', name: 'test1733', parent: null });
      const node171 = new CompositeNode({ id: '178', name: 'test178', parent: null });
      expect(node1733.getChildrenState()).toStrictEqual({ selected: [], notSelected: [], undetermined: [] });
      expect(node171.getChildrenState()).toStrictEqual({ selected: [], notSelected: [], undetermined: [] });
    });
    it('should correctly return shallow children states', () => {
      const node172 = new CompositeNode({ id: '172', name: 'test172', parent: null });
      const node173 = new CompositeNode({ id: '173', name: 'test173', parent: null });
      const node171 = new CompositeNode({ id: '171', name: 'test171', parent: null });
      const node17 = new CompositeNode({
        id: '17',
        name: 'test17',
        parent: null,
        children: [node171, node173, node172],
      });
      expect(node171.getIsSelected()).toStrictEqual(-1);
      expect(node172.getIsSelected()).toStrictEqual(-1);
      expect(node173.getIsSelected()).toStrictEqual(-1);
      expect(node17.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['171', '173', '172'],
        undetermined: [],
      });

      node172.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node173.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node171.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });

      expect(node17.getChildrenState()).toStrictEqual({
        selected: ['173'],
        notSelected: [],
        undetermined: ['172', '171'],
      });
      node172.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      node173.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      node171.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });

      expect(node17.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['173', '172'],
        undetermined: ['171'],
      });
    });
    it('should correctly return simple, deep children states (w/ rollup)', () => {
      const node17311 = new CompositeNode({ id: '17311', name: 'test17311', parent: null });
      const node1731 = new CompositeNode({ id: '1731', name: 'test1731', parent: null, children: [node17311] });
      const node173 = new CompositeNode({ id: '173', name: 'test173', parent: null, children: [node1731] });
      const node17 = new CompositeNode({
        id: '17',
        name: 'test17',
        parent: null,
        children: [node173],
      });
      expect(node17.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['173'],
        undetermined: [],
      });
      expect(node173.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['1731'],
        undetermined: [],
      });

      node173.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      expect(node17.getChildrenState()).toStrictEqual({
        selected: ['173'],
        notSelected: [],
        undetermined: [],
      });
      expect(node173.getChildrenState()).toStrictEqual({
        selected: ['1731'],
        notSelected: [],
        undetermined: [],
      });
    });
    it('should correctly return complex, deep children states', () => {
      const node17311 = new CompositeNode({ id: '17311', name: 'test17311', parent: null });
      const node1731 = new CompositeNode({ id: '1731', name: 'test1731', parent: null, children: [node17311] });
      const node1732 = new CompositeNode({ id: '1732', name: 'test1732', parent: null });
      const node173 = new CompositeNode({ id: '173', name: 'test173', parent: null, children: [node1731, node1732] });
      const node17691 = new CompositeNode({ id: '17691', name: 'test17691', parent: null });
      const node17692 = new CompositeNode({ id: '17692', name: 'test17692', parent: null });
      const node1769 = new CompositeNode({
        id: '1769',
        name: 'test1769',
        parent: null,
        children: [node17691, node17692],
      });
      const node176 = new CompositeNode({ id: '176', name: 'test176', parent: null, children: [node1769] });
      const node17 = new CompositeNode({
        id: '17',
        name: 'test17',
        parent: null,
        children: [node173, node176],
      });
      expect(node17.getChildrenState()).toStrictEqual({
        selected: [],
        notSelected: ['173', '176'],
        undetermined: [],
      });

      node173.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node1731.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node17311.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node1732.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
      node176.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
      node1769.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node17691.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      node17692.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
      expect(node17.getChildrenState()).toStrictEqual({
        selected: ['1769', '1731'], // Should rollup to 1769 since children are also selected
        notSelected: ['1732'],
        undetermined: ['176', '173'],
      });
      expect(node173.getChildrenState()).toStrictEqual({
        selected: ['1731'],
        notSelected: ['1732'],
        undetermined: [],
      });
      expect(node176.getChildrenState()).toStrictEqual({
        selected: ['1769'],
        notSelected: [],
        undetermined: [],
      });
    });
  });
});
