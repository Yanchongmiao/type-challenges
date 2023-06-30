import type { Equal, Expect } from "@type-challenges/utils";
/*
  第一次 
  [  T:A, Permutation<b,c>
     内部根据b,C还有循环 因为存在T extends U
    [
      T:b , Permutation<c>
      T:C , Permutation<b>
    ]
  ]
  第一次 
 [  T:B, Permutation<a,c>
    内部根据A,C还有循环 因为存在T extends U
    [
      T:a , Permutation<c>
      T:C , Permutation<a>
    ]
  ]
  第三次 
   [  T:C, Permutation<a,b>
     内部根据A,b还有循环 因为存在T extends U
    [
      T:a , Permutation<b>
      T:b , Permutation<a>
    ]
  ]
  需要注意迭代情况
*/
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];
type test = Permutation<"A" | "B" | "C">;
type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>
];
// type Permutation<T, U = T> = [T] extends [never]
//   ? []
//   : T extends U
//   ? [T, ...Permutation<Exclude<U, T>>]
//   : [];
