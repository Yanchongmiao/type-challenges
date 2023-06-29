// type Chainable = {
//   option(key: string, value: any): any;
//   get(): any;
// };

/**
 这段 TypeScript 代码定义了一个类型 Chainable，它是一个具有链式调用方法的类型。下面对代码进行解释：

type Chainable<R = object> = { ... }：这行代码定义了一个泛型类型 Chainable，它接受一个类型参数 R，默认为 object 类型。R 表示最终返回的对象的类型。

option<K extends keyof any, V>(key: K extends keyof R ? (V extends R[K] ? never : K) : K, value: V): Chainable<Omit<R, K> & Record<K, V>>：这是 Chainable 类型的方法之一，名为 option。它接受两个参数 key 和 value，分别表示选项的键和值。

K extends keyof any：这是 key 的泛型参数，它表示 key 可以是任何类型的键。
(V extends R[K] ? never : K)：这部分是一个条件类型，用于判断 V 是否与 R[K] 相同。如果相同，则返回 never 类型，否则返回 K 类型。这确保了每个键只能设置一次值。
: Chainable<Omit<R, K> & Record<K, V>>：这是 option 方法的返回类型，它表示在设置了新选项之后返回一个新的 Chainable 对象。该对象的类型是 Omit<R, K> & Record<K, V>，表示移除原始对象中的 K 键，并添加一个新的键值对 { K: V }。
get(): R：这是 Chainable 类型的另一个方法，名为 get。它没有参数，返回类型为 R，表示获取最终生成的对象。

综上所述，这段代码定义了一个具有链式调用方法的类型 Chainable，可以用于创建一个包含多个选项的对象，并支持在链式调用中设置选项值，并最终获取生成的对象。每次调用 option 方法都会返回一个新的 Chainable 对象，以便继续链式调用。最终，调用 get 方法将返回生成的对象。
 * **/
type Chainable<T = object> = {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};
