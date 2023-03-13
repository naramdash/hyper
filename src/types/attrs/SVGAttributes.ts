import { BasicShape } from "../css-data-types/basic-shape";
import { BeginValueList } from "../css-data-types/begin-value-list";
import { GeometryBox } from "../css-data-types/geometry-box";
import { LengthPercentage } from "../css-data-types/length-percentage";
import { NumberOptionalNumber } from "../css-data-types/number-optional-number";
import { Url } from "../css-data-types/url";
import { Color as CSSColor } from "../css-data-types/color";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/accumulate
 */
export type Accumulate = "sum";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/additive
 */
export type Additive = "replace" | "sum";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/alignment-baseline
 */
export type AlignmentBaseline =
  | "auto"
  | "baseline"
  | "before-edge"
  | "text-before-edge"
  | "middle"
  | "central"
  | "after-edge"
  | "text-after-edge"
  | "ideographic"
  | "alphabetic"
  | "hanging"
  | "mathematical"
  | "top"
  | "center"
  | "bottom";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/amplitude
 */
export type Amplitude = number;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/attributeName
 */
export type AttributeName = string;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/azimuth
 */
export type Azimuth = number;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency
 */
export type BaseFrequency = NumberOptionalNumber;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
 */
export type BaselineShift = LengthPercentage | "sub" | "super";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin
 */
export type Begin = BeginValueList;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/bias
 */
export type Bias = number;

/**
 * The exact value type for this attribute depends on the value of the attribute that will be animated.
 *
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/by
 */
export type By = any;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode
 */
export type CalcMode = "discrete" | "linear" | "paced" | "spline";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
 *
 * Type Definitions Not Completed
 *
 * TODO
 */
export type ClipPath = Url | BasicShape | GeometryBox;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule
 *
 * Attributes Not Setted
 *
 * TODO
 */
export type ClipRule = "nonzero" | "evenodd" | "inherit";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clipPathUnits
 */
export type ClipPathUnits = "userSpaceOnUse" | "objectBoundingBox";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color
 */
export type Color = CSSColor | "inherit";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation
 */
export type ColorInterpolation = "auto" | "sRGB" | "linearRGB";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters
 */
export type ColorInterpolationFilters = "auto" | "sRGB" | "linearRGB";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cursor
 *
 * Funciri Not Completed
 *
 * TODO
 */
export type Cursor =
  | "auto"
  | "crosshair"
  | "default"
  | "pointer"
  | "move"
  | "e-resize"
  | "ne-resize"
  | "nw-resize"
  | "n-resize"
  | "se-resize"
  | "sw-resize"
  | "s-resize"
  | "w-resiz"
  | "text"
  | "wait"
  | "help"
  | "inherit";

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx
 */
export type CX = LengthPercentage;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy
 */
export type CY = LengthPercentage;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 */
export type D = string;

export type diffuseConstant = TODO;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction
 */
export type Direction = "ltr" | "rtl" | "inherit";

export type display = TODO;
export type divisor = TODO;
export type DominantBaseline = TODO;
export type dur = TODO;
export type dx = TODO;
export type dy = TODO;
export type edgeMode = TODO;
export type elevation = TODO;
export type end = TODO;
export type exponent = TODO;
export type fill = TODO;
export type fillOpacity = TODO;
export type fillRule = TODO;
export type filter = TODO;
export type filterUnits = TODO;
export type floodColor = TODO;
export type floodOpacity = TODO;
export type fontFamily = TODO;
export type fontSize = TODO;
export type fontSizeAdjust = TODO;
export type fontStretch = TODO;
export type fontStyle = TODO;
export type fontVariant = TODO;
export type fontWeight = TODO;
export type fr = TODO;
export type from = TODO;
export type fx = TODO;
export type fy = TODO;
export type gradientTransform = TODO;
export type gradientUnits = TODO;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href
 */
export type href = TODO;

