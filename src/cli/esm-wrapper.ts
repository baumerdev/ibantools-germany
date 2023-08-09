/**
 * ibantools-germany
 * Copyright (C) 2022-2023 Markus Baumer <markus@baumer.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as fs from "fs";

import * as main from "../main";

// Get all names exports from main
const mainExports = Object.keys(main).sort();

// Build a simple wrapper
const esmWrapper = [
  'import * as main from "../cjs/main.js";',
  "export default main;",
  ...mainExports.map(
    (mainExport) => `export const ${mainExport} = main.${mainExport};`
  ),
].join("\n");

if (!fs.existsSync(`${__dirname}/../../dist/esm-wrapped`)) {
  fs.mkdirSync(`${__dirname}/../../dist/esm-wrapped`, { recursive: true });
}
fs.writeFileSync(`${__dirname}/../../dist/esm-wrapped/main.js`, esmWrapper);
