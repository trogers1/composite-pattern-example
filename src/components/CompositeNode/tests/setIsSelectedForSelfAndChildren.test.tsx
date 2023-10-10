import { CompositeNode, RecalculateIsSelectedArgs } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('setIsSelectedForSelfAndChildren', () => {
    describe('root node: ', () => {
      it('should correctly set self with no children states', () => {
        const node1391 = new CompositeNode({ id: '1391', name: 'test1391', parent: null });
        const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null });
        expect(node1391.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);
        expect(
          node1391.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node1391,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['1391'],
          },
        });
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['43'],
          },
        });
        expect(node1391.getIsSelected()).toStrictEqual(0);
        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(
          node1391.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node1391,
          subtreeState: {
            selected: ['1391'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: ['43'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(node1391.getIsSelected()).toStrictEqual(1);
        expect(node43.getIsSelected()).toStrictEqual(1);
        expect(
          node1391.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 })
        ).toStrictEqual({
          root: node1391,
          subtreeState: {
            selected: [],
            notSelected: ['1391'],
            undetermined: [],
          },
        });
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: ['43'],
            undetermined: [],
          },
        });
        expect(node1391.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);
      });
      it('should correctly set simple, shallow children states', () => {
        const node435 = new CompositeNode({ id: '435', name: 'test435', parent: null });
        const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null });
        const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
        const node43 = new CompositeNode({
          id: '43',
          name: 'test43',
          parent: null,
          children: [node438, node439, node435],
        });
        // Check default state
        expect(node435.getIsSelected()).toStrictEqual(-1);
        expect(node438.getIsSelected()).toStrictEqual(-1);
        expect(node439.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);

        // Set parent to 0
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['43'],
          },
        });
        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(node435.getIsSelected()).toStrictEqual(0);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node439.getIsSelected()).toStrictEqual(0);

        // Set parent to 1
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: ['43'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(node435.getIsSelected()).toStrictEqual(1);
        expect(node438.getIsSelected()).toStrictEqual(1);
        expect(node439.getIsSelected()).toStrictEqual(1);
        expect(node43.getIsSelected()).toStrictEqual(1);

        // Set parent to -1
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: ['43'],
            undetermined: [],
          },
        });
        expect(node435.getIsSelected()).toStrictEqual(-1);
        expect(node438.getIsSelected()).toStrictEqual(-1);
        expect(node439.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);
      });
      it('should correctly set complex, shallow children states', () => {
        const node435 = new CompositeNode({ id: '435', name: 'test435', parent: null });
        const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null });
        const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
        const node43 = new CompositeNode({
          id: '43',
          name: 'test43',
          parent: null,
          children: [node438, node439, node435],
        });
        // Check default state
        expect(node435.getIsSelected()).toStrictEqual(-1);
        expect(node438.getIsSelected()).toStrictEqual(-1);
        expect(node439.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);

        // Set all possible states for children
        expect(
          node435.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 })
        ).toStrictEqual({
          root: node435,
          subtreeState: {
            selected: [],
            notSelected: ['435'],
            undetermined: [],
          },
        });
        expect(
          node438.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node438,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['438'],
          },
        });
        expect(
          node439.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node439,
          subtreeState: {
            selected: ['439'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(node435.getIsSelected()).toStrictEqual(-1);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node439.getIsSelected()).toStrictEqual(1);
        expect(node43.getIsSelected()).toStrictEqual(-1); // make sure setting them didn't set the parent

        // Check that they can all be set to 0 by the parent
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['43'],
          },
        });

        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(node435.getIsSelected()).toStrictEqual(0);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node439.getIsSelected()).toStrictEqual(0);

        // Set all possible states for children
        node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
        expect(
          node435.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 })
        ).toStrictEqual({
          root: node435,
          subtreeState: {
            selected: [],
            notSelected: ['435'],
            undetermined: [],
          },
        });
        expect(
          node438.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node438,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['438'],
          },
        });
        expect(
          node439.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node439,
          subtreeState: {
            selected: ['439'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(node435.getIsSelected()).toStrictEqual(-1);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node439.getIsSelected()).toStrictEqual(1);
        expect(node43.getIsSelected()).toStrictEqual(-1); // make sure setting them didn't set the parent

        // Check that they can all be set to 1 by the parent
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: ['43'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(node43.getIsSelected()).toStrictEqual(1);
        expect(node435.getIsSelected()).toStrictEqual(1);
        expect(node438.getIsSelected()).toStrictEqual(1);
        expect(node439.getIsSelected()).toStrictEqual(1);
      });
      it('should correctly set simple, deep children states', () => {
        const node43917 = new CompositeNode({ id: '43917', name: 'test43917', parent: null });
        const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null, children: [node43917] });
        const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
        const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null, children: [node439] });
        // Check default state
        expect(node43917.getIsSelected()).toStrictEqual(-1);
        expect(node4391.getIsSelected()).toStrictEqual(-1);
        expect(node439.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);

        // Check that they can all be set to 0 by the parent
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['43'],
          },
        });
        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(node439.getIsSelected()).toStrictEqual(0);
        expect(node4391.getIsSelected()).toStrictEqual(0);
        expect(node43917.getIsSelected()).toStrictEqual(0);

        // Check that they can all be set to 1 by the parent
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: ['43'],
            notSelected: [],
            undetermined: [],
          },
        });
        expect(node43.getIsSelected()).toStrictEqual(1);
        expect(node439.getIsSelected()).toStrictEqual(1);
        expect(node4391.getIsSelected()).toStrictEqual(1);
        expect(node43917.getIsSelected()).toStrictEqual(1);
      });
      it('should correctly set complex, deep children states', () => {
        const node43917 = new CompositeNode({ id: '43917', name: 'test43917', parent: null });
        const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null, children: [node43917] });
        const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
        const node4384 = new CompositeNode({ id: '4384', name: 'test4384', parent: null, children: [node4391] });
        const node4385 = new CompositeNode({ id: '4385', name: 'test4385', parent: null, children: [node4391] });
        const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null, children: [node4384, node4385] });
        const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null, children: [node439, node438] });
        const node4 = new CompositeNode({ id: '4', name: 'test4', parent: null, children: [node43] });
        // Check default state
        expect(node43917.getIsSelected()).toStrictEqual(-1);
        expect(node4391.getIsSelected()).toStrictEqual(-1);
        expect(node439.getIsSelected()).toStrictEqual(-1);
        expect(node43.getIsSelected()).toStrictEqual(-1);
        expect(node4.getIsSelected()).toStrictEqual(-1);

        // Set a variety of states at a variety of levels
        node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
        node438.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
        node4385.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
        node4384.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        node439.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        node4391.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        node43917.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        expect(node4.getIsSelected()).toStrictEqual(-1); // Unchanged
        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node4385.getIsSelected()).toStrictEqual(-1);
        expect(node4384.getIsSelected()).toStrictEqual(1);
        expect(node439.getIsSelected()).toStrictEqual(1);
        expect(node4391.getIsSelected()).toStrictEqual(1);
        expect(node43917.getIsSelected()).toStrictEqual(1);

        // Check that they can all be set to 0 by the parent
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: [],
            undetermined: ['43'],
          },
        });
        expect(node4.getIsSelected()).toStrictEqual(-1); // Unchanged
        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node4385.getIsSelected()).toStrictEqual(0);
        expect(node4384.getIsSelected()).toStrictEqual(0);
        expect(node439.getIsSelected()).toStrictEqual(0);
        expect(node4391.getIsSelected()).toStrictEqual(0);
        expect(node43917.getIsSelected()).toStrictEqual(0);

        // Set a variety of states at a variety of levels
        node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
        node438.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 0 });
        node4385.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 });
        node4384.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        node439.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        node4391.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        node43917.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: 1 });
        expect(node4.getIsSelected()).toStrictEqual(-1); // Unchanged
        expect(node43.getIsSelected()).toStrictEqual(0);
        expect(node438.getIsSelected()).toStrictEqual(0);
        expect(node4385.getIsSelected()).toStrictEqual(-1);
        expect(node4384.getIsSelected()).toStrictEqual(1);
        expect(node439.getIsSelected()).toStrictEqual(1);
        expect(node4391.getIsSelected()).toStrictEqual(1);
        expect(node43917.getIsSelected()).toStrictEqual(1);

        // Check that they can all be set to -1 by the parent
        expect(
          node43.setIsSelectedForSelfAndChildren({ shouldParentRecalculate: false, newSelectedStatus: -1 })
        ).toStrictEqual({
          root: node43,
          subtreeState: {
            selected: [],
            notSelected: ['43'],
            undetermined: [],
          },
        });
        expect(node4.getIsSelected()).toStrictEqual(-1); // Unchanged
        expect(node43.getIsSelected()).toStrictEqual(-1);
        expect(node438.getIsSelected()).toStrictEqual(-1);
        expect(node4385.getIsSelected()).toStrictEqual(-1);
        expect(node4384.getIsSelected()).toStrictEqual(-1);
        expect(node439.getIsSelected()).toStrictEqual(-1);
        expect(node4391.getIsSelected()).toStrictEqual(-1);
        expect(node43917.getIsSelected()).toStrictEqual(-1);
      });
    });
    describe('NOT root node', () => {
      it('should call recalculateIsSelected on a parent node if it exists if shouldParentRecalculate is set', () => {
        let recalcStateWasRequested = false;
        const parent = new CompositeNode({ id: '1', name: 'test1', parent: null });
        parent.recalculateIsSelected = ({ shouldRollup }: RecalculateIsSelectedArgs) => {
          recalcStateWasRequested = true; // Here we're using the fact that ob
          return { root: parent, subtreeState: { selected: [], notSelected: [], undetermined: [] } };
        };
        const child = new CompositeNode({ id: '19', name: 'test19', parent });
        expect(child.getIsSelected()).toStrictEqual(-1);
        child.setIsSelectedForSelfAndChildren({ newSelectedStatus: 0 });
        expect(child.getIsSelected()).toStrictEqual(0);
        expect(recalcStateWasRequested).toStrictEqual(true);
      });
    });
  });
});
