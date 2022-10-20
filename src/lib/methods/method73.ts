/*!
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
  calculateCrossSums,
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

import { method00Core } from "./method00";
import { method51NominalAccount } from "./method51";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  // Variation 1
  if (
    method00Core(paddedNumber.slice(3, 10), [2, 1, 2, 1, 2, 1]) === Result.VALID
  ) {
    return Result.VALID;
  }

  // Variation 2
  if (
    method00Core(paddedNumber.slice(4, 10), [2, 1, 2, 1, 2]) === Result.VALID
  ) {
    return Result.VALID;
  }

  // Variation 3
  const digits = getDigits(paddedNumber.slice(4, 10));
  const givenCheckDigit = digits.pop();
  const weightedDigits = weightDigitsRTL(digits, [2, 1, 2, 1, 2]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSums);
  const calculatedCheckDigit = moduloDifference(sum, 7, 7);

  if (calculatedCheckDigit === givenCheckDigit) {
    return Result.VALID;
  }

  return Result.INVALID;
};
