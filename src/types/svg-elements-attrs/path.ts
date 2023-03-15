import type { D, PathLength } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGPathElementAttributes = {
  d: D;
  pathLength: PathLength;
} & PresentationAttributes;
