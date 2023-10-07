import { CompositeNode } from '../CompositeNode';
describe('CompositeNode', () => {
  describe('isAncestorById', () => {
    it('should find that 439 is a descendant of 43, but not the opposite', () => {
      const node1 = new CompositeNode({ id: '43', name: 'test43', parent: null });
      const node2 = new CompositeNode({ id: '439', name: 'test439', parent: null });
      expect(node1.isAncestorById(node2.getId())).toStrictEqual(true);
      expect(node2.isAncestorById(node1.getId())).toStrictEqual(false);
    });
    it('should find that 151 is a descendant of 15, but not the opposite', () => {
      const node1 = new CompositeNode({ id: '15', name: 'test15', parent: null });
      const node2 = new CompositeNode({ id: '151', name: 'test151', parent: null });
      expect(node1.isAncestorById(node2.getId())).toStrictEqual(true);
      expect(node2.isAncestorById(node1.getId())).toStrictEqual(false);
    });
    it('should find that 2168 is a descendant of 21, but not the opposite', () => {
      const node1 = new CompositeNode({ id: '21', name: 'test21', parent: null });
      const node2 = new CompositeNode({ id: '2168', name: 'test2168', parent: null });
      expect(node1.isAncestorById(node2.getId())).toStrictEqual(true);
      expect(node2.isAncestorById(node1.getId())).toStrictEqual(false);
    });
    it('should find that 2168 is a descendant of 21, but not the opposite', () => {
      const node1 = new CompositeNode({ id: '21', name: 'test21', parent: null });
      const node2 = new CompositeNode({ id: '2168', name: 'test2168', parent: null });
      expect(node1.isAncestorById(node2.getId())).toStrictEqual(true);
      expect(node2.isAncestorById(node1.getId())).toStrictEqual(false);
    });
  });
});
