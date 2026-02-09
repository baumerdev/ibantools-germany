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

import { method06Result } from "./method06";

export default (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 4, 8, 5, 10, 9, 7, 3, 6]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};
