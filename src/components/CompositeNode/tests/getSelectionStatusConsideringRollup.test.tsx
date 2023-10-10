import { CompositeNode } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('getSelectionStatusConsideringRollup', () => {
    it.failing("should return the node's own state if it has no children", () => {
      const node8391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null });
      node43.setIsSelectedForSelfAndChildren({ newSelectedStatus: 1 });
    });
    it.failing('should return the 0 if any children are undetermined', () => {
      //   const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      //   const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      //   const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
      //   const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null, children: [node438, node439] });
      //   expect(node43.getChildren()).toStrictEqual([node438, node439]);
      //   let removedNode = node43.removeChildById('439');
      //   expect(removedNode).toStrictEqual(node439);
      //   expect(node43.getChildren()).toStrictEqual([node438]);
      //   removedNode = node43.removeChildById('438');
      //   expect(removedNode).toStrictEqual(node438);
      //   expect(node43.getChildren()).toStrictEqual([]);
    });
    it.failing('should return -1 if all children are notSelected', () => {
      //   const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      //   const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      //   const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
      //   const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null, children: [node438, node439] });
      //   expect(node43.getChildren()).toStrictEqual([node438, node439]);
      //   let removedNode = node43.removeChildById('439');
      //   expect(removedNode).toStrictEqual(node439);
      //   expect(node43.getChildren()).toStrictEqual([node438]);
      //   removedNode = node43.removeChildById('438');
      //   expect(removedNode).toStrictEqual(node438);
      //   expect(node43.getChildren()).toStrictEqual([]);
    });
    it.failing('should return 1 if all children are selected', () => {
      //   const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      //   const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      //   const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
      //   const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null, children: [node438, node439] });
      //   expect(node43.getChildren()).toStrictEqual([node438, node439]);
      //   let removedNode = node43.removeChildById('439');
      //   expect(removedNode).toStrictEqual(node439);
      //   expect(node43.getChildren()).toStrictEqual([node438]);
      //   removedNode = node43.removeChildById('438');
      //   expect(removedNode).toStrictEqual(node438);
      //   expect(node43.getChildren()).toStrictEqual([]);
    });
    it.failing('should return 0 if children a mix of selected and notSelected', () => {
      //   const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      //   const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      //   const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
      //   const node43 = new CompositeNode({ id: '43', name: 'test43', parent: null, children: [node438, node439] });
      //   expect(node43.getChildren()).toStrictEqual([node438, node439]);
      //   let removedNode = node43.removeChildById('439');
      //   expect(removedNode).toStrictEqual(node439);
      //   expect(node43.getChildren()).toStrictEqual([node438]);
      //   removedNode = node43.removeChildById('438');
      //   expect(removedNode).toStrictEqual(node438);
      //   expect(node43.getChildren()).toStrictEqual([]);
    });
  });
});
