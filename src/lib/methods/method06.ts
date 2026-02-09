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

export const method06CheckDigit = (
  number: string,
  weights: number[],
  modulo = 11,
): {
  calculatedCheckDigit: number;
  diffRemainder: number;
  givenCheckDigit: number;
} => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit, remainder } = moduloDifference(
    sum,
    modulo,
    modulo,
  );

  return { calculatedCheckDigit, diffRemainder: remainder, givenCheckDigit };
};

export const method06Result = (
  givenCheckDigit: number,
  calculatedCheckDigit: number,
  diff10CheckDigit = 0,
  diff11CheckDigit = 0,
): Result => {
  if (calculatedCheckDigit === 10) {
    if (givenCheckDigit === diff10CheckDigit) {
      return "VALID";
    }

    return "INVALID";
  }

  if (calculatedCheckDigit === 11) {
    if (givenCheckDigit === diff11CheckDigit) {
      return "VALID";
    }

    return "INVALID";
  }

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};

/**
 * @param number Significant digits for calculation and check digit at the rightmost position
 * @param weights Weight for calculation, must be at
 * @param diff10CheckDigit Check digit if moduloDifference returns 10
 * @param diff11CheckDigit Check digit if moduloDifference returns 11
 * @param modulo Moduolo for moduloDifference
 * @returns
 */
export const method06Core = (
  number: string,
  weights: number[],
  diff10CheckDigit = 0,
  diff11CheckDigit = 0,
  modulo = 11,
): Result => {
  const { calculatedCheckDigit, givenCheckDigit } = method06CheckDigit(
    number,
    weights,
    modulo,
  );

  return method06Result(
    givenCheckDigit,
    calculatedCheckDigit,
    diff10CheckDigit,
    diff11CheckDigit,
  );
};

export default (number: string): Result =>
  method06Core(number, [2, 3, 4, 5, 6, 7, 2, 3, 4]);
