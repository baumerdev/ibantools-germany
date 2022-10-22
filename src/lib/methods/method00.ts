/**
 * ibantools-germany
 * Copyright (C) 2022 Markus Baumer <markus@baumer.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
import { Result } from "../types";

export enum HandleSum {
  UNIT,
  CROSS_SUM,
}

interface Method00CoreOptionInterface {
  checkDigitPosition?: number | null;
  crossSums?: boolean;
  handleSum?: HandleSum;
  rtl?: boolean;
}

const getGivenCheckDigit = (
  digits: number[],
  checkDigitPosition: number | null
): number =>
  checkDigitPosition === null
    ? (digits.pop() as number) // Check digit is last digit
    : digits.splice(checkDigitPosition - 1, 1)[0]; // Check digit is at position n-th position

const getWeightedDigits = (
  digits: number[],
  weights: number[],
  rtl: boolean
): number[] =>
  rtl ? weightDigitsRTL(digits, weights) : weightDigits(digits, weights);

const getSum = (weightedDigits: number[], crossSums: boolean): number => {
  const crossSumDigits = crossSums
    ? calculateCrossSums(weightedDigits)
    : weightedDigits;

  return calculateSum(crossSumDigits);
};

const sumHandler = (crossSum: number, handleSum: HandleSum): number => {
  if (handleSum === HandleSum.CROSS_SUM) {
    let calcCrossSum = crossSum;
    while (calcCrossSum >= 10) {
      calcCrossSum = calculateCrossSum(calcCrossSum);
    }
    return calcCrossSum;
  }

  return getUnitFromNumber(crossSum);
};

const coreOptionsWithDefaults = (
  options: Method00CoreOptionInterface
): Required<Method00CoreOptionInterface> => {
  return {
    ...{
      checkDigitPosition: null,
      crossSums: true,
      handleSum: HandleSum.UNIT,
      rtl: true,
    },
    ...options,
  };
};

export const method00Core = (
  number: string,
  weights: number[],
  options?: Method00CoreOptionInterface
): Result => {
  const fullOptions = coreOptionsWithDefaults(options ?? {});

  const digits = getDigits(number);
  const givenCheckDigit = getGivenCheckDigit(
    digits,
    fullOptions.checkDigitPosition
  );

  const weightedDigits = getWeightedDigits(digits, weights, fullOptions.rtl);
  const sum = getSum(weightedDigits, fullOptions.crossSums);
  const handledCrossSum = sumHandler(sum, fullOptions.handleSum);
  const calculatedCheckDigit = getUnitFromNumber(10 - handledCrossSum);

  if (givenCheckDigit === calculatedCheckDigit) {
    return Result.VALID;
  }
  return Result.INVALID;
};

export default (number: string): Result =>
  method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
