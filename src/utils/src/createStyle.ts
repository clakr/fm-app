import { writeFile } from "node:fs";
import { Options } from "../../types";

export default async function createStyle(options: Options) {
  let file = ``,
    content = ``;

  switch (options.css) {
    case "sass":
      file = "src/style.scss";

    case "uno":
      return;

    default:
      file = "src/style.css";
      break;
  }

  writeFile(file, content, (err) => {
    if (err) throw err;
  });
}
