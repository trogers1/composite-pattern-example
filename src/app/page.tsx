'use client';
import { useEffect, useReducer } from 'react';
import { CompositeNode, CheckedIdsRollup } from '@/components/Hierarchy/Hierarchy';
import { naicsHierarchy, NaicsHierarchyItem } from '@/components/Hierarchy/naics';

const hierarchyReducer = (state: CompositeNode[], action: { type: 'update-root-nodes'; newRoots: CompositeNode[] }) => {
  const newState: typeof state = state.reduce((acc: typeof state, curr) => {
    const newRootToUpdate = action.newRoots.find((rootNode) => rootNode.getId() === curr.getId());
    if (newRootToUpdate) {
      return [...acc, newRootToUpdate];
    }
    return [...acc, curr];
  }, []);

  return newState;
};

const initializeState = (naics: NaicsHierarchyItem[]): CompositeNode[] => {
  // naics.sort((a, b) => Number(a.id) - Number(b.id));
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
        onChange: (id) => {},
        checkedIds: {},
      });
      hierarchies.push(newRoot);
    }
  }
  return hierarchies;
};

export default function Home() {
  const [state, dispatch] = useReducer<typeof hierarchyReducer, NaicsHierarchyItem[]>(
    hierarchyReducer,
    naicsHierarchy,
    initializeState
  );
  // useEffect(() => dispatch({type: 'update-root-nodes', newRoots: initializeState(naicsHierarchy)}), [])
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
