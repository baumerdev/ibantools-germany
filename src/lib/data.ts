/**
 * ibantools-germany
 * Copyright (C) 2022-2024 Markus Baumer <markus@baumer.dev>
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

import currentCheckDigits from "../data/current.json";
import nextCheckDigits from "../data/next.json";

export interface CheckDigits {
  [method: string]: number[];
}

export interface NextCheckDigits {
  add: CheckDigits;
  remove: CheckDigits;
  valid: string;
}

/**
 * Returns date object
 *
 * @param date Date from string or current date if undefined
 * @returns
 */
export const dateObject = (date?: string | Date): Date => {
  if (date === undefined) {
    return new Date();
  }
  if (typeof date === "string") {
    return new Date(date);
  }

  return date;
};

/**
 * Combines current data by adding or removing from data provided in next
 * @param current
 * @param nextAdd
 * @param nextRemove
 */
export const combineCurrentNext = (
  current: CheckDigits,
  nextAdd: CheckDigits,
  nextRemove: CheckDigits
): CheckDigits => {
  const combinedData: CheckDigits = {};

  const currentMethods = Object.keys(current);
  for (const currentMethod of currentMethods) {
    if (!nextAdd[currentMethod] && !nextRemove[currentMethod]) {
      combinedData[currentMethod] = current[currentMethod];
      continue;
    }

    let methodBLZs = current[currentMethod];
    if (nextRemove[currentMethod]) {
      methodBLZs = methodBLZs.filter(
        (methodBLZ) => !nextRemove[currentMethod].includes(methodBLZ)
      );
    }
    if (nextAdd[currentMethod]) {
      methodBLZs = [...methodBLZs, ...nextAdd[currentMethod]];
    }

    if (methodBLZs.length > 0) {
      combinedData[currentMethod] = methodBLZs;
    }
  }

  return combinedData;
};

/**
 * Get data, either current or combined with next by comparing it to valid-to
 * date from next data
 * @param date
 * @returns
 */
export const checkDigitData = (date?: string | Date): CheckDigits => {
  const nextValidFrom = new Date((nextCheckDigits as NextCheckDigits).valid);
  const currentDate = dateObject(date);

  if (currentDate >= nextValidFrom) {
    return combineCurrentNext(
      currentCheckDigits,
      nextCheckDigits.add,
      nextCheckDigits.remove
    );
  }

  return currentCheckDigits;
};

/**
 * Get the check digit method assigned for a BLZ
 *
 * @param blz German BLZ with 8 digits
 * @param date Method valid at this date (default: current date)
 * @returns Check digit method or null if invalid
 */
export const methodForBLZ = (
  blz: string,
  date?: string | Date
): string | null => {
  if (!blz.match(/^[1-9]\d{7}$/)) {
    return null;
  }

  const numbericBlz = Number(blz);

  const data = checkDigitData(date);

  return (
    Object.keys(data).find((method) => {
      return data[method].includes(numbericBlz);
    }) ?? null
  );
};
