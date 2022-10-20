/*!
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

import { isBICInData, methodForBLZ } from "./data";
import { extractAccountNumberBLZFromBBAN } from "./extract";
import { methodDispatch } from "./method-dispatch";
import { ProbablyString, Result } from "./types";

/**
 * Validate bank account number and BLZ
 *
 * IMPORTANT: A positive result does not does not necessarily mean that
 * the account exists; it only checks for structure and check digit!
 *
 * @param accountNumber Account number with up to 10 digits
 * @param blz German BLZ with 8 digits
 * @returns
 */
export const isValidAccountNumberBLZ = (
  accountNumber: ProbablyString,
  blz: ProbablyString
): boolean => {
  if (
    !accountNumber ||
    !accountNumber.match(/^\d{1,10}$/) ||
    !blz ||
    !blz.match(/^[1-9]\d{7}$/)
  ) {
    return false;
  }

  const method = methodForBLZ(blz);
  if (!method) {
    return false;
  }

  return [Result.VALID, Result.NO_CHECK_DIGIT_CALCULATION].includes(
    methodDispatch(accountNumber, blz, method)
  );
};

/**
 * Validate German BBAN
 *
 * IMPORTANT: A positive result does not does not necessarily mean that
 * the account exists; it only checks for structure and check digit!
 *
 * @param bban German BBAN with 18 digits
 * @returns
 */
export const isValidBBAN = (bban: ProbablyString): boolean => {
  const extracted = extractAccountNumberBLZFromBBAN(bban);
  if (!extracted) {
    return false;
  }

  return isValidAccountNumberBLZ(extracted.accountNumber, extracted.blz);
};

/**
 * Validate German BIC
 *
 * @param bic BIC
 * @returns
 */
export const isValidBIC = (bic: ProbablyString): boolean => {
  if (!bic) {
    return false;
  }

  return isBICInData(bic);
};
