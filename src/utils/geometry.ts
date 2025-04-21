export const doesLineIntersectRect = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  rect: { x: number; y: number; width: number; height: number }
): boolean => {
  const lines = [
    [rect.x, rect.y, rect.x + rect.width, rect.y], // top
    [rect.x, rect.y + rect.height, rect.x + rect.width, rect.y + rect.height], // bottom
    [rect.x, rect.y, rect.x, rect.y + rect.height], // left
    [rect.x + rect.width, rect.y, rect.x + rect.width, rect.y + rect.height], // right
  ];

  const intersects = (
    ax: number,
    ay: number,
    bx: number,
    by: number,
    cx: number,
    cy: number,
    dx: number,
    dy: number
  ): boolean => {
    const det = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
    if (det === 0) return false;
    const lambda = ((dy - cy) * (dx - ax) + (cx - dx) * (dy - ay)) / det;
    const gamma = ((ay - by) * (dx - ax) + (bx - ax) * (dy - ay)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  };

  return lines.some(([cx, cy, dx, dy]) => intersects(x1, y1, x2, y2, cx, cy, dx, dy));
};
