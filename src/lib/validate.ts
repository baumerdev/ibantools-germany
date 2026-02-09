/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { methodForBLZ } from "./data";
import { extractAccountNumberBLZFromBBAN } from "./extract";
import { lettersToDigits, modulo97 } from "./helper";
import { methodDispatch } from "./method-dispatch";
import type { ProbablyString } from "./types";

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
  blz: ProbablyString,
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

  return ["VALID", "NO_CHECK_DIGIT_CALCULATION"].includes(
    methodDispatch(accountNumber, blz, method),
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
 * Validate (German) IBAN
 *
 * If `onlyGermany` is true, it will return false for any IBAN not starting
 * with "DE". If false, non-German IBAN will be verified but no national
 * methods will be applied.
 *
 * IMPORTANT: A positive result does not does not necessarily mean that
 * the account exists; it only checks for structure and check digit!
 *
 * @param iban German IBAN with 22 chars
 * @param onlyGermany Allow only German IBANs (default: false)
 * @returns
 */
export const isValidIBAN = (
  iban: ProbablyString,
  onlyGermany = false,
): boolean => {
  if (typeof iban !== "string") {
    return false;
  }

  const country = iban.slice(0, 2).toUpperCase();
  const checkDigit = iban.slice(2, 4);
  const bban = iban.slice(4);

  // Validate IBAN check digit
  const validateAlphanumeric = `${bban}${country}${checkDigit}`;
  const validateNumberic = lettersToDigits(validateAlphanumeric);
  if (modulo97(validateNumberic) !== 1) {
    return false;
  }

  if (country !== "DE") {
    if (onlyGermany) {
      return false;
    }

    return true;
  }

  // Validate BBAN
  return isValidBBAN(bban);
};
