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

export const method02Core = (number: string, weights: number[]): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  if (calculatedCheckDigit === 11) {
    if (givenCheckDigit === 0) {
      return "VALID";
    }

    return "INVALID";
  }

  if (calculatedCheckDigit === 10) {
    return "INVALID";
  }

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};

export default (number: string): Result =>
  method02Core(number, [2, 3, 4, 5, 6, 7, 8, 9, 2]);
