import { CompositeNode, CompositeNodeConstructorArgs, SelectionValue } from '../CompositeNode';

export const checkNodeProperties = ({
  node,
  ...args
}: Omit<CompositeNodeConstructorArgs, 'onChange'> & {
  isSelected: SelectionValue;
  children?: CompositeNode[];
  node: CompositeNode;
}) => {
  expect(node.id).toStrictEqual(args.id);
  expect(node.getName()).toStrictEqual(args.name);
  expect(node.getParent()).toStrictEqual(args.parent);
  expect(node.isSelected).toStrictEqual(args.isSelected);
  args.children && expect(node.children).toStrictEqual(args.children);
};
