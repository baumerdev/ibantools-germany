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
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

const method76Core = (number: string): Result => {
  const digits = getDigits(number.slice(1, 8));
  const givenCheckDigit = digits.pop();
  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const calculatedCheckDigit = sum % 11;

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Account type (first digit) must be 0, 4 or 6-9
  if (!paddedNumber.match(/^[046789]/)) {
    return "INVALID";
  }

  if (method76Core(paddedNumber) === "VALID") {
    return "VALID";
  }

  // If validation fails, try checking it with trailing
  // subaccount number 00 which is allowed to be omitted.
  return method76Core(`${number}00`.padStart(10, "0"));
};
