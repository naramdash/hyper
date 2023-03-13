import { ClipPath, ColorInterpolation, Cursor } from "../attrs/SVGAttributes";
import { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGGElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
} & PresentationAttributes;
