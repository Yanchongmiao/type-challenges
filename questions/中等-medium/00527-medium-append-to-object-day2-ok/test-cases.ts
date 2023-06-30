import type { Equal, Expect } from "@type-challenges/utils";
type AppendToObject<
  T extends Object,
  K extends string | number | symbol,
  V extends any
> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  moon: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, "moon", false | undefined>, testExpect3>>
];
