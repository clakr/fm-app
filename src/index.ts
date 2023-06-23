#!/usr/bin/env node

import { mkdir, rm } from "node:fs/promises";

import { Command } from "commander";
import createAuthorModal from "./utils/createAuthorModal";
import createAuthorModalStyle from "./utils/createAuthorModalStyle";
import createEnv from "./utils/createEnv";
import createIndexHtml from "./utils/createIndexHtml";
import createMain from "./utils/createMain";
import createPostCSSConfig from "./utils/createPostCSSConfig";
import createPreflight from "./utils/createPreflight";
import createStyle from "./utils/createStyle";
import createUnoConfig from "./utils/createUnoConfig";
import createUnoPreset from "./utils/createUnoPreset";
import createViteEnv from "./utils/createViteEnv";
import writePackage from "./utils/writePackage";
import createViteConfig from "./utils/createViteConfig";

const program = new Command();

async function main() {
  program
    .option(
      "-t, --template <char>",
      "Specify the CSS Framework to be used",
      "vanilla"
    )
    .parse();

  const { template } = program.opts();

  writePackage(template);
  createEnv();
  createIndexHtml();

  if (template === "uno") {
    createUnoPreset();
    createUnoConfig();
    createViteConfig();
  }

  await rm("src", {
    recursive: true,
    force: true,
  });
  await mkdir("src", {
    recursive: true,
  });
  createViteEnv();

  if (template === "vanilla" || template === "sass") {
    createPostCSSConfig();
    createPreflight();
    createStyle(template);
  }

  createAuthorModal();
  createAuthorModalStyle();
  createMain(template);
}

main().then((err) => console.error(err));
