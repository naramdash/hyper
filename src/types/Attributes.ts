import type { ReadonlyKeys } from "./utils/ReadonlyKeys";
import type { FunctionKeys } from "./utils/FunctionKeys";
import { StylingAttributes } from "./attrs/StylingAttributes";

type Attributes<T extends Element> = Partial<
  Omit<T, ReadonlyKeys<T> | FunctionKeys<T> | "className"> & StylingAttributes
>;

export type { Attributes };
