import * as fs from "node:fs/promises";

async function main() {
  const path: string = `./${process.argv[2]}`;
  const getContents = async (path: string) => {
    const contents = await fs.readFile(path);
    return contents.toString();
  };

  const contents: string = await getContents(path);

  console.log(contents);
}

main();
