import { CompositeNode } from '../CompositeNode';

describe('CompositeNode', () => {
  describe('constructor', () => {
    it('should print out a simple node correctly', () => {
      const node1 = new CompositeNode({ id: '1', name: 'test1', parent: null, onChange: (args) => 'test' });
      expect(node1.toString()).toStrictEqual(`
{
  id: 1,
  name: test1,
  parent: null,
  isSelected: -1,
  children: [],
}
`);
    });
    it('should print out a node with a parent and a node with a child correctly', () => {
      const node98 = new CompositeNode({ id: '98', name: 'test98', parent: null });
      const node987 = new CompositeNode({ id: '987', name: 'test987', parent: null });
      node98.addChild({ node: node987 });
      expect(node98.toString()).toStrictEqual(`
{
  id: 98,
  name: test98,
  parent: null,
  isSelected: -1,
  children: [987],
}
`);
      expect(node987.toString()).toStrictEqual(`
{
  id: 987,
  name: test987,
  parent: 98,
  isSelected: -1,
  children: [],
}
`);
    });
    it('should print out a node with a parent and a node with a child correctly when child was added during the creation of the parent', () => {
      const node987 = new CompositeNode({ id: '987', name: 'test987', parent: null });
      const node98 = new CompositeNode({ id: '98', name: 'test98', parent: null, children: [node987] });
      expect(node98.toString()).toStrictEqual(`
{
  id: 98,
  name: test98,
  parent: null,
  isSelected: -1,
  children: [987],
}
`);
      expect(node987.toString()).toStrictEqual(`
{
  id: 987,
  name: test987,
  parent: 98,
  isSelected: -1,
  children: [],
}
`);
    });
    it('should print out a node with a parent and multiple children correctly', () => {
      const node57 = new CompositeNode({ id: '57', name: 'test57', parent: null });
      const node576 = new CompositeNode({ id: '576', name: 'test576', parent: null });
      const node573 = new CompositeNode({ id: '573', name: 'test573', parent: null });
      node57.addChild({ node: node576 });
      node57.addChild({ node: node573 });
      expect(node57.toString()).toStrictEqual(`
{
  id: 57,
  name: test57,
  parent: null,
  isSelected: -1,
  children: [576, 573],
}
`);
      expect(node576.toString()).toStrictEqual(`
{
  id: 576,
  name: test576,
  parent: 57,
  isSelected: -1,
  children: [],
}
`);
      expect(node573.toString()).toStrictEqual(`
{
  id: 573,
  name: test573,
  parent: 57,
  isSelected: -1,
  children: [],
}
`);
    });
  });
});
