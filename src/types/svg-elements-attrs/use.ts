import { ClipPath, ColorInterpolation, Cursor } from "../attrs/SVGAttributes";
import { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGUseElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
} & PresentationAttributes;
