import { writeFile } from "node:fs";
import { Options } from "../../types";

export default async function createEnv(options: Options) {
  let imports = `import { defineConfig } from "vite";`,
    plugins = ``,
    resolve = `{}`;

  switch (options.template) {
    case "vue":
      imports += `\nimport vue from "@vitejs/plugin-vue";\nimport path from "path"`;
      plugins = `[vue()]`;
      resolve = `{
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}`;
      break;
  }

  switch (options.css) {
    case "uno":
      imports += `\nimport unoCSS from "unocss/vite`;
      plugins = `[unoCSS()]`;
      break;
  }

  const content = `${imports}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: ${plugins},
  resolve: ${resolve},
});`;

  writeFile("vite.config.ts", content, (err) => {
    if (err) throw err;
  });
}
