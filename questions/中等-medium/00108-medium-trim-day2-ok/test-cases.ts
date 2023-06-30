import type { Equal, Expect } from "@type-challenges/utils";
type Space = "\n" | "\t" | " ";
type Trim<T extends string> = T extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : T;
type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
