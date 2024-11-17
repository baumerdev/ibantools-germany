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

import { paddedAccountNumber } from "../helper";
import { Result } from "../types";

import { method00Core } from "./method00";

const tenDigits = (number: string): Result => {
  if (number.slice(3, 4) !== "9") {
    return "INVALID";
  }

  return method00Core(number.slice(3, 10), [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};

const nineDigitsVariation1 = (number: string): Result => {
  return method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};

const nineDigitsVariation2 = (number: string): Result => {
  return method00Core(
    `${number.slice(1, 2)}${number.slice(4, 10)}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
};

export default (number: string): Result => {
  if (number.length < 6) {
    return "INVALID";
  }

  const paddedNumber = paddedAccountNumber(number);
  if (paddedNumber.startsWith("04")) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  if (!paddedNumber.startsWith("0")) {
    return tenDigits(paddedNumber);
  }

  if (nineDigitsVariation1(paddedNumber) === "VALID") {
    return "VALID";
  }

  return nineDigitsVariation2(paddedNumber);
};
