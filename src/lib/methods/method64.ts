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

import { method06Result } from "./method06";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const digits = getDigits(paddedNumber.slice(0, 7));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigits(digits, [9, 10, 5, 8, 4, 2]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};
