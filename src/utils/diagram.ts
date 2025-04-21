import { DiagramBlock, Direction } from '../hooks/useDiagramStore';

export const getBlockConnectorPoints = (block: DiagramBlock) => {
  const { x, y, width, height } = block;
  return [
    { blockId: block.id, direction: 'top', x: x + width / 2, y },
    { blockId: block.id, direction: 'bottom', x: x + width / 2, y: y + height },
    { blockId: block.id, direction: 'left', x, y: y + height / 2 },
    { blockId: block.id, direction: 'right', x: x + width, y: y + height / 2 },
  ];
};

export const getConnectorCoordinates = (block: DiagramBlock, direction: Direction) => {
  const { x, y, width, height } = block;
  switch (direction) {
    case 'top':
      return { x: x + width / 2, y };
    case 'bottom':
      return { x: x + width / 2, y: y + height };
    case 'left':
      return { x, y: y + height / 2 };
    case 'right':
      return { x: x + width, y: y + height / 2 };
  }
};

export const isPointerInsideBlock = (
  pointer: { x: number; y: number },
  block: DiagramBlock
): boolean => {
  return (
    pointer.x >= block.x &&
    pointer.x <= block.x + block.width &&
    pointer.y >= block.y &&
    pointer.y <= block.y + block.height
  );
};
