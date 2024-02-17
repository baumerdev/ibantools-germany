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

import { Result } from "../types";

import method20 from "./method20";
import method29 from "./method29";

export default (number: string): Result => {
  if (method20(number) === "VALID") {
    return "VALID";
  }

  if (method29(number) === "VALID") {
    return "VALID";
  }

  const numericNumber = Number(number);
  if (
    (numericNumber >= 5100000000 && numericNumber <= 5999999999) ||
    (numericNumber >= 9010000000 && numericNumber <= 9109999999)
  ) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return "INVALID";
};
