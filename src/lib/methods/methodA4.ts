/**
 * ibantools-germany
 * Copyright (C) 2022-2023 Markus Baumer <markus@baumer.dev>
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

import { method06Core } from "./method06";
import method93 from "./method93";

const variation1 = (number: string): Result =>
  method06Core(number.slice(3, 10), [2, 3, 4, 5, 6, 7]);

export const variation2 = (number: string): Result => {
  const digits = getDigits(number.slice(3, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const { difference, remainder } = moduloDifference(sum, 7, 7);

  if (remainder === 0) {
    return givenCheckDigit === 0 ? Result.VALID : Result.INVALID;
  }

  return givenCheckDigit === difference ? Result.VALID : Result.INVALID;
};

const variation3 = (number: string): Result =>
  method06Core(number.slice(4, 10), [2, 3, 4, 5, 6]);

const variation4 = (number: string): Result => method93(number);

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (!paddedNumber.match(/^\d{2}99/)) {
    if (variation1(paddedNumber) === Result.VALID) {
      return Result.VALID;
    }

    if (variation2(paddedNumber) === Result.VALID) {
      return Result.VALID;
    }
  }

  if (paddedNumber.match(/^\d{2}99/)) {
    if (variation3(paddedNumber) === Result.VALID) {
      return Result.VALID;
    }
  }

  if (variation4(paddedNumber) === Result.VALID) {
    return Result.VALID;
  }

  return Result.INVALID;
};
