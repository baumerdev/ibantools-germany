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

import { paddedAccountNumber } from "../helper";
import { Result } from "../types";

import { method00Core } from "./method00";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const firstDigit = Number(paddedNumber.slice(0, 1));

  if (isNaN(firstDigit)) {
    return Result.INVALID;
  }

  const leftFillConsts = [
    4451970, 4451981, 4451992, 4451993, 4344992, 4344990, 4344991, 5499570,
    4451994, 5499579,
  ];

  return method00Core(
    `${leftFillConsts[firstDigit]}${paddedNumber.slice(1, 10)}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
  );
};
