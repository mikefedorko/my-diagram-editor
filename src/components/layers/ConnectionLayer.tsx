import { FC } from 'react';
import { Arrow } from 'react-konva';
import { DiagramBlock, DiagramConnection } from '../../hooks/useDiagramStore';
import { getConnectorCoordinates } from '../../utils/diagram';

interface ConnectionLayerProps {
  connections: DiagramConnection[];
  blocks: DiagramBlock[];
}

const ConnectionLayer: FC<ConnectionLayerProps> = ({ connections, blocks }) => {
  return (
    <>
      {connections.map((conn, index) => {
        const fromBlock = blocks.find((b) => b.id === conn.from.blockId);
        const toBlock = blocks.find((b) => b.id === conn.to.blockId);
        if (!fromBlock || !toBlock) return null;

        const from = getConnectorCoordinates(fromBlock, conn.from.direction);
        const to = getConnectorCoordinates(toBlock, conn.to.direction);

        return (
          <Arrow
            key={index}
            points={[from.x, from.y, to.x, to.y]}
            stroke="#3B82F6"
            strokeWidth={2}
            pointerLength={10}
            pointerWidth={10}
            lineCap="round"
            lineJoin="round"
          />
        );
      })}
    </>
  );
};

export default ConnectionLayer;
