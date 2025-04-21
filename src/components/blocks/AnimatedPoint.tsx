import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { FC, useEffect, useRef } from 'react';
import { Circle } from 'react-konva';

interface AnimatedPointProps {
  x: number;
  y: number;
  visible: boolean;
  onMouseDown: (absX: number, absY: number) => void;
}

const AnimatedPoint: FC<AnimatedPointProps> = ({ x, y, visible, onMouseDown }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const circleRef = useRef<Konva.Circle>(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.to({
        opacity: visible ? 1 : 0,
        duration: 0.25,
        easing: Konva.Easings.EaseInOut,
      });
    }
  }, [visible]);

  return (
    <Circle
      ref={circleRef}
      x={x}
      y={y}
      radius={6}
      fill="#abc9f8"
      stroke="#3B82F6"
      strokeWidth={2}
      shadowBlur={6}
      opacity={0}
      scale={{ x: 1.1, y: 1.1 }}
      onMouseEnter={(e: KonvaEventObject<MouseEvent>) => {
        e.target.to({ scaleX: 1.3, scaleY: 1.3, duration: 0.1 });
        const container = e.target.getStage()?.container();
        if (container) {
          container.style.cursor = 'pointer';
        }
      }}
      onMouseLeave={(e) => {
        e.target.to({ scaleX: 1.1, scaleY: 1.1, duration: 0.1 });
        const container = e.target.getStage()?.container();
        if (container) {
          container.style.cursor = 'default';
        }
      }}
      onMouseDown={(e) => {
        e.cancelBubble = true;
        const absX = e.target.getAbsolutePosition().x;
        const absY = e.target.getAbsolutePosition().y;
        onMouseDown(absX, absY);
      }}
    />
  );
};

export default AnimatedPoint;
