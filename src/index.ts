#!/usr/bin/env node

import { mkdir, rm } from "node:fs/promises";
import { readFile } from "node:fs";

import writePackage from "./utils/writePackage";
import createEnv from "./utils/createEnv";
import createIndexHtml from "./utils/createIndexHtml";
import createPostCSSConfig from "./utils/createPostCSSConfig";
import createViteEnv from "./utils/createViteEnv";
import createPreflight from "./utils/createPreflight";
import createAuthorModal from "./utils/createAuthorModal";
import createAuthorModalStyle from "./utils/createAuthorModalStyle";
import createMain from "./utils/createMain";
import createStyle from "./utils/createStyle";
import { Command } from "commander";

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
  createPostCSSConfig();
  await rm("src", {
    recursive: true,
    force: true,
  });
  await mkdir("src", {
    recursive: true,
  });
  createViteEnv();
  createPreflight();
  createAuthorModal();
  createAuthorModalStyle();
  createMain();
  createStyle(template);
}

main().then((err) => console.error(err));
