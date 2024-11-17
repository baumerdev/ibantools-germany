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
  paddedAccountNumber,
  weightDigits,
} from "../helper";
import { Result } from "../types";

export default (number: string): Result => {
  let paddedNumber = paddedAccountNumber(number);
  if (paddedNumber.match(/^[3456]/)) {
    paddedNumber = paddedNumber.slice(1);
  }
  if (paddedNumber.match(/^9/)) {
    paddedNumber = paddedNumber.slice(3);
  }
  const digits = getDigits(paddedNumber.replace(/^0+/, ""));
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const weightedDigits = weightDigits(
    digits,
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    "MULTIPLY_ADD",
  );
  const weightedModuloDigits = weightedDigits.map((digit) => digit % 11);
  const sum = calculateSum(weightedModuloDigits);
  const calculatedCheckDigit = getUnitFromNumber(sum);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }
  return "INVALID";
};
