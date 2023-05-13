#!/usr/bin/env node

import { mkdir, rm } from "node:fs/promises";
import createEnv from "./utils/createEnv";
import createIndexHtml from "./utils/createIndexHtml";
import createViteEnv from "./utils/createViteEnv";
import createPreflight from "./utils/createPreflight";
import createAuthorModal from "./utils/createAuthorModal";
import createAuthorModalStyle from "./utils/createAuthorModalStyle";
import createMain from "./utils/createMain";
import createStyle from "./utils/createStyle";

async function main() {
  createEnv();
  createIndexHtml();

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
  createStyle();
}

main().then((err) => console.error(err));
