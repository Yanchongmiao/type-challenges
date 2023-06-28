import type { Equal, Expect } from "@type-challenges/utils";
import { type } from "os";

const tuple = [1] as const;
type Concat<T extends readonly unknown[], N extends readonly unknown[]> = [
  ...T,
  ...N
];
let aa: Concat<[], []> = [11, 22];
type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];

// @ts-expect-error
type error = Concat<null, undefined>;
