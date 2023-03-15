import type { ReadonlyKeys } from "./utils/ReadonlyKeys";
import type { FunctionKeys } from "./utils/FunctionKeys";
import type { StylingAttributes } from "./attrs/StylingAttributes";
import type { DataAttributes } from "./attrs/DataAttributes";

type Attributes<T extends Element> = Partial<
  Omit<T, ReadonlyKeys<T> | FunctionKeys<T> | "className"> &
    StylingAttributes &
    DataAttributes
>;

export type { Attributes };
