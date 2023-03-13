import type { Attributes } from "./Attributes";

import type { SVGCircleElementAttributes } from "./svg-elements-attrs/circle";
import { SVGGElementAttributes } from "./svg-elements-attrs/g";
import type { SVGSVGElementAttributes } from "./svg-elements-attrs/svg";

type WrittenSVGAttributes = {
  svg: SVGSVGElementAttributes;
  g: SVGGElementAttributes;
  circle: SVGCircleElementAttributes;
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
