/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateCrossSums,
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigits,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  const digits = getDigits(paddedNumber.slice(1, 8));
  const givenCheckDigit = digits.pop();

  const weightedDigits = weightDigits(digits, [1, 2, 1, 2, 1, 2]);
  const crossSumDigits = calculateCrossSums(weightedDigits);
  const sumMinus1 = calculateSum(crossSumDigits) - 1;
  const { difference: calculatedCheckDigit } = moduloDifference(
    sumMinus1,
    11,
    10,
  );

  if (calculatedCheckDigit === 10 && givenCheckDigit === 0) {
    return "VALID";
  }

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
