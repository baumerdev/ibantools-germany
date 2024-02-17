/**
 * ibantools-germany
 * Copyright (C) 2022-2024 Markus Baumer <markus@baumer.dev>
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

export const method33Core = (
  number: string,
  weights: number[],
  modulo = 11,
  remainder0CheckDigit?: number
): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const digits = getDigits(paddedNumber.slice(4, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit, remainder } = moduloDifference(
    sum,
    modulo,
    modulo
  );

  // Special sub case used in method51dCore, method85, method87c
  if (remainder0CheckDigit !== undefined && remainder === 0) {
    return givenCheckDigit === remainder0CheckDigit ? "VALID" : "INVALID";
  }

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

export default (number: string): Result =>
  method33Core(number, [2, 3, 4, 5, 6]);
