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
  getUnitFromNumber,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

import { method06Result } from "./method06";

const method63Core = (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (!paddedNumber.startsWith("0")) {
    return Result.INVALID;
  }

  const digits = getDigits(paddedNumber.slice(1, 8));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 1, 2, 1, 2, 1]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSums);
  const calculatedCheckDigit = 10 - getUnitFromNumber(sum);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

export default (number: string): Result => {
  if (method63Core(number) === Result.VALID) {
    return Result.VALID;
  }

  if (number.length > 8) {
    return Result.INVALID;
  }

  // If validation fails, try checking it with trailing
  // subaccount number 00 which is allowed to be omitted.
  return method63Core(`${number}00`);
};
