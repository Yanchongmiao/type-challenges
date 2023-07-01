import type { Equal, Expect } from "@type-challenges/utils";
/*
  先把T变为字符串  `${T}` 
  `-${infer R}` 字符串T 是否是 -开始的，并且-后边的用变量R代替
  如果是-开始的则为负数 直接染回 否则 把T变为字符串返回
*/
type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;
type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>
];
