/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  moduloDifference,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 10, 10);

  if (calculatedCheckDigit === 10 && givenCheckDigit === 0) {
    return "VALID";
  }

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
