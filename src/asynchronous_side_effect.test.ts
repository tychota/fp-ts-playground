import { read, SIMULATED_INPUT } from "./asynchronous_side_effect"

describe("./asynchronous_side_effect", () => {
  it("should return a value", () => {
    const foo = read.run()
    return foo.then(x => {
      expect(x).toEqual(SIMULATED_INPUT)
    })
  })
})
