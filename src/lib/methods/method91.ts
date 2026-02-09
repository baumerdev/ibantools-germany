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

const method91Core = (
  digits: number[],
  givenCheckDigit: number,
  weights: number[],
): Result => {
  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

const variation1 = (number: string): Result => {
  const digits = getDigits(number.slice(0, 7));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit
  return method91Core(digits, givenCheckDigit, [2, 3, 4, 5, 6, 7]);
};

const variation2 = (number: string): Result => {
  const digits = getDigits(number.slice(0, 7));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit
  return method91Core(digits, givenCheckDigit, [7, 6, 5, 4, 3, 2]);
};

const variation3 = (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.splice(6, 1)[0]; // CheckDigit is 7th digit
  return method91Core(digits, givenCheckDigit, [2, 3, 4, 5, 6, 7, 8, 9, 10]);
};

const variation4 = (number: string): Result => {
  const digits = getDigits(number.slice(0, 7));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit
  return method91Core(digits, givenCheckDigit, [2, 4, 8, 5, 10, 9]);
};

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (variation1(paddedNumber) === "VALID") {
    return "VALID";
  }

  if (variation2(paddedNumber) === "VALID") {
    return "VALID";
  }

  if (variation3(paddedNumber) === "VALID") {
    return "VALID";
  }

  if (variation4(paddedNumber) === "VALID") {
    return "VALID";
  }

  return "INVALID";
};
