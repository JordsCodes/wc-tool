import fs from "node:fs";
import readline from "node:readline/promises";

export const readWords = async (path) => {
  const readableStream = fs.createReadStream(path);
  const rl = readline.createInterface(readableStream);

  let wordCount = 0;

  return new Promise<number>((resolve, reject) => {
    rl.on("line", (line) => {
      const words = line
        .trim()
        .split(/\s+/)
        .filter((w) => w.length);

      wordCount += words.length;
    });
    rl.on("close", () => {
      resolve(wordCount);
    });

    rl.on("error", (error) => {
      reject(error);
    });
  });
};
