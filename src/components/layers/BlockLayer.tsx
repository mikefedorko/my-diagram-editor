import { FC } from 'react';
import Block from '../blocks/Block';
import { DiagramBlock, Direction } from '../../hooks/useDiagramStore';

interface BlockLayerProps {
  blocks: DiagramBlock[];
  connectionFromBlockId: string | null;
  hoveredTargetId: string | null;
  isConnecting: boolean;
  onDragEnd: (id: string, x: number, y: number) => void;
  onStartConnect: (blockId: string, direction: Direction, x: number, y: number) => void;
  isBlockConnected: (id: string) => boolean;
  selectedBlockId: string | null;
  onSelect: (id: string) => void;
}

const BlockLayer: FC<BlockLayerProps> = ({
  blocks,
  connectionFromBlockId,
  hoveredTargetId,
  isConnecting,
  onDragEnd,
  onStartConnect,
  isBlockConnected,
  selectedBlockId,
  onSelect,
}) => {
  return (
    <>
      {blocks.map((block) => (
        <Block
          key={block.id}
          block={block}
          onDragEnd={onDragEnd}
          onStartConnect={onStartConnect}
          isConnecting={isConnecting}
          isSource={connectionFromBlockId === block.id}
          isTarget={hoveredTargetId === block.id}
          alwaysShowPoints={isBlockConnected(block.id)}
          selected={selectedBlockId === block.id}
          onSelect={onSelect}
        />
      ))}
    </>
  );
};

export default BlockLayer;
