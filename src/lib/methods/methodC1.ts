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
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

import method17 from "./method17";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (paddedNumber.match(/^5/)) {
    const digits = getDigits(paddedNumber);
    const givenCheckDigit = digits.pop(); // Check digit is last digit

    const weightedDigits = weightDigitsRTL(digits, [1, 2, 1, 2, 1, 2, 1, 2, 1]);
    const crossSums = calculateCrossSums(weightedDigits);
    const sum = calculateSum(crossSums) - 1;
    const modulo = sum % 11;
    const diff10 = 10 - modulo;
    const calculatedCheckDigit = getUnitFromNumber(diff10);

    if (calculatedCheckDigit === givenCheckDigit) {
      return "VALID";
    }

    return "INVALID";
  }

  return method17(number);
};
