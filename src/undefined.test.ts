import { find } from "./undefined";
import { none, some } from "fp-ts/lib/Option";

describe("find", () => {
  it("should return none if no results", () => {
    // given
    const list = [1, 2, 5];

    // when
    const result = find(list, a => a === 4);

    // except
    expect(result).toEqual(none);
    expect(result.getOrElse(null)).toBe(null);
  });
  it("should return some if results", () => {
    // given
    const list = [1, 2, 5];

    // when
    const result = find(list, a => a === 2);

    // then
    expect(result).toEqual(some(2));
    expect(result.getOrElse(null)).toBe(2);
  });
});
