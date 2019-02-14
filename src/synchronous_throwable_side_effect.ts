import * as fs from "fs";
import { IOEither, tryCatch2v } from "fp-ts/lib/IOEither";

export function readFileSync(path: string): IOEither<Error, string> {
  return tryCatch2v(
    () => fs.readFileSync(path, "utf8"),
    reason => new Error(String(reason))
  );
}
