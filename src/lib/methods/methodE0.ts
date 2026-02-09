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
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sumPlus7 = calculateSum(crossSums) + 7;
  const calculatedCheckDigit = 10 - getUnitFromNumber(sumPlus7);

  if (calculatedCheckDigit === 10 && givenCheckDigit === 0) {
    return "VALID";
  }

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
