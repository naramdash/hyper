import type { Attributes } from "./Attributes";
import type { SVGCircleElementAttributes } from "./svg-attrs/circle";

type WrittenSVGAttributes = {
  svg: SVGSVGElementAttributes;
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
