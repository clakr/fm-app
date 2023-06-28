import { Options } from "../types";
import createESLintConfig from "./root/createESLintConfig";
import createEnv from "./root/createEnv";
import createIndexHtml from "./root/createIndexHtml";
import createPostCSSConfig from "./root/createPostCSSConfig";
import createTSConfig from "./root/createTSConfig";
import createUnoConfig from "./root/createUnoConfig";
import createUnoPreset from "./root/createUnoPreset";
import createViteConfig from "./root/createViteConfig";
import writePackage from "./root/writePackage";

export default async function (options: Options) {
  writePackage(options);
  createEnv();
  createIndexHtml(options);
  createPostCSSConfig();

  if (options.template === "vue") {
    createESLintConfig();
    createTSConfig();
  }

  if (options.css === "uno") {
    createUnoPreset();
    createUnoConfig();
  }

  if (options.template === "vue" || options.css === "uno") {
    createViteConfig(options);
  }
}
