import { readBytes } from "./bytes.js";
import { readLines } from "./lines.js";
import { readWords } from "./words.js";

const option = process.argv[2];
const path = `./${process.argv[3]}`;

let result;

if (option === "-c") result = { bytes: await readBytes(path) };

if (option === "-l") result = { lines: await readLines(path) };

if (option === "-w") result = { words: await readWords(path) };

console.log(result);
