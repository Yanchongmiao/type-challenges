import type { Equal, Expect } from "@type-challenges/utils";
type Flatten<T extends any[], R extends any[] = []> = T extends [
  infer X,
  ...infer Y
]
  ? X extends any[] // 判断数组第一项 X 是否是数组
    ? Flatten<[...X, ...Y], [...R]>
    : Flatten<[...Y], [...R, X]>
  : R; //最终返回值

type aa = Flatten<[1, 2, [3, 4], [[[5]]]]>;
type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >
];

// @ts-expect-error
type error = Flatten<"1">;