export type imageRendering = TODO;
export type In = TODO;
export type in2 = TODO;
export type intercept = TODO;
export type k1 = TODO;
export type k2 = TODO;
export type k3 = TODO;
export type k4 = TODO;
export type kernelMatrix = TODO;
export type kernelUnitLength = TODO;
export type keyPoints = TODO;
export type keySplines = TODO;
export type keyTimes = TODO;
export type lang = TODO;
export type lengthAdjust = TODO;
export type letterSpacing = TODO;
export type lightingColor = TODO;
export type limitingConeAngle = TODO;
export type markerEnd = TODO;
export type markerMid = TODO;
export type markerStart = TODO;
export type markerHeight = TODO;
export type markerUnits = TODO;
export type markerWidth = TODO;
export type mask = TODO;
export type maskContentUnits = TODO;
export type maskUnits = TODO;
export type max = TODO;
export type media = TODO;
export type method = TODO;
export type min = TODO;
export type mode = TODO;
export type numOctaves = TODO;
export type opacity = TODO;
export type operator = TODO;
export type order = TODO;
export type orient = TODO;
export type origin = TODO;
export type overflow = TODO;
export type overlinePosition = TODO;
export type overlineThickness = TODO;
export type paintOrder = TODO;
export type path = TODO;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
 */
export type PathLength = number;

export type patternContentUnits = TODO;
export type patternTransform = TODO;
export type patternUnits = TODO;
export type pointerEvents = TODO;
export type points = TODO;
export type pointsAtX = TODO;
export type pointsAtY = TODO;
export type pointsAtZ = TODO;
export type preserveAlpha = TODO;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
 */
export type PreserveAspectRatio = `${
  | "none"
  | "xMinYMin"
  | "xMidYMin"
  | "xMaxYMin"
  | "xMinYMid"
  | "xMidYMid"
  | "xMaxYMid"
  | "xMinYMax"
  | "xMidYMax"
  | "xMaxYMax"}${"" | " meet" | " slice"}`;

export type primitiveUnits = TODO;
export type r = TODO;
export type radius = TODO;
export type refX = TODO;
export type refY = TODO;
export type repeatCount = TODO;
export type repeatDur = TODO;
export type restart = TODO;
export type result = TODO;
export type rotate = TODO;
export type rx = TODO;
export type ry = TODO;
export type scale = TODO;
export type seed = TODO;
export type shapeRendering = TODO;
export type side = TODO;
export type spacing = TODO;
export type specularConstant = TODO;
export type specularExponent = TODO;
export type spreadMethod = TODO;
export type startOffset = TODO;
export type stdDeviation = TODO;
export type stitchTiles = TODO;
export type stopColor = TODO;
export type stopOpacity = TODO;
export type strikethroughPosition = TODO;
export type strikethroughThickness = TODO;
export type stroke = TODO;
export type strokeDasharray = TODO;
export type strokeDashoffset = TODO;
export type strokeLinecap = TODO;
export type strokeLinejoin = TODO;
export type strokeMiterlimit = TODO;
export type strokeOpacity = TODO;
export type strokeWidth = TODO;
export type surfaceScale = TODO;
export type systemLanguage = TODO;
export type tabindex = TODO;
export type tableValues = TODO;
export type target = TODO;
export type targetX = TODO;
export type targetY = TODO;
export type textAnchor = TODO;
export type textDecoration = TODO;
export type textRendering = TODO;
export type textLength = TODO;
export type to = TODO;
export type transform = TODO;
export type transformOrigin = TODO;
export type type = TODO;
export type underlinePosition = TODO;
export type underlineThickness = TODO;
export type unicodeBidi = TODO;
export type values = TODO;
export type vectorEffect = TODO;

/**
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
 */
export type ViewBox = `${number} ${number} ${number} ${number}`;

export type visibility = TODO;
export type wordSpacing = TODO;
export type writingMode = TODO;
export type x1 = TODO;
export type x2 = TODO;
export type xChannelSelector = TODO;
export type y1 = TODO;
export type y2 = TODO;
export type yChannelSelector = TODO;
export type z = TODO;

export type Height = TODO; // type differ by type
export type Width = TODO; // type differ by type
export type X = TODO; // type differ by type
export type Y = TODO; // type differ by type

type TODO = never;
