import { readFile, writeFile } from "node:fs";
import { Options } from "../../types";

export default async function (options: Options) {
  let deps = {},
    devDeps: Record<string, string> = {
      autoprefixer: "^10.4.14",
      postcss: "^8.4.24",
      typescript: "^5.0.2",
      vite: "^4.3.9",
    };

  switch (options.template) {
    case "vue":
      deps = { ...deps, vue: "^3.2.47" };
      devDeps = {
        ...devDeps,
        "@vitejs/plugin-vue": "^4.1.0",
        "@vue/eslint-config-typescript": "^11.0.3",
        eslint: "^8.43.0",
        "eslint-config-prettier": "^8.8.0",
        "eslint-plugin-vue": "^9.15.1",
        "vue-tsc": "^1.4.2",
      };
      break;
  }

  switch (options.css) {
    case "sass":
      deps = { ...deps };
      devDeps = {
        ...devDeps,
        sass: "^1.63.6",
      };
      break;

    case "uno":
      deps = { ...deps };
      devDeps = {
        ...devDeps,
        "@unocss/preset-web-fonts": "^0.53.3",
        "@unocss/preset-wind": "^0.53.3",
        "@unocss/reset": "^0.53.3",
        "@unocss/transformer-variant-group": "^0.53.3",
        unocss: "^0.53.3",
      };
      break;
  }

  if (options.template === "vue" && options.css === "sass") {
    devDeps = { ...devDeps, "sass-loader": "^13.3.2" };
  }

  readFile("package.json", "utf-8", (error, data) => {
    const contents = JSON.parse(data) as {
      dependencies: Record<string, string>;
      devDependencies: Record<string, string>;
    };
    contents.dependencies = {
      ...contents.dependencies,
      ...deps,
    };
    contents.devDependencies = {
      ...contents.devDependencies,
      ...devDeps,
    };

    const stringify = JSON.stringify(contents);

    writeFile("package.json", stringify, (err) => {
      if (err) {
        throw err;
      }
    });
  });
}
