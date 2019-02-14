import { random } from "./random";

describe("random", () => {
  it("should output a different number", () => {
    // given
    const random1 = random.run();
    const random2 = random.run();

    // then
    expect(random1).toBeNumber();
    expect(random1).not.toEqual(random2);
  });
});
