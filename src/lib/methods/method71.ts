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
  weightDigits,
} from "../helper";
import type { Result } from "../types";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  const digits = getDigits(paddedNumber.slice(1, 7));
  const givenCheckDigit = Number(paddedNumber.slice(9, 10));

  const weightedDigits = weightDigits(digits, [6, 5, 4, 3, 2, 1]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  if (calculatedCheckDigit === 11 && givenCheckDigit === 0) {
    return "VALID";
  }

  if (calculatedCheckDigit === 10 && givenCheckDigit === 1) {
    return "VALID";
  }

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
