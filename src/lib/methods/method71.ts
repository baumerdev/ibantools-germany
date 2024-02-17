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
  weightDigits,
} from "../helper";
import { Result } from "../types";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  const digits = getDigits(paddedNumber.slice(1, 7));
  const givenCheckDigit = Number(paddedNumber.slice(9, 10));

  const weightedDigits = weightDigits(digits, [6, 5, 4, 3, 2, 1]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  if (calculatedCheckDigit === 11 && givenCheckDigit === 0) {
    return "VALID";
  }

  if (calculatedCheckDigit === 10 && givenCheckDigit === 1) {
    return "VALID";
  }

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
