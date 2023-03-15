import type { Attributes } from "./Attributes";

import type { SVGCircleElementAttributes } from "./svg-elements-attrs/circle";
import type { SVGGElementAttributes } from "./svg-elements-attrs/g";
import type { SVGLineElementAttributes } from "./svg-elements-attrs/line";
import type { SVGPathElementAttributes } from "./svg-elements-attrs/path";
import type { SVGRectElementAttributes } from "./svg-elements-attrs/rect";
import type { SVGSVGElementAttributes } from "./svg-elements-attrs/svg";
import type { SVGUseElementAttributes } from "./svg-elements-attrs/use";

type WrittenSVGAttributes = {
  svg: SVGSVGElementAttributes;
  circle: SVGCircleElementAttributes;
  line: SVGLineElementAttributes;
  path: SVGPathElementAttributes;
  rect: SVGRectElementAttributes;
  g: SVGGElementAttributes;
  use: SVGUseElementAttributes;
};

type SVGAttributesMap<TagName extends keyof SVGElementTagNameMap> = Partial<
  TagName extends keyof WrittenSVGAttributes
    ? WrittenSVGAttributes[TagName]
    : {}
>;

type SVGAttributes<
  TagName extends keyof SVGElementTagNameMap,
  Element extends SVGElementTagNameMap[TagName]
> = Attributes<Element> & SVGAttributesMap<TagName>;

export type { SVGAttributes };
