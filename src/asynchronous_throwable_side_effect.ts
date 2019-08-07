import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither"

export const ERRORTEXT =
  "FetchError: request to https://example.com/ failed, reason: unable to get local issuer certificate"

export function get(url: string): TaskEither<Error, string> {
  return tryCatch(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (url === "https://example.com") reject(new Error(ERRORTEXT))
          else resolve("200 OK")
        }, 1)
      ),
    reason => new Error(String(reason))
  )
}
