import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export type BlockId = string;
export type Direction = 'top' | 'bottom' | 'left' | 'right';

export interface DiagramBlock {
  id: BlockId;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  icon: string;
  color?: string;
}

interface DiagragConnectionValues {
  blockId: BlockId;
  direction: Direction;
}

export interface DiagramConnection {
  from: DiagragConnectionValues;
  to: DiagragConnectionValues;
}

const defaultBlocks: DiagramBlock[] = [
  { id: 'block-1', x: 100, y: 100, width: 120, height: 60, label: 'obj1', icon: 'home' },
  { id: 'block-2', x: 300, y: 100, width: 120, height: 60, label: 'obj2', icon: 'settings' },
  { id: 'block-3', x: 500, y: 100, width: 120, height: 60, label: 'obj3', icon: 'memory' },
  { id: 'block-4', x: 300, y: 250, width: 120, height: 60, label: 'obj4', icon: 'help' },
  { id: 'block-5', x: 100, y: 250, width: 120, height: 60, label: 'obj5', icon: 'cancel' },
  { id: 'block-6', x: 500, y: 250, width: 120, height: 60, label: 'obj6', icon: 'data_object' },
];

interface DiagramStore {
  blocks: DiagramBlock[];
  connections: DiagramConnection[];
  selectedBlockId: BlockId | null;

  actions: {
    setSelectedBlock: (id: BlockId | null) => void;
    setDiagram: (data: { elements: DiagramBlock[]; connections: DiagramConnection[] }) => void;
    updateBlockPosition: (id: BlockId, x: number, y: number) => void;
    addConnection: (connection: DiagramConnection) => void;
    removeConnectionFrom: (blockId: BlockId, direction: Direction) => void;
    removeBlockAndConnections: (id: BlockId) => void;
  };
}

export const useDiagramStore = create<DiagramStore>((set) => ({
  blocks: defaultBlocks,
  connections: [],
  selectedBlockId: null,

  actions: {
    setSelectedBlock: (id) => set({ selectedBlockId: id }),

    setDiagram: ({ elements, connections }) =>
      set({
        blocks: elements,
        connections,
        selectedBlockId: null,
      }),

    updateBlockPosition: (id, x, y) =>
      set((state) => {
        const index = state.blocks.findIndex((block) => block.id === id);
        if (index === -1) return state;
        const newBlocks = [...state.blocks];
        newBlocks[index] = { ...newBlocks[index], x, y };
        return { blocks: newBlocks };
      }),

    addConnection: (connection) =>
      set((state) => ({
        connections: [...state.connections, connection],
      })),

    removeConnectionFrom: (blockId, direction) =>
      set((state) => ({
        connections: state.connections.filter(
          (conn) => !(conn.from.blockId === blockId && conn.from.direction === direction)
        ),
      })),

    removeBlockAndConnections: (id) =>
      set((state) => ({
        blocks: state.blocks.filter((block) => block.id !== id),
        connections: state.connections.filter(
          (conn) => conn.from.blockId !== id && conn.to.blockId !== id
        ),
        selectedBlockId: null,
      })),
  },
}));

export const useDiagramState = () =>
  useDiagramStore(
    useShallow((state) => ({
      blocks: state.blocks,
      connections: state.connections,
      selectedBlockId: state.selectedBlockId,
    }))
  );

export const useDiagramActions = () => useDiagramStore((state) => state.actions);
