#!/usr/bin/env node

import { Command } from "commander";
import { Options } from "./types";
import createRootFiles from "./utils/createRootFiles";
import createSrcFiles from "./utils/createSrcFiles";

const program = new Command();

async function main() {
  program
    .option("-t, --template <char>", "Specify the template to be used", "html")
    .option(
      "-c, --css <char>",
      "Specify the CSS framework to be used",
      "vanilla"
    )
    .parse();

  const options = program.opts() as Options;

  createRootFiles(options);
  createSrcFiles(options);
}

main().then((err) => console.error(err));
