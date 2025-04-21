import { KonvaEventObject } from 'konva/lib/Node';
import { FC, useEffect, useCallback, useMemo } from 'react';
import { Stage, Layer, Arrow } from 'react-konva';

import { useDiagramState, useDiagramActions, Direction } from '../hooks/useDiagramStore';
import { useConnection } from '../hooks/useConnection';

import {
  getBlockConnectorPoints,
  getConnectorCoordinates,
  isPointerInsideBlock,
} from '../utils/diagram';
import { doesLineIntersectRect } from '../utils/geometry';

import BlockLayer from './layers/BlockLayer';
import HintChip from './ui/HintChip';
import ConnectionLayer from './layers/ConnectionLayer';

const CanvasEditor: FC = () => {
  const { blocks, connections, selectedBlockId } = useDiagramState();
  const {
    updateBlockPosition,
    addConnection,
    removeConnectionFrom,
    setSelectedBlock,
    removeBlockAndConnections,
  } = useDiagramActions();

  const {
    connection,
    hoveredTargetId,
    setHoveredTargetId,
    startConnection,
    updatePosition,
    resetConnection,
  } = useConnection({ removeConnectionFrom });

  // Кэшируем allPoints
  const allPoints = useMemo(() => blocks.flatMap(getBlockConnectorPoints), [blocks]);

  const handleMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (!connection) return;
      const stage = e.target?.getStage();
      const pointer = stage?.getPointerPosition();
      if (!pointer) return;

      updatePosition(pointer.x, pointer.y);

      const hovered = blocks.find(
        (block) => block.id !== connection.fromBlockId && isPointerInsideBlock(pointer, block)
      );

      setHoveredTargetId(hovered?.id || null);
    },
    [connection, blocks, updatePosition, setHoveredTargetId]
  );

  const handleMouseUp = useCallback(() => {
    if (!connection) return;

    const { fromBlockId, fromDirection, startX, startY, currentX, currentY } = connection;

    let targetPoint = allPoints.find((point) => {
      const dx = point.x - currentX;
      const dy = point.y - currentY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 12 && point.blockId !== fromBlockId;
    });

    if (!targetPoint && hoveredTargetId) {
      const block = blocks.find((b) => b.id === hoveredTargetId);
      if (block) {
        const fallbackDir = ['top', 'bottom', 'left', 'right'].filter(
          (d) => d !== fromDirection
        )[0] as Direction;

        const fallbackCoords = getConnectorCoordinates(block, fallbackDir);
        targetPoint = {
          blockId: block.id,
          direction: fallbackDir,
          ...fallbackCoords,
        };
      }
    }

    if (targetPoint) {
      const toBlock = blocks.find((b) => b.id === targetPoint?.blockId);
      if (toBlock) {
        const intersects = doesLineIntersectRect(
          startX,
          startY,
          targetPoint.x,
          targetPoint.y,
          toBlock
        );

        if (intersects) {
          resetConnection();
          return;
        }

        addConnection({
          from: {
            blockId: fromBlockId,
            direction: fromDirection,
          },
          to: {
            blockId: targetPoint.blockId,
            direction: targetPoint.direction as Direction,
          },
        });
      }
    }

    resetConnection();
  }, [connection, allPoints, hoveredTargetId, blocks, addConnection, resetConnection]);

  const handleCanvasClick = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        setSelectedBlock(null);
      }
    },
    [setSelectedBlock]
  );

  const isBlockConnected = useCallback(
    (blockId: string) =>
      connections.some((conn) => conn.from.blockId === blockId || conn.to.blockId === blockId),
    [connections]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedBlockId) {
        removeBlockAndConnections(selectedBlockId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedBlockId, removeBlockAndConnections]);

  return (
    <div className="relative w-full h-screen">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleCanvasClick}
      >
        <Layer>
          <BlockLayer
            blocks={blocks}
            connectionFromBlockId={connection?.fromBlockId ?? null}
            hoveredTargetId={hoveredTargetId}
            isConnecting={!!connection}
            onDragEnd={updateBlockPosition}
            onStartConnect={startConnection}
            isBlockConnected={isBlockConnected}
            selectedBlockId={selectedBlockId}
            onSelect={setSelectedBlock}
          />

          <ConnectionLayer connections={connections} blocks={blocks} />

          {connection && (
            <Arrow
              points={[
                connection.startX,
                connection.startY,
                connection.currentX,
                connection.currentY,
              ]}
              stroke="#4B5563"
              strokeWidth={2}
              lineCap="round"
              lineJoin="round"
            />
          )}
        </Layer>
      </Stage>
      {selectedBlockId && <HintChip />}
    </div>
  );
};

export default CanvasEditor;
