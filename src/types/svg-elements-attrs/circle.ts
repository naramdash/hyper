import {
  ClipPath,
  ColorInterpolation,
  Cursor,
  CX,
  CY,
  PathLength,
} from "../attrs/SVGAttributes";

export type SVGCircleElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
  cx: CX;
  cy: CY;
  r: number;
  pathLength: PathLength;
};
