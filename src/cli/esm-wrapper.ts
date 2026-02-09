/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import * as fs from "node:fs";

import * as main from "../main";

// Get all names exports from main
const mainExports = Object.keys(main).sort();

// Build a simple wrapper
const esmWrapper = [
  'import * as main from "../cjs/main.js";',
  "export default main;",
  ...mainExports.map(
    (mainExport) => `export const ${mainExport} = main.${mainExport};`,
  ),
].join("\n");

if (!fs.existsSync(`${__dirname}/../../dist/esm`)) {
  fs.mkdirSync(`${__dirname}/../../dist/esm`, { recursive: true });
}
fs.writeFileSync(`${__dirname}/../../dist/esm/main.mjs`, esmWrapper);

fs.copyFileSync(
  `${__dirname}/../../dist/cjs/main.d.ts`,
  `${__dirname}/../../dist/esm/main.d.mts`,
);
