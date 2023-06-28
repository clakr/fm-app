import { writeFile } from "node:fs";

export default async function () {
  const content = `import autoprefixer from "autoprefixer";

export const config = {
  plugins: [autoprefixer()],
};`;

  writeFile("postcss.config.js", content, (err) => {
    if (err) throw err;
  });
}
