import type { Equal, Expect } from "@type-challenges/utils";
/*
Foo & Bar 列举出所有的数据
Foo | Bar 交集  列举同时共有的
omit<a,b> 从现在的类型中排出掉共有的 结果就剩下自有的
*/
type Diff<T, R> = Omit<T & R, keyof (T | R)>;
type a = keyof (Foo | Bar);
type b = keyof (Foo & Bar);
type c = Diff<Foo, Bar>;

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
