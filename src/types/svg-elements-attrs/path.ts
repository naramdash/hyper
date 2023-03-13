import {
  ClipPath,
  ColorInterpolation,
  Cursor,
  D,
  PathLength,
} from "../attrs/SVGAttributes";

export type SVGPathElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
  d: D;
  pathLength: PathLength;
};
