import {
  ClipPath,
  ColorInterpolation,
  Cursor,
  PreserveAspectRatio,
  ViewBox,
} from "../attrs/SVGAttributes";
import { PresentationAttributes } from "../attrs/SVGPresentationAttributes";
import { Length } from "../css-data-types/length";
import { Percentage } from "../css-data-types/percentage";

export type SVGSVGElementAttributes = {
  "clip-path": ClipPath;
  "color-interpolation": ColorInterpolation;
  cursor: Cursor;
  height: Length | Percentage;
  preserveAspectRatio: PreserveAspectRatio;
  viewBox: ViewBox;
  width: Length | Percentage;
  x: Length | Percentage;
  y: Length | Percentage;
} & PresentationAttributes;
