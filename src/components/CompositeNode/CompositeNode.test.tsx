import { CompositeNode, CompositeNodeConstructorArgs, SelectionValue } from './CompositeNode';
import { NaicsHierarchyItem } from './naics';

const checkNodeProperties = ({
  node,
  ...args
}: Omit<CompositeNodeConstructorArgs, 'onChange'> & {
  isSelected: SelectionValue;
  children: CompositeNode[];
  node: CompositeNode;
}) => {
  expect(node.id).toStrictEqual(args.id);
  expect(node.getName()).toStrictEqual(args.name);
  expect(node.getParent()).toStrictEqual(args.parent);
  expect(node.isSelected).toStrictEqual(args.isSelected);
  expect(node.children).toStrictEqual(args.children);
};

describe('CompositeNode', () => {
  describe('constructor', () => {
    it('should appropriately create a CompositeNode WITHOUT a parent', () => {
      const node1 = new CompositeNode({ id: '1', name: 'test1', parent: null, onChange: (args) => 'test' });
      checkNodeProperties({ node: node1, isSelected: -1, parent: null, children: [], id: '1', name: 'test1' });
    });
    it('should appropriately create a CompositeNode WITH a parent', () => {
      const node1 = new CompositeNode({ id: '1', name: 'test1', parent: null, onChange: (args) => 'test' });
      const node2 = new CompositeNode({ id: '2', name: 'test2', parent: node1, onChange: (args) => 'test' });
      checkNodeProperties({ node: node2, isSelected: -1, parent: node1, children: [], id: '2', name: 'test2' });
    });
  });
  describe('addChild', () => {
    describe('addChild: NaicsHeirarchyItem', () => {
      it('should return `null` if the two nodes are unrelated', () => {
        const parent: CompositeNode = new CompositeNode({
          id: '1',
          name: 'test1',
          parent: null,
          onChange: (args) => 'test',
        });
        const potentialChild: NaicsHierarchyItem = { id: '21', name: 'test2' };
        const result = parent.addChild({ item: potentialChild });
        expect(result).toStrictEqual(null);
        // Make sure no children were added and that the node remains unmolested
        checkNodeProperties({ node: parent, isSelected: -1, parent: null, children: [], id: '1', name: 'test1' });
      });
      it('should create a new Node and ', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
    });
    describe('addChild: CompositeNode', () => {
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
      it.skip('should add a child node if appropriate', () => {
        expect(false);
      });
    });
  });
});
