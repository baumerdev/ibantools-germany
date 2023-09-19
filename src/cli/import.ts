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

// Import the current bank data text file and convert it to JSON files.
// This should be done after the Bundesbank releases new data multiple
// times a year. See:
// https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen/download-bankleitzahlen-602592
const blzFile = fs.readFileSync(
  `${__dirname}/../data/blz-aktuell-txt-data.txt`,
  "latin1"
);

const datasets = blzFile
  .replace(/\r\n/, "\n")
  .split("\n")
  .map((row) => {
    const blz = Number(row.slice(0, 8));
    const master = row[8] === "1";
    const checkDigitMethod = row.slice(150, 152);

    return {
      blz,
      checkDigitMethod,
      master,
    };
  });

// There are banks that 'own' the data ("bankleitzahlführender
// Zahlungsdienstleister") and there a branches that may have different data in
// some fields but not in BIC, checkDigit method and foremost not in the BLZ
// which is similar to a unique identifier. So we only keep the 'master' and
// ignore the rest.
const masterDatasets = datasets.filter((dataset) => dataset.master);

interface CheckDigitData {
  [key: string]: number[];
}

// Write all checkDigit methods with assigned BLZs
// If save over 20kb if use the checkDigit method as index and put the BLZs
// as values instead of the other way round.
const dataCheckDigit: CheckDigitData = {};
masterDatasets.forEach((dataset) => {
  if (typeof dataCheckDigit[dataset.checkDigitMethod] === "undefined") {
    dataCheckDigit[dataset.checkDigitMethod] = [];
  }
  dataCheckDigit[dataset.checkDigitMethod].push(dataset.blz);
});

// If file doesn't exist just write it and we're done
if (!fs.existsSync(`${__dirname}/../data/current.json`)) {
  fs.writeFileSync(
    `${__dirname}/../data/current.json`,
    JSON.stringify(dataCheckDigit)
  );

  process.exit(0);
}

if (
  typeof process.argv[2] !== "string" ||
  !process.argv[2].match(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:UTC|[+-]\d{4})/
  )
) {
  console.error("Please provide a valid-from datetime");
  process.exit(1);
}

// Get the current/previous data
const currentFile = fs.readFileSync(`${__dirname}/../data/current.json`);
const current = JSON.parse(currentFile.toString()) as CheckDigitData;

const currentMethods = Object.keys(current).sort();
const nextMethods = Object.keys(dataCheckDigit).sort();

// Exit if methods have changed because this may invoke code adjustments
if (JSON.stringify(currentMethods) !== JSON.stringify(nextMethods)) {
  console.warn("Check digits methods have changed!");
  console.warn(
    "Previously unused methods:",
    nextMethods.filter((method) => !currentMethods.includes(method))
  );
  console.warn(
    "No longer used methods:",
    currentMethods.filter((method) => !nextMethods.includes(method))
  );

  if (process.argv[3] !== "--ack") {
    console.warn("Please acknowledge this by adding --ack to the command");
    process.exit(2);
  }
}

// Check which BLZ have been added and which removed
const dataAddedCheckDigit: CheckDigitData = {};
const dataRemovedCheckDigit: CheckDigitData = {};
for (const method of currentMethods) {
  const currentMethodBLZs = current[method];
  const nextMethodBLZs = dataCheckDigit[method];

  for (const currentMethodBLZ of currentMethodBLZs) {
    if (!nextMethodBLZs || !nextMethodBLZs.includes(currentMethodBLZ)) {
      if (typeof dataRemovedCheckDigit[method] === "undefined") {
        dataRemovedCheckDigit[method] = [];
      }
      dataRemovedCheckDigit[method].push(currentMethodBLZ);
    }
  }

  if (!nextMethodBLZs) {
    continue;
  }

  for (const nextMethodBLZ of nextMethodBLZs) {
    if (!currentMethodBLZs.includes(nextMethodBLZ)) {
      if (typeof dataAddedCheckDigit[method] === "undefined") {
        dataAddedCheckDigit[method] = [];
      }
      dataAddedCheckDigit[method].push(nextMethodBLZ);
    }
  }
}

// Write the diff data to next.json
fs.writeFileSync(
  `${__dirname}/../data/next.json`,
  JSON.stringify({
    add: dataAddedCheckDigit,
    remove: dataRemovedCheckDigit,
    valid: process.argv[2],
  })
);
