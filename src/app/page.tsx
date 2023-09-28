'use client';
import { Dispatch, useEffect, useReducer } from 'react';
import { CompositeNode, CheckedIdsRollup } from '@/components/Hierarchy/Hierarchy';
import { naicsHierarchy, NaicsHierarchyItem } from '@/components/Hierarchy/naics';

const hierarchyReducer = (
  prevState: CompositeNode[],
  action: { type: 'update-root-nodes'; newRoots: CompositeNode[] }
) => {
  console.log({ prevState });
  const newState: typeof prevState = prevState.reduce(
    (acc: typeof prevState, curr) => {
      console.log(`Checking old state for matching root`);
      const alreadyInState = acc.find((rootNode) => rootNode.getId() === curr.getId());

      if (alreadyInState) {
        return acc;
      }
      return [...acc, curr];
    },
    [...action.newRoots]
  );

  return newState.sort((a, b) => Number(a.getId()) - Number(b.getId()));
};

const initializeState = (
  naics: NaicsHierarchyItem[],
  onChange: Dispatch<{
    type: 'update-root-nodes';
    newRoots: CompositeNode[];
  }>
): CompositeNode[] => {
  console.log(`initializing ...`);
  console.log({ naics });
  const hierarchies: CompositeNode[] = [];
  for (let industry of naics) {
    const didAddChild = hierarchies.reduce((acc: CompositeNode | null, curr: CompositeNode) => {
      if (acc) {
        // We already added the child in previous iterations, so skip
        return acc;
      }
      return curr.addChild({ item: industry, checkedIds: {} });
    }, null);
    if (!didAddChild) {
      const newRoot = new CompositeNode({
        id: industry.id,
        name: industry.name,
        parent: null,
        onChange: (args) => onChange({ type: 'update-root-nodes', newRoots: [args.root] }),
        checkedIds: {},
      });
      hierarchies.push(newRoot);
    }
  }
  console.log('initialized!');
  console.log({ hierarchies });
  return hierarchies;
};

export default function Home() {
  const [state, dispatch] = useReducer<typeof hierarchyReducer>(hierarchyReducer, []);
  useEffect(() => {
    const newState = initializeState(naicsHierarchy, dispatch);
    console.log({ newState, before: 'dispatch' });
    dispatch({ type: 'update-root-nodes', newRoots: newState });
  }, []);
  useEffect(() => console.log({ state }), [state]);
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex"></div>
      {state
        ? state.map((node) => (
            <div className="p-4" key={node.getId()}>
              {node.render()}
            </div>
          ))
        : ''}
    </main>
  );
}
