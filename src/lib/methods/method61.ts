/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateCrossSums,
  calculateSum,
  getDigits,
  getUnitFromNumber,
  paddedAccountNumber,
  weightDigits,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const digits = getDigits(paddedNumber);

  const validateDigits = digits.slice(0, 7);
  const [givenCheckDigit] = digits.slice(7, 8);
  if (digits.slice(8, 9)[0] === 8) {
    validateDigits.push(...digits.slice(8, 10));
  }

  const weightedDigits = weightDigits(
    validateDigits,
    [2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
  const crossSumDigits = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSumDigits);
  const calculatedCheckDigit = getUnitFromNumber(10 - getUnitFromNumber(sum));

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
