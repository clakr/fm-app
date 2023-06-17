import { readFile, writeFile } from "node:fs";

export default async function () {
  readFile("package.json", "utf-8", (error, data) => {
    const contents = JSON.parse(data) as {
      devDependencies: Record<string, string>;
    };
    contents.devDependencies = {
      ...contents.devDependencies,
      postcss: "^8.4.24",
      autoprefixer: "^10.4.14",
    };

    const stringify = JSON.stringify(contents);

    writeFile("package.json", stringify, (err) => {
      console.error(err);
    });
  });
}
