import { writeFile } from "node:fs";

export default async function createStyle() {
  const content = ``;

  writeFile("src/style.css", content, (err) => {
    if (err) throw err;
  });
}
