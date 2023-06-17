import { writeFile } from "node:fs";

export default async function () {
  const content = `import autoprefixer from "autoprefixer";

  export const config = {
    plugins: [autoprefixer],
  };`;

  writeFile(".env", content, (err) => {
    if (err) throw err;
  });
}
