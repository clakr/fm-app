import { readFile, writeFile } from "node:fs";
import { Template } from "../types";

export default async function (template: Template) {
  readFile("package.json", "utf-8", (error, data) => {
    const contents = JSON.parse(data) as {
      devDependencies: Record<string, string | undefined>;
    };
    contents.devDependencies = {
      ...contents.devDependencies,
      postcss: "^8.4.24",
      autoprefixer: "^10.4.14",
      sass: template === "sass" ? "^1.63.4" : undefined,
    };

    const stringify = JSON.stringify(contents);

    writeFile("package.json", stringify, (err) => {
      if (err) {
        throw err;
      }
    });
  });
}
