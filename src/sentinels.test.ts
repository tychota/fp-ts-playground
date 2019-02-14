import { findIndex } from "./sentinels";
import { none, some } from "fp-ts/lib/Option";

describe("sentinels", () => {
  it("should return none if no results", () => {
    // given
    const list = [1, 2, 5];

    // when
    const result = findIndex(list, a => a === 4);

    // except
    expect(result).toEqual(none);
    expect(result.getOrElse(-1)).toBe(-1);
  });

  it("should return some results if result", () => {
    // given
    const list = [1, 2, 5];

    // when
    const result = findIndex(list, a => a === 2);

    // except
    expect(result).toEqual(some(1));
    expect(result.getOrElse(-1)).toBe(1);
  });
});
