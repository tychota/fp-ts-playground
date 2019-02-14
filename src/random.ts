import { IO } from "fp-ts/lib/IO";

export const random: IO<number> = new IO(() => Math.random());
