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

import { Result } from "../types";

import method00 from "./method00";
import method29 from "./method29";
import method75 from "./method75";

export default (number: string): Result => {
  const numericNumber = Number(number);

  if (
    (numericNumber >= 100000 && numericNumber <= 899999) ||
    (numericNumber >= 100000000 && numericNumber <= 899999999)
  ) {
    return method75(number);
  }

  if (
    (numericNumber >= 1000000000 && numericNumber <= 1999999999) ||
    (numericNumber >= 4000000000 && numericNumber <= 6999999999) ||
    (numericNumber >= 9000000000 && numericNumber <= 9999999999)
  ) {
    return method29(number);
  }

  if (numericNumber >= 3000000000 && numericNumber <= 3999999999) {
    return method00(number);
  }

  if (
    (numericNumber >= 30000000 && numericNumber <= 59999999) ||
    (numericNumber >= 7000000000 && numericNumber <= 7099999999) ||
    (numericNumber >= 8500000000 && numericNumber <= 8599999999)
  ) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return "INVALID";
};
