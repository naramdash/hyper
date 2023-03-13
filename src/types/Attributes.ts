import type { ReadonlyKeys } from "./utils/ReadonlyKeys";
import type { FunctionKeys } from "./utils/FunctionKeys";

type Attributes<T extends Element> = Partial<
  Omit<T, ReadonlyKeys<T> | FunctionKeys<T>>
>;

export type { Attributes };
