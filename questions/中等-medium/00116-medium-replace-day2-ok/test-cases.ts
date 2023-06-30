import type { Equal, Expect } from "@type-challenges/utils";
/*
 T extends `${infer A}${R}${infer B}`
 T中是否包含 R 字符串
 如果包含，A 和 B代表 R之前和之后的这段 ’12345678‘ 如果R为56  A=1234 B = 78
 
*/
type Replace<
  T extends string,
  R extends string,
  N extends string
> = R extends ""
  ? T
  : T extends `${infer A}${R}${infer B}`
  ? `${A}${N}${B}`
  : T;
type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
