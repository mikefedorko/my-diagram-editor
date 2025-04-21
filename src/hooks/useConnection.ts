import { useState } from 'react';
import { Direction } from './useDiagramStore';

export type ConnectionInProgress = {
  fromBlockId: string;
  fromDirection: Direction;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
} | null;

type UseConnectionParams = {
  removeConnectionFrom: (blockId: string, direction: Direction) => void;
};

export const useConnection = ({ removeConnectionFrom }: UseConnectionParams) => {
  const [connection, setConnection] = useState<ConnectionInProgress>(null);
  const [hoveredTargetId, setHoveredTargetId] = useState<string | null>(null);

  const startConnection = (
    blockId: string,
    direction: Direction,
    startX: number,
    startY: number
  ) => {
    removeConnectionFrom(blockId, direction);

    setConnection({
      fromBlockId: blockId,
      fromDirection: direction,
      startX,
      startY,
      currentX: startX,
      currentY: startY,
    });
  };

  const updatePosition = (x: number, y: number) => {
    if (connection) {
      setConnection({
        ...connection,
        currentX: x,
        currentY: y,
      });
    }
  };

  const resetConnection = () => {
    setConnection(null);
    setHoveredTargetId(null);
  };

  return {
    connection,
    hoveredTargetId,
    setHoveredTargetId,
    startConnection,
    updatePosition,
    resetConnection,
  };
};
