import type { ReadonlyKeys } from "./utils/ReadonlyKeys";
import type { FunctionKeys } from "./utils/FunctionKeys";

type ClassAndStyle = {
  /**
   * Element's class content attribute. String Literal.
   */
  class?: string;
  /**
   * Element's style content attribute. String Literal.
   */
  style?: string;
};

type Attributes<T extends Element> = Partial<
  Omit<T, ReadonlyKeys<T> | FunctionKeys<T> | "className"> & ClassAndStyle
>;

export type { Attributes };
