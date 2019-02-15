# Test FP-TS

A playground to test [gcanti's super article](https://dev.to/gcanti/interoperability-with-non-functional-code-using-fp-ts-432e).

## Use case

### Sentinels

#### Use case: an API that may fail and returns a special value of the codomain

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/sentinels.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/sentinels.test.ts)

### `undefined` and `null`

#### Use case: an API that may fail and returns undefined (or null)

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/undefined.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/undefined.test.ts)

### Exceptions

#### Use case: an API that may throw

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/exceptions.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/exceptions.test.ts)

### Random values

#### Use case: an API that returns a non deterministic value

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/random.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/random.test.ts)

### Synchronous side effects

#### Use case: an API that reads and/or writes to a global state

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/synchronous_side_effect.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/synchronous_side_effect.test.ts)

#### Use case: an API that reads and/or writes to a global state and may throw

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/synchronous_throwable_side_effect.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/synchronous_throwable_side_effect.test.ts)

### Asynchronous side effects

#### Use case: an API that performs an asynchronous computation

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/asynchronous_side_effect.ts)
- ⚠️ I don't know how to test this, help me please :)

#### Use case: an API that performs an asynchronous computation and may reject

- [Code](https://github.com/tychota/fp-ts-playground/blob/master/src/asynchronous_throwable_side_effect.ts)
- [Test](https://github.com/tychota/fp-ts-playground/blob/master/src/asynchronous_throwable_side_effect.test.ts)
