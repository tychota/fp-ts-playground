import { getItem } from "./synchronous_side_effect";
import { some, none } from "fp-ts/lib/Option";

describe("side effect", () => {
  it("should output none if the effect resolves to nothing", () => {
    // given
    const item = getItem("myNonexistantKey");

    // when
    const result = item.run();

    // then
    expect(result).toEqual(none);
  });
  it("should output some if the effect resolves to something", () => {
    // given
    localStorage.setItem("myFirstKey", "myFirstValue");
    const item = getItem("myFirstKey");

    // when
    const result = item.run();

    // then
    expect(result).toEqual(some("myFirstValue"));
  });
});
