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

import { paddedAccountNumber } from "../helper";
import { Result } from "../types";

import { method02Core } from "./method02";
import method06 from "./method06";
import method33, { method33Core } from "./method33";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 4) === "99") {
    return method02Core(paddedNumber.slice(2, 10), [2, 3, 4, 5, 6, 7, 8]);
  }

  // Variation A
  if (method06(number) === Result.VALID) {
    return Result.VALID;
  }

  // Variation B
  if (method33(number) === Result.VALID) {
    return Result.VALID;
  }

  // Variation C
  if (paddedNumber.match(/[789]$/)) {
    return Result.INVALID;
  }

  return method33Core(number, [2, 3, 4, 5, 6], 7);
};
