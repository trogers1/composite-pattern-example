import { CompositeNode } from '../CompositeNode';
import { NaicsHierarchyItem } from '../naics';
import { checkNodeProperties } from './helpers';

describe('CompositeNode', () => {
  describe('addChild: NaicsHeirarchyItem', () => {
    it('should add a child to a potential parent node when appropriate', () => {
      const parent: CompositeNode = new CompositeNode({
        id: '34',
        name: 'test34',
        parent: null,
        onChange: (args) => 'test',
      });
      const potentialChild: NaicsHierarchyItem = { id: '343', name: 'test343' };
      const rootResult = parent.addChild({ item: potentialChild });
      expect(rootResult).toStrictEqual(parent);
      const expectedChildFormat = new CompositeNode({
        id: potentialChild.id,
        name: potentialChild.name,
        parent,
        onChange: (args) => {},
      });
      checkNodeProperties({
        node: parent,
        isSelected: -1,
        parent: null,
        children: [expectedChildFormat],
        id: parent.getId(),
        name: parent.getName(),
      });
      expect(parent.children.length).toStrictEqual(1);
      expect(parent.children[0]).toStrictEqual(expectedChildFormat);
      checkNodeProperties({
        node: parent.children[0],
        isSelected: -1,
        parent: parent,
        children: [],
        id: potentialChild.id,
        name: potentialChild.name,
      });
    });
    it.only('should NOT the a child of the same ID twice (nor will it overwrite the child)', () => {
      const parent: CompositeNode = new CompositeNode({
        id: '34',
        name: 'test34',
        parent: null,
        onChange: (args) => 'test',
      });
      const potentialChild: NaicsHierarchyItem = { id: '343', name: 'test343' };
      const potentialChild2: NaicsHierarchyItem = { id: '343', name: 'test343.2' };
      let rootResult = parent.addChild({ item: potentialChild });
      expect(rootResult).toStrictEqual(parent);
      rootResult = parent.addChild({ item: potentialChild2 });
      expect(rootResult).toStrictEqual(null);
      const expectedChildFormat = new CompositeNode({
        id: potentialChild.id,
        name: potentialChild.name,
        parent,
      });
      checkNodeProperties({
        node: parent,
        isSelected: -1,
        parent: null,
        children: [expectedChildFormat],
        id: parent.getId(),
        name: parent.getName(),
      });
      expect(parent.children.length).toStrictEqual(1);
      expect(parent.children[0]).toStrictEqual(expectedChildFormat);
      checkNodeProperties({
        node: parent.children[0],
        isSelected: -1,
        parent: parent,
        children: [],
        id: potentialChild.id,
        name: potentialChild.name,
      });
    });
    it('should add MULTIPLE children to a potential parent node when appropriate', () => {
      const parent: CompositeNode = new CompositeNode({
        id: '34',
        name: 'test34',
        parent: null,
        onChange: (args) => 'test',
      });
      const potentialChild: NaicsHierarchyItem = { id: '343', name: 'test343' };
      const potentialChild2: NaicsHierarchyItem = { id: '344', name: 'test344' };

      // Check first child rootResult
      let rootResult = parent.addChild({ item: potentialChild });
      expect(rootResult).toStrictEqual(parent);
      const expectedChildFormat = new CompositeNode({
        id: potentialChild.id,
        name: potentialChild.name,
        parent,
        onChange: (args) => {},
      });
      checkNodeProperties({
        node: parent,
        isSelected: -1,
        parent: null,
        children: [expectedChildFormat],
        id: parent.getId(),
        name: parent.getName(),
      });
      expect(parent.children.length).toStrictEqual(1);
      expect(parent.children[0]).toStrictEqual(expectedChildFormat);
      checkNodeProperties({
        node: parent.children[0],
        isSelected: -1,
        parent: parent,
        children: [],
        id: potentialChild.id,
        name: potentialChild.name,
      });

      // Check second child rootResult

      rootResult = parent.addChild({ item: potentialChild2 });
      expect(rootResult).toStrictEqual(parent);
      const expectedChildFormat2 = new CompositeNode({
        id: potentialChild2.id,
        name: potentialChild2.name,
        parent,
        onChange: (args) => {},
      });
      expect(() => {
        checkNodeProperties({
          node: parent,
          isSelected: -1,
          parent: null,
          children: [expectedChildFormat], // Should have 2!
          id: parent.getId(),
          name: parent.getName(),
        });
      }).toThrow();
      checkNodeProperties({
        node: parent,
        isSelected: -1,
        parent: null,
        children: [expectedChildFormat, expectedChildFormat2],
        id: parent.getId(),
        name: parent.getName(),
      });
      expect(parent.children.length).toStrictEqual(2);
      expect(parent.children[1]).toStrictEqual(expectedChildFormat2);
      checkNodeProperties({
        node: parent.children[1],
        isSelected: -1,
        parent: parent,
        children: [],
        id: potentialChild2.id,
        name: potentialChild2.name,
      });
    });
    it('should return `null` if the two nodes are unrelated', () => {
      const parent: CompositeNode = new CompositeNode({
        id: '1',
        name: 'test1',
        parent: null,
        onChange: (args) => 'test',
      });
      const potentialChild: NaicsHierarchyItem = { id: '21', name: 'test2' };
      const rootResult = parent.addChild({ item: potentialChild });
      expect(rootResult).toStrictEqual(null);
      // Make sure no children were added and that the node remains unmolested
      checkNodeProperties({ node: parent, isSelected: -1, parent: null, children: [], id: '1', name: 'test1' });
    });
    it('should create a new Node (adding the initial node as a child) and return it if the potential child should, in fact, be the parent node', () => {
      const initialNode: CompositeNode = new CompositeNode({
        id: '4399',
        name: 'test1',
        parent: null,
        onChange: (args) => 'test',
      });
      const potentialChild: NaicsHierarchyItem = { id: '439', name: 'test2', parentId: '43' };
      const rootResult = initialNode.addChild({ item: potentialChild });
      expect(rootResult).toBeInstanceOf(CompositeNode); // it wasn't added as a child, it was added as a parent!
      checkNodeProperties({
        node: rootResult!,
        id: potentialChild.id,
        name: potentialChild.name,
        isSelected: -1,
        children: [initialNode],
        parent: null,
      });
      // Make sure no children were added to the initialNode and that the node remains unmolested
      checkNodeProperties({
        node: initialNode,
        isSelected: -1,
        parent: rootResult,
        children: [],
        id: initialNode.getId(),
        name: initialNode.getName(),
      });
    });
    it('should create a new Node (adding the initial node as a child) and return it as the root if the potential child should, in fact, be the parent node through MULTIPLE generations', () => {
      const initialNode: CompositeNode = new CompositeNode({
        id: '4399',
        name: 'test1',
        parent: null,
        onChange: (args) => 'test',
      });
      const potentialChild: NaicsHierarchyItem = { id: '439', name: 'test439', parentId: '43' };
      const potentialChild2: NaicsHierarchyItem = { id: '43', name: 'test43' };
      let rootResult = initialNode.addChild({ item: potentialChild });
      rootResult = initialNode.addChild({ item: potentialChild2 });
      console.log({ rootResult: rootResult?.getChildrenState({ shouldRollup: false }) });
      expect(rootResult).toBeInstanceOf(CompositeNode);
      // Check that the end rootResult is potentialChild2 at the top level
      checkNodeProperties({
        node: rootResult!,
        id: potentialChild2.id,
        name: potentialChild2.name,
        isSelected: -1,
        parent: null,
      });
      expect(rootResult?.getChildren().length).toStrictEqual(1);
      // Make sure potentialChild is the child of potentialChild2
      checkNodeProperties({
        node: rootResult!.getChildren()[0],
        isSelected: -1,
        parent: rootResult,
        id: potentialChild.id,
        name: potentialChild.name,
      });

      // Make sure initial node is the child of potentialChild
      expect(rootResult!.getChildren()[0].getChildren().length).toStrictEqual(1);
      checkNodeProperties({
        node: rootResult!.getChildren()[0].getChildren()[0],
        isSelected: -1,
        parent: rootResult!.getChildren()[0],
        id: initialNode.getId(),
        name: initialNode.getName(),
      });
    });
    it.only('should add a new node in the middle of a tree, adopting a single child', () => {
      const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      // const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
      const node4 = new CompositeNode({ id: '4', name: 'test4', parent: null, children: [node439] });
      console.log(node4391.toString());
      console.log(node439.toString());
      console.log(node4.toString());
      expect(node4.getChildren()).toStrictEqual([node439]);
      const node43: NaicsHierarchyItem = { id: '43', name: 'test43' };
      console.log(node43.toString());
      const root = node439.addChild({ item: node43 });

      expect(root).toStrictEqual(node4);
      expect(root!.getChildren()).toStrictEqual([
        new CompositeNode({ id: node43.id, name: node43.name, children: [node439], parent: node4 }),
      ]);
    });
    it('should add a new node in the middle of a tree, adopting multiple children', () => {
      const node4391 = new CompositeNode({ id: '4391', name: 'test4391', parent: null });
      const node439 = new CompositeNode({ id: '439', name: 'test439', parent: null, children: [node4391] });
      const node438 = new CompositeNode({ id: '438', name: 'test438', parent: null });
      const node4 = new CompositeNode({ id: '4', name: 'test4', parent: null, children: [node438, node439] });
      expect(node4.getChildren()).toStrictEqual([node439]);
      const newNode: NaicsHierarchyItem = { id: '43', name: 'test43' };
      const root = node439.addChild({ item: newNode });
      expect(root).toStrictEqual(node4);
      expect(root!.getChildren()).toStrictEqual([
        new CompositeNode({ id: newNode.id, name: newNode.name, children: [node438, node439], parent: node4 }),
      ]);
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
