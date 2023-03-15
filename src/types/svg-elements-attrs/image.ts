import type {
  ClipPath,
  ColorInterpolation,
  Cursor,
  PreserveAspectRatio,
} from "../attrs/SVGAttributes";

export type SVGImageElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
  preserveAspectRatio: PreserveAspectRatio;
};
