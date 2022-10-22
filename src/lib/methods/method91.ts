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
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

import { method06Result } from "./method06";

const method91Core = (
  digits: number[],
  givenCheckDigit: number,
  weights: number[]
): Result => {
  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const calculatedCheckDigit = moduloDifference(sum, 11, 11);

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

  if (variation1(paddedNumber) === Result.VALID) {
    return Result.VALID;
  }

  if (variation2(paddedNumber) === Result.VALID) {
    return Result.VALID;
  }

  if (variation3(paddedNumber) === Result.VALID) {
    return Result.VALID;
  }

  if (variation4(paddedNumber) === Result.VALID) {
    return Result.VALID;
  }

  return Result.INVALID;
};
