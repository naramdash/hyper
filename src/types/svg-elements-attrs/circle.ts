import type { CX, CY, PathLength } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGCircleElementAttributes = {
  cx: CX;
  cy: CY;
  r: number;
  pathLength: PathLength;
} & PresentationAttributes;
