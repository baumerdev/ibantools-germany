/**
 * ibantools-germany
 * Copyright (C) 2022 Markus Baumer <markus@baumer.dev>
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
    const master = row.slice(8, 9) === "1" ? true : false;
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

// Write all checkDigit methods with assigned BLZs
// If save over 20kb if use the checkDigit method as index and put the BLZs
// as values instead of the other way round.
const dataCheckDigit: { [key: string]: number[] } = {};
masterDatasets.forEach((dataset) => {
  if (typeof dataCheckDigit[dataset.checkDigitMethod] === "undefined") {
    dataCheckDigit[dataset.checkDigitMethod] = [];
  }
  dataCheckDigit[dataset.checkDigitMethod].push(dataset.blz);
});
fs.writeFileSync(
  `${__dirname}/../data/current.json`,
  JSON.stringify(dataCheckDigit)
);
