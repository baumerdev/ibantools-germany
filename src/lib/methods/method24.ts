/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  getUnitFromNumber,
  paddedAccountNumber,
  weightDigits,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  let paddedNumber = paddedAccountNumber(number);
  if (paddedNumber.match(/^[3456]/)) {
    paddedNumber = paddedNumber.slice(1);
  }
  if (paddedNumber.match(/^9/)) {
    paddedNumber = paddedNumber.slice(3);
  }
  const digits = getDigits(paddedNumber.replace(/^0+/, ""));
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigits(
    digits,
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    "MULTIPLY_ADD",
  );
  const weightedModuloDigits = weightedDigits.map((digit) => digit % 11);
  const sum = calculateSum(weightedModuloDigits);
  const calculatedCheckDigit = getUnitFromNumber(sum);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};
