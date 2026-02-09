/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const digits = getDigits(paddedNumber);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(
    digits.slice(1),
    [2, 3, 4, 5, 6, 7, 8, 9],
  );

  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  if (calculatedCheckDigit === 11) {
    if (givenCheckDigit === 0) {
      return "VALID";
    }

    return "INVALID";
  }

  if (calculatedCheckDigit === 10) {
    if (digits.slice(1, 2)[0] >= 8 && givenCheckDigit === 0) {
      return "VALID";
    }

    return "INVALID";
  }

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};
