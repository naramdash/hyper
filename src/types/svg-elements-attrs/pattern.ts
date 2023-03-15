import type {
  ClipPath,
  ColorInterpolation,
  Cursor,
  PreserveAspectRatio,
  ViewBox,
} from "../attrs/SVGAttributes";

export type SVGPatternElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
  viewBox: ViewBox;
  preserveAspectRatio: PreserveAspectRatio;
};
