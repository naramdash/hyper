import { ColorInterpolation, Cursor } from "../attrs/SVGAttributes";
import { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGDefsElementAttributes = {
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
} & PresentationAttributes;
