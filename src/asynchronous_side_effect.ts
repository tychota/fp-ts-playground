import { createInterface } from "readline"
import { Task } from "fp-ts/lib/Task"
import { Writable, Readable } from "stream"

const input = new Readable() // used to simulate a line read
const output = new Writable({
  // dummy to prevent terminal output
  write: () => undefined
})
const rl = createInterface({ input, output }) // simulates a line input

export const SIMULATED_INPUT = "Fake Line Read"

export const read: Task<string> = new Task(
  () =>
    new Promise<string>(resolve => {
      input.push(`${SIMULATED_INPUT}\n`)
      input.push(null)

      rl.question("", answer => {
        rl.close()
        resolve(answer)
      })
    })
)
