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

import { method06Result } from "./method06";
import method09 from "./method09";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (!paddedNumber.startsWith("0")) {
    return "INVALID";
  }

  if (paddedNumber.startsWith("09")) {
    return method09(number);
  }

  const digits = getDigits(paddedNumber);
  const validateDigits = [...digits.slice(1, 2), ...digits.slice(4, 9)];
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(validateDigits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};
