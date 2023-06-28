import { mkdir, rm } from "node:fs/promises";
import { Options } from "../types";
import createViteEnv from "./src/createViteEnv";
import createAuthorModal from "./src/createAuthorModal";
import createAuthorModalStyle from "./src/createAuthorModalStyle";
import createPreflight from "./src/createPreflight";
import createMain from "./src/createMain";
import createStyle from "./src/createStyle";
import createAppVue from "./src/createAppVue";
import createProjectConfig from "./src/createProjectConfig";

export default async function (options: Options) {
  await rm("src", {
    recursive: true,
    force: true,
  });
  await mkdir("src", {
    recursive: true,
  });

  createPreflight();
  createViteEnv();
  createMain(options);
  createStyle(options);
  createAuthorModalStyle();
  createAuthorModal(options);

  if (options.template === "vue") {
    await mkdir("src/components", { recursive: true });
    await mkdir("src/components", { recursive: true });

    createAppVue(options.css);
    createProjectConfig();
  }
}
