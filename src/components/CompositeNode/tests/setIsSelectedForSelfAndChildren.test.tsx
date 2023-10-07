import { CompositeNode } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('setIsSelectedForSelfAndChildren', () => {
    it.failing('should correctly set self with no children states', () => {
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
    it.failing('should correctly set simple, shallow children states', () => {
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
    it.failing('should correctly set complex, shallow children states', () => {
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
    it.failing('should correctly set simple, deep children states', () => {
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
    it.failing('should correctly set complex, deep children states', () => {
      //   const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      //   let removedNode = node4391.removeChildById('439');
      //   expect(removedNode).toStrictEqual(null);
      //   expect(node4391.getChildren()).toStrictEqual([]);
      //   const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      //   removedNode = node439.removeChildById('4394');
      //   expect(removedNode).toStrictEqual(null);
      //   expect(node439.getChildren()).toStrictEqual([node4391]);
    });
  });
});
