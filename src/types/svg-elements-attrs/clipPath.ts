import type {
  ClipPath,
  ClipPathUnits,
  ColorInterpolation,
} from "../attrs/SVGAttributes";

export type SVGClipPathElementAttributes = {
  "clip-path": ClipPath;
  clipPathUnits: ClipPathUnits;
  "color-interpolation": ColorInterpolation;
};
