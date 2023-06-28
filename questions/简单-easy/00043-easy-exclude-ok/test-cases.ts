import type { Equal, Expect } from "@type-challenges/utils";
type MyExclude<T, U> = T extends U ? never : T;
type a = MyExclude<"a" | "b" | "c", "a">;
type cases = [
  Expect<Equal<Exclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
