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

import { paddedAccountNumber } from "../helper";
import { Result } from "../types";

import method20 from "./method20";
import method52 from "./method52";

export default (number: string, blz: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (
    paddedNumber.match(/^00/) &&
    method52(paddedNumber.slice(2), blz) === Result.VALID
  ) {
    return Result.VALID;
  }

  return method20(paddedNumber);
};
