import { CompositeNode } from '../CompositeNode';

describe('CompositeNode', () => {
  describe('getRoot', () => {
    it('should return the self if no parents', () => {
      const initialNode: CompositeNode = new CompositeNode({
        id: '11',
        name: 'test11',
        parent: null,
        onChange: (args) => 'test',
      });
      expect(initialNode.getRoot()).toStrictEqual(initialNode);
    });
    it('should return the parent if only one level deep', () => {
      const childNode: CompositeNode = new CompositeNode({
        id: '331',
        name: 'test331',
        parent: null,
        onChange: (args) => 'test',
      });
      const parentNode: CompositeNode = new CompositeNode({
        id: '33',
        name: 'test33',
        parent: null,
        children: [childNode],
        onChange: (args) => 'test',
      });
      childNode.setParent(parentNode);
      expect(childNode.getRoot()).toStrictEqual(parentNode);
    });
    it('should traverse up through multiple ancestors to find the root', () => {
      const childNode: CompositeNode = new CompositeNode({
        id: '33131',
        name: 'test33131',
        parent: null,
        onChange: (args) => 'test',
      });
      const child2Node: CompositeNode = new CompositeNode({
        id: '3313',
        name: 'test3313',
        parent: null,
        children: [childNode],
        onChange: (args) => 'test',
      });
      childNode.setParent(child2Node);
      const child3Node: CompositeNode = new CompositeNode({
        id: '331',
        name: 'test331',
        parent: null,
        children: [child2Node],
        onChange: (args) => 'test',
      });
      child2Node.setParent(child3Node);
      const parentNode: CompositeNode = new CompositeNode({
        id: '33',
        name: 'test33',
        parent: null,
        children: [child3Node],
        onChange: (args) => 'test',
      });
      child3Node.setParent(parentNode);
      expect(childNode.getRoot()).toStrictEqual(parentNode);
    });
  });
});
