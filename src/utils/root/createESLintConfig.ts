import { writeFile } from "node:fs";

export default async function createEnv() {
  const content = `{
  "extends": [
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "prettier"
  ]
}`;

  writeFile(".eslintrc", content, (err) => {
    if (err) throw err;
  });
}
