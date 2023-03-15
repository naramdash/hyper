import type { PreserveAspectRatio, ViewBox } from "../attrs/SVGAttributes";
import type { PresentationAttributes } from "../attrs/SVGPresentationAttributes";
import type { Length } from "../css-data-types/length";
import type { Percentage } from "../css-data-types/percentage";

export type SVGSVGElementAttributes = {
  preserveAspectRatio: PreserveAspectRatio;
  viewBox: ViewBox;
  height: Length | Percentage;
  width: Length | Percentage;
  x: Length | Percentage;
  y: Length | Percentage;
} & PresentationAttributes;
