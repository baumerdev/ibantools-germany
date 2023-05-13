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

/**
 * This is a type that should be a string (for e.g. validating or generating)
 * IBANs, BBANs, bank account numbers etc. But since this library is most
 * likely used with user input, we accept null and undefined as well to prevent
 * type errors.
 *
 * Nonetheless the functions using params of this type still will return empty
 * results or invalid results but won't throw type errors.
 */
export type ProbablyString = string | null | undefined;

/**
 * These are different response values for validate functions.
 *
 * If you use the isSomethingValid functions you will receive a boolean true
 * if the result is either VALID or NO_CHECK_DIGIT_CALCULATION
 */
export enum Result {
  /**
   * Something is invalid
   */
  INVALID = "INVALID",
  /**
   * Check digit calculation method isn't implemented because it no bank
   * currently uses it.
   */
  METHOD_NOT_IMPLEMENTED_NOT_IN_USE = "METHOD_NOT_IMPLEMENTED_NOT_IN_USE",
  /**
   * The bank uses no check digit method for some or all account numbers.
   * So we can't test if the account number is wrong and have to treat it
   * as valid.
   */
  NO_CHECK_DIGIT_CALCULATION = "NO_CHECK_DIGIT_CALCULATION",
  /**
   * Check digit calculation method is not known
   */
  UNKOWN_CHECK_DIGIT_CALCULATION_METHOD = "UNKOWN_CHECK_DIGIT_CALCULATION_METHOD",
  /**
   * All validations were successful
   */
  VALID = "VALID",
}

/**
 * Components of German BBAN
 */
export interface AccountNumberBLZ {
  /**
   * String with 1-10 digits
   */
  accountNumber: string;
  /**
   * String with 8 digits
   */
  blz: string;
}

/**
 * Data for BIC
 */
export interface BankNameBIC {
  /**
   * Name of bank
   */
  bankName: string;
  /**
   * BIC/SWIFT code
   */
  bic?: string;
}

/**
 * Data for BIC
 */
export type IBANDetails = AccountNumberBLZ & BankNameBIC;
