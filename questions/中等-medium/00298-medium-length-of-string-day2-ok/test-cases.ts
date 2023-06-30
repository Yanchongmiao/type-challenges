import type { Equal, Expect } from "@type-challenges/utils";
type strToArray<T extends string> = T extends `${infer S}${infer P}`
  ? [S, ...strToArray<P>]
  : [];
type LengthOfString<T extends string> = T extends ""
  ? 0
  : strToArray<T>["length"];
type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
