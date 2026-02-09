/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  getUnitFromNumber,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

export const method01Core = (number: string, weights: number[]): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const unitDigit = getUnitFromNumber(sum);
  const calculatedCheckDigit = getUnitFromNumber(10 - unitDigit);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};

export default (number: string): Result =>
  method01Core(number, [3, 7, 1, 3, 7, 1, 3, 7, 1]);
