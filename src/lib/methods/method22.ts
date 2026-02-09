/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  getUnitFromNumber,
  getUnitsFromNumbers,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [3, 1, 3, 1, 3, 1, 3, 1, 3]);
  const unitDigits = getUnitsFromNumbers(weightedDigits);
  const sum = calculateSum(unitDigits);
  const unitDigit = getUnitFromNumber(sum);
  const calculatedCheckDigit = getUnitFromNumber(10 - unitDigit);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};
