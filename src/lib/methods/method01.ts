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
  getUnitFromNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

export const method01Core = (number: string, weights: number[]): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, weights);
  const sum = calculateSum(weightedDigits);
  const unitDigit = getUnitFromNumber(sum);
  const calculatedCheckDigit = getUnitFromNumber(10 - unitDigit);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};

export default (number: string): Result =>
  method01Core(number, [3, 7, 1, 3, 7, 1, 3, 7, 1]);
