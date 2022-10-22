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

import { Result } from "../types";

import method06 from "./method06";

export default (number: string): Result => {
  const numericNumber = Number(number);
  if (
    (numericNumber >= 1 && numericNumber <= 1999999) ||
    (numericNumber >= 9000000 && numericNumber <= 25999999) ||
    (numericNumber >= 396000000 && numericNumber <= 499999999) ||
    (numericNumber >= 700000000 && numericNumber <= 799999999) ||
    (numericNumber >= 910000000 && numericNumber <= 989999999)
  ) {
    return Result.NO_CHECK_DIGIT_CALCULATION;
  }

  return method06(number);
};
