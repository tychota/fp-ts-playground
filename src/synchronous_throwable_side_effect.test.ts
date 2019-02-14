import { readFileSync } from "./synchronous_throwable_side_effect";
import { left, right } from "fp-ts/lib/Either";

describe("throwable side effect", () => {
  it("should output left if the effect throws", () => {
    // given
    const item = readFileSync("./data/myNonexistantKey");

    // when
    const result = item.run();

    // then
    const error = new Error(
      "Error: ENOENT: no such file or directory, open './data/myNonexistantKey'"
    );
    expect(result).toEqual(left(error));
  });
  it("should output some if the effect resolves to something", () => {
    // given
    const item = readFileSync("./data/A");

    // when
    const result = item.run();

    // then
    const content = "A-content\n";
    expect(result).toEqual(right(content));
  });
});
