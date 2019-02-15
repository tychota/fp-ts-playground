import { createInterface } from "readline";
import { Task } from "fp-ts/lib/Task";

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

export const read: Task<string> = new Task(
  () =>
    new Promise<string>(resolve => {
      rl.question("", answer => {
        rl.close();
        resolve(answer);
      });
    })
);
