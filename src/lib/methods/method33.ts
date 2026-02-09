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

export const method33Core = (
  number: string,
  weights: number[],
  modulo = 11,
  remainder0CheckDigit?: number,
): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const digits = getDigits(paddedNumber.slice(4, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit, remainder } = moduloDifference(
    sum,
    modulo,
    modulo,
  );

  // Special sub case used in method51dCore, method85, method87c
  if (remainder0CheckDigit !== undefined && remainder === 0) {
    return givenCheckDigit === remainder0CheckDigit ? "VALID" : "INVALID";
  }

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

export default (number: string): Result =>
  method33Core(number, [2, 3, 4, 5, 6]);
