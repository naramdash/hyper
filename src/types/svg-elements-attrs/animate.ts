import {
  Accumulate,
  Additive,
  AttributeName,
  Begin,
  By,
  CalcMode,
  ColorInterpolation,
} from "../attrs/SVGAttributes";

export type SVGAnimateElementAttributes = {
  accumulate: Accumulate;
  additive: Additive;
  attributeName: AttributeName;
  begin: Begin;
  by: By;
  calcMode: CalcMode;
  "color-interpolation": ColorInterpolation;
};
