import { CompositeNode } from '../CompositeNode';
import { checkNodeProperties } from './helpers';

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
});
