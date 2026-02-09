/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
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
export type Result =
  /**
   * Something is invalid
   */
  | "INVALID"
  /**
   * Check digit calculation method isn't implemented because it no bank
   * currently uses it.
   */
  | "METHOD_NOT_IMPLEMENTED_NOT_IN_USE"
  /**
   * The bank uses no check digit method for some or all account numbers.
   * So we can't test if the account number is wrong and have to treat it
   * as valid.
   */
  | "NO_CHECK_DIGIT_CALCULATION"
  /**
   * Check digit calculation method is not known
   */
  | "UNKOWN_CHECK_DIGIT_CALCULATION_METHOD"
  /**
   * All validations were successful
   */
  | "VALID";

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
