import { writeFile } from "node:fs";

export default async function createViteEnv() {
  const content = `/// <reference types="vite/client" />

  interface ImportMetaEnv {
    readonly VITE_PROJECT_NAME: string;
    readonly VITE_PROJECT_LINK: string;
    readonly VITE_PROJECT_REPOSITORY: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  `;

  writeFile("src/_vite-env.d.ts", content, (err) => {
    if (err) throw err;
  });
}
