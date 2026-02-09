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
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7, 2, 3, 4]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  if (calculatedCheckDigit === 10) {
    if (paddedNumber.slice(0, 1) === "9" && givenCheckDigit === 7) {
      return "VALID";
    }

    return "INVALID";
  }

  if (calculatedCheckDigit === 11) {
    if (paddedNumber.slice(0, 1) === "9" && givenCheckDigit === 8) {
      return "VALID";
    }

    return "INVALID";
  }

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
