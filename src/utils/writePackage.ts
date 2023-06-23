import { readFile, writeFile } from "node:fs";
import { Template } from "../types";

export default async function (template: Template) {
  let deps = {};

  switch (template) {
    case "sass":
      deps = { postcss: "^8.4.24", autoprefixer: "^10.4.14", sass: "^1.63.4" };
      break;

    case "uno":
      deps = {
        "@unocss/preset-web-fonts": "^0.53.3",
        "@unocss/preset-wind": "^0.53.3",
        "@unocss/reset": "^0.53.3",
        unocss: "^0.53.3",
      };

    default:
      deps = { postcss: "^8.4.24", autoprefixer: "^10.4.14" };
      break;
  }

  readFile("package.json", "utf-8", (error, data) => {
    const contents = JSON.parse(data) as {
      devDependencies: Record<string, string | undefined>;
    };
    contents.devDependencies = {
      ...contents.devDependencies,
      ...deps,
    };

    const stringify = JSON.stringify(contents);

    writeFile("package.json", stringify, (err) => {
      if (err) {
        throw err;
      }
    });
  });
}
