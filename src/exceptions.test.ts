import { parse } from "./exceptions";
import { left, right } from "fp-ts/lib/Either";

describe("exceptions", () => {
  it("should return left if no exception", () => {
    // given
    const json = "{{";

    // when
    const result = parse(json);

    // except
    const error = new Error(
      "SyntaxError: Unexpected token { in JSON at position 1"
    );
    expect(result).toEqual(left(error));
  });

  it("should return right results if result", () => {
    // given
    const json = '{"a": 2}';

    // when
    const result = parse(json);

    // except
    const object = { a: 2 };
    expect(result).toEqual(right(object));
  });
});
