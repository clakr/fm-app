import { writeFile } from "node:fs";
import { Template } from "../types";

export default async function createStyle(template: Template) {
  const filename = `src/style.${template === "sass" ? "scss" : "css"}`;

  const content = ``;

  writeFile(filename, content, (err) => {
    if (err) throw err;
  });
}
