import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGForeignObjectElementAttributes = {
  x: number | string;
  y: number | string;
  width: number | string;
  height: number | string;
} & PresentationAttributes;
