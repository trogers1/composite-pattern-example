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
      console.log({ rootResult, child: rootResult?.getChildren()[0] });
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
    it('should create a new Node (adding the initial node as a child) and return it if the potential child should, in fact, be the parent node through MULTIPLE generations', () => {
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
      expect(rootResult!.getChildren()[0].getChildren()).toStrictEqual(1);
      checkNodeProperties({
        node: rootResult!.getChildren()[0].getChildren()[0],
        isSelected: -1,
        parent: rootResult!.getChildren()[0],
        id: initialNode.getId(),
        name: initialNode.getName(),
      });
    });
    it.skip("should add a child node multiple levels deep, if appropriate, and return it's new parent", () => {
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
