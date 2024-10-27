import { readBytes } from "./bytes.js";

const option = process.argv[2];
const path = `./${process.argv[3]}`;

let result;

if (option === "-c") result = { bytes: await readBytes(path) };

console.log(result);
