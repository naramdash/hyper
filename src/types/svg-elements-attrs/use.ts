import type { Href } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";

export type SVGUseElementAttributes = {
  href: Href;
  x: number | string;
  y: number | string;
  width: number | string;
  height: number | string;
} & PresentationAttributes;
