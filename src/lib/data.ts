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

import currentBank from "../data/current.bank.json";
import currentCheckDigit from "../data/current.checkDigit.json";
import { extractAccountNumberBLZFromBBAN } from "./extract";
import { BankNameBIC, IBANDetails, ProbablyString } from "./types";
import { isValidAccountNumberBLZ } from "./validate";

export interface CheckDigits {
  [method: string]: number[];
}

export interface Banks {
  [method: string]: string[];
}

/**
 * Get the check digit method assigned for a BLZ
 *
 * @param blz German BLZ with 8 digits
 * @returns Check digit method or null if invalid
 */
export const methodForBLZ = (blz: string): string | null => {
  if (!blz.match(/^[1-9]\d{7}$/)) {
    return null;
  }

  const numbericBlz = Number(blz);

  return (
    Object.keys(currentCheckDigit as CheckDigits).find((method) => {
      return (currentCheckDigit as CheckDigits)[method].includes(numbericBlz);
    }) ?? null
  );
};

/**
 * Get name (and BIC if available) for bank with given BLZ
 *
 * @param blz German BLZ with 8 digits
 * @returns Bank data or null if invalid
 */
export const bankDataByBLZ = (blz: string): BankNameBIC | null => {
  if (!blz.match(/^[1-9]\d{7}$/)) {
    return null;
  }

  const bankData = (currentBank as Banks)[blz];
  if (!bankData) {
    return null;
  }

  return {
    bankName: bankData[0],
    bic: bankData[1],
  };
};

/**
 * Search all bank data and check if any contains the BIC
 *
 * @param bic BIC to search for
 * @returns Whether BIC exists in bank data
 */
export const isBICInData = (bic: string): boolean => {
  if (!bic.match(/^[a-zA-Z]{4}DE[a-zA-Z0-9]{2}([A-Z0-9]{3})?$/i)) {
    return false;
  }

  const searchBIC = `${bic.toUpperCase()}${bic.length === 8 ? "XXX" : ""}`;

  return (
    typeof Object.values(currentBank as Banks).find(
      (bank) => bank[1] && bank[1] === searchBIC
    ) !== "undefined"
  );
};

/**
 * Get account number, BLZ and bank data for BBAN
 *
 * Returns null if wrong format or optional validation fails.
 *
 * If "validate" is true the account number and BLZ is validated by
 * its corresponding check digit method.
 *
 * IMPORTANT: A non-null result does not does not necessarily mean that
 * the account exists; it only checks for structure and check digit!
 *
 * @param bban German BBAN with 18 digits
 * @param validate Optional check digit validation (default: true)
 * @returns Data for IBAN or null if invalid
 */
export const ibanDetails = (
  bban: ProbablyString,
  validate = true
): IBANDetails | null => {
  const extracted = extractAccountNumberBLZFromBBAN(bban);
  if (!extracted) {
    return null;
  }

  if (
    validate &&
    !isValidAccountNumberBLZ(extracted.accountNumber, extracted.blz)
  ) {
    return null;
  }

  const bankData = bankDataByBLZ(extracted.blz);
  if (!bankData) {
    return null;
  }

  return {
    ...extracted,
    ...bankData,
  };
};
