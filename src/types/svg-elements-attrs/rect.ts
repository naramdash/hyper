import type { PathLength } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGRectElementAttributes = {
  x: number | string;
  y: number | string;
  width: number | string;
  height: number | string;
  rx: number | string;
  ry: number | string;
  pathLength: PathLength;
} & PresentationAttributes;
