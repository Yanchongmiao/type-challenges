import type { Equal, Expect } from "@type-challenges/utils";
type AppendArgument<FN extends Function, N> = FN extends (
  ...args: infer ARGS
) => infer R
  ? (...args: [...ARGS, N]) => R
  : never;
type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>
];
