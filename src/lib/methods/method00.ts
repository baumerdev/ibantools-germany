/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateCrossSum,
  calculateCrossSums,
  calculateSum,
  getDigits,
  getUnitFromNumber,
  weightDigits,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

export type HandleSum = "UNIT" | "CROSS_SUM";

interface Method00CoreOptionInterface {
  checkDigitPosition?: number | null;
  crossSums?: boolean;
  handleSum?: HandleSum;
  rtl?: boolean;
}

const getGivenCheckDigit = (
  digits: number[],
  checkDigitPosition: number | null,
): number =>
  checkDigitPosition === null
    ? (digits.pop() as number) // Check digit is last digit
    : digits.splice(checkDigitPosition - 1, 1)[0]; // Check digit is at position n-th position

const getWeightedDigits = (
  digits: number[],
  weights: number[],
  rtl: boolean,
): number[] =>
  rtl ? weightDigitsRTL(digits, weights) : weightDigits(digits, weights);

const getSum = (weightedDigits: number[], crossSums: boolean): number => {
  const crossSumDigits = crossSums
    ? calculateCrossSums(weightedDigits)
    : weightedDigits;

  return calculateSum(crossSumDigits);
};

const sumHandler = (crossSum: number, handleSum: HandleSum): number => {
  if (handleSum === "CROSS_SUM") {
    let calcCrossSum = crossSum;
    while (calcCrossSum >= 10) {
      calcCrossSum = calculateCrossSum(calcCrossSum);
    }
    return calcCrossSum;
  }

  return getUnitFromNumber(crossSum);
};

const coreOptionsWithDefaults = (
  options: Method00CoreOptionInterface,
): Required<Method00CoreOptionInterface> => {
  return {
    ...{
      checkDigitPosition: null,
      crossSums: true,
      handleSum: "UNIT",
      rtl: true,
    },
    ...options,
  };
};

export const method00Core = (
  number: string,
  weights: number[],
  options?: Method00CoreOptionInterface,
): Result => {
  const fullOptions = coreOptionsWithDefaults(options ?? {});

  const digits = getDigits(number);
  const givenCheckDigit = getGivenCheckDigit(
    digits,
    fullOptions.checkDigitPosition,
  );

  const weightedDigits = getWeightedDigits(digits, weights, fullOptions.rtl);
  const sum = getSum(weightedDigits, fullOptions.crossSums);
  const handledCrossSum = sumHandler(sum, fullOptions.handleSum);
  const calculatedCheckDigit = getUnitFromNumber(10 - handledCrossSum);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};

export default (number: string): Result =>
  method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
