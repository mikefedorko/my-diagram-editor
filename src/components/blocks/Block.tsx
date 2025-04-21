import { FC, useState } from 'react';
import { Group, Rect, Text } from 'react-konva';

import { BlockId, DiagramBlock, Direction } from '../../hooks/useDiagramStore';

import AnimatedPoint from './AnimatedPoint';

interface BlockProps {
  block: DiagramBlock;
  onDragEnd: (id: string, x: number, y: number) => void;
  onStartConnect: (blockId: BlockId, direction: Direction, startX: number, startY: number) => void;
  isConnecting?: boolean;
  isTarget?: boolean;
  isSource?: boolean;
  alwaysShowPoints?: boolean;
  selected?: boolean;
  onSelect?: (id: BlockId) => void;
}

const Block: FC<BlockProps> = ({
  block,
  onDragEnd,
  onStartConnect,
  onSelect,
  selected,
  isConnecting = false,
  isTarget = false,
  isSource = false,
  alwaysShowPoints = false,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const points = [
    { dir: 'top', x: block.x + block.width / 2, y: block.y },
    { dir: 'bottom', x: block.x + block.width / 2, y: block.y + block.height },
    { dir: 'left', x: block.x, y: block.y + block.height / 2 },
    { dir: 'right', x: block.x + block.width, y: block.y + block.height / 2 },
  ];

  const shouldShowPoints = () => {
    return alwaysShowPoints || isSource || isTarget || (isHovered && !isConnecting);
  };

  return (
    <Group
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(block.id)}
      draggable={!isConnecting}
      x={block.x}
      y={block.y}
      onDragMove={(e) => onDragEnd(block.id, e.target.x(), e.target.y())}
      onDragEnd={(e) => onDragEnd(block.id, e.target.x(), e.target.y())}
    >
      <Rect
        width={block.width}
        height={block.height}
        fill={block.color || '#ffffff'}
        stroke={selected ? '#bbbbbb' : isConnecting ? '#4B5563' : undefined}
        cornerRadius={7}
        shadowBlur={2}
        strokeWidth={selected || isConnecting ? 1 : 0}
      />
      <Text
        text={block.icon}
        fontSize={24}
        x={block.width / 2 - 10}
        y={block.height / 2 - 20}
        fontFamily="Material Icons"
        fill="#4B5563"
      />
      <Text
        text={block.label}
        fontSize={14}
        x={block.width / 2 - block.label.length * 3.5}
        y={block.height / 2 + 10}
        align="center"
        fill="#4B5563"
      />

      {shouldShowPoints() &&
        points.map((point) => (
          <AnimatedPoint
            key={point.dir}
            x={point.x - block.x}
            y={point.y - block.y}
            visible={shouldShowPoints()}
            onMouseDown={(absX, absY) =>
              onStartConnect(block.id, point.dir as Direction, absX, absY)
            }
          />
        ))}
    </Group>
  );
};

export default Block;
