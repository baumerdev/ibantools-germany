/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { calculateSum, getDigits, weightDigitsRTL } from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [9, 8, 7, 6, 5, 4, 3, 2, 1]);
  const sum = calculateSum(weightedDigits);
  const calculatedCheckDigit = sum % 11;

  if (calculatedCheckDigit === 10) {
    return "INVALID";
  }

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
