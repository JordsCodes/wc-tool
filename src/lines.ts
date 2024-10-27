import fs from "node:fs";
import readline from "node:readline/promises";

export const readLines = async (path) => {
  const readableStream = fs.createReadStream(path);
  const rl = readline.createInterface(readableStream);

  let lineCount = 0;

  return new Promise<number>((resolve, reject) => {
    rl.on("line", () => {
      lineCount += 1;
    });

    rl.on("close", () => {
      resolve(lineCount);
    });

    rl.on("error", (error) => {
      reject(error);
    });
  });
};
