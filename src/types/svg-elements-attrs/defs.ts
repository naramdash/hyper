import type { ColorInterpolation, Cursor } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGDefsElementAttributes = {
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
} & PresentationAttributes;
