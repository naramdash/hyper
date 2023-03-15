import type { PathLength } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGLineElementAttributes = {
  x1: string | number;
  x2: string | number;
  y1: string | number;
  y2: string | number;
  pathLength: PathLength;
} & PresentationAttributes;
