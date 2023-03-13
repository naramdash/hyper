type FunctionLike =
  | Function
  | (Function | null)
  | (Function | undefined)
  | (Function | null | undefined);

type FunctionKeys<T> = {
  [P in keyof T]: T[P] extends FunctionLike ? P : never;
}[keyof T];

export type { FunctionKeys };
