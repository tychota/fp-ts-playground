import { Either, tryCatch2v } from "fp-ts/lib/Either";

export function parse(s: string): Either<Error, unknown> {
  return tryCatch2v(() => JSON.parse(s), reason => new Error(String(reason)));
}
