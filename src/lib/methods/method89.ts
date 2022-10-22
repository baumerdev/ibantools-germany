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
  calculateCrossSums,
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

import { method06Result } from "./method06";
import method10 from "./method10";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // No check digit for account numbers with 10 or 6 and less digits
  if (paddedNumber.match(/(?:^[^0]|^0{4,})/)) {
    return Result.NO_CHECK_DIGIT_CALCULATION;
  }

  if (paddedNumber.match(/^0{0,2}[^0]\d{7,8}$/)) {
    return method10(number);
  }

  const digits = getDigits(paddedNumber.slice(3, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSums);
  const calculatedCheckDigit = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};
