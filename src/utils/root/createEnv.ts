import { writeFile } from "node:fs";

export default async function createEnv() {
  const content = `VITE_PROJECT_NAME=
VITE_PROJECT_LINK=
VITE_PROJECT_REPOSITORY=`;

  writeFile(".env", content, (err) => {
    if (err) throw err;
  });
}
