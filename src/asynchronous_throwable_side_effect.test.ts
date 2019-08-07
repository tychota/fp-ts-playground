import { get, ERRORTEXT } from "././asynchronous_throwable_side_effect"
import { left, right } from "fp-ts/lib/Either"

describe("throwable side effect", () => {
  it("should output left if the effect throws", () => {
    // given
    const item = get("https://example.com")

    // when
    const result = item.run()

    // then
    const error = new Error(`Error: ${ERRORTEXT}`)
    return result.then(resp => expect(resp).toEqual(left(error)))
  })
  it("should output some if the effect resolves to something", () => {
    // given
    const item = get("https://httpstat.us/200")
    // when
    const result = item.run()

    // then
    const content = "200 OK"
    return result.then(resp => expect(resp).toEqual(right(content)))
  })
})
