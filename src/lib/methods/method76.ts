/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

const method76Core = (number: string): Result => {
  const digits = getDigits(number.slice(1, 8));
  const givenCheckDigit = digits.pop();
  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const calculatedCheckDigit = sum % 11;

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Account type (first digit) must be 0, 4 or 6-9
  if (!paddedNumber.match(/^[046789]/)) {
    return "INVALID";
  }

  if (method76Core(paddedNumber) === "VALID") {
    return "VALID";
  }

  // If validation fails, try checking it with trailing
  // subaccount number 00 which is allowed to be omitted.
  return method76Core(`${number}00`.padStart(10, "0"));
};
