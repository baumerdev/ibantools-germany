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
  calculateCrossSums,
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigits,
} from "../helper";
import { Result } from "../types";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  const digits = getDigits(paddedNumber.slice(1, 8));
  const givenCheckDigit = digits.pop();

  const weightedDigits = weightDigits(digits, [1, 2, 1, 2, 1, 2]);
  const crossSumDigits = calculateCrossSums(weightedDigits);
  const sumMinus1 = calculateSum(crossSumDigits) - 1;
  const { difference: calculatedCheckDigit } = moduloDifference(
    sumMinus1,
    11,
    10
  );

  if (calculatedCheckDigit === 10 && givenCheckDigit === 0) {
    return "VALID";
  }

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
