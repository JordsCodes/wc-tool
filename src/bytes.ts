import fs from "node:fs";

export const readBytes = (path) => {
  return fs.statSync(path).size;
};
