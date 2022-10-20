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

import { paddedAccountNumber } from "./helper";
import { ProbablyString } from "./types";

/**
 * Generate and return BBAN from account number and BLZ
 *
 * There is no check digit validation. If you want to get a valid BBAN you have
 * to to pass the result to isValidBBAN() or validate the account number and
 * BLZ to isValidAccountNumberBLZ() beforehand.
 *
 * @param accountNumber Account number with up to 10 digits
 * @param blz German BLZ with 8 digits
 * @returns BBAN or null if invalid
 */
export const generateBBAN = (
  accountNumber: ProbablyString,
  blz: ProbablyString
): string | null => {
  if (
    !accountNumber ||
    !accountNumber.match(/^\d{1,10}$/) ||
    !blz ||
    !blz.match(/^[1-9]\d{7}$/)
  ) {
    return null;
  }

  return `${blz}${paddedAccountNumber(accountNumber)}`;
};
