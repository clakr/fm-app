import { writeFile } from "node:fs";

export default async function () {
  const content = `import { defineConfig } from "vite";
  import UnoCSS from "unocss/vite";
  
export default defineConfig({
  plugins: [UnoCSS()],
});`;

  writeFile("vite.config.ts", content, (err) => {
    if (err) throw err;
  });
}
