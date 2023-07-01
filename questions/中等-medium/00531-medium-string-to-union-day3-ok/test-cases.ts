import type { Equal, Expect } from "@type-challenges/utils";
type strToArray<T extends string> = T extends `${infer S}${infer RES}`
  ? [S, ...strToArray<RES>]
  : [];
type StringToUnion<T extends string> = T extends ""
  ? never
  : strToArray<T>[number];
type cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >
];
