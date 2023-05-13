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

import method20 from "./method20";
import { eserValidate } from "./method52";

const eser9 = (number: string, blz: string): string | null => {
  if (number.length !== 9) {
    return null;
  }
  const blz56 = blz.slice(4, 6);
  const number2 = number.slice(1, 2);
  const blz8 = blz.slice(7, 8);
  const number1 = number.slice(0, 1);
  const number3 = number.slice(2, 3);
  const number4Rest = number.slice(3, 9).replace(/^0+/, "");

  return `${blz56}${number2}${blz8}${number1}${number3}${number4Rest}`;
};

export default (number: string, blz: string): Result => {
  if (number.length === 10 && number.match(/^9/)) {
    return method20(number);
  }

  if (blz.length != 8 || !blz.match(/^\d{3}5/)) {
    return Result.INVALID;
  }

  const eserAccount = eser9(number.slice(-9), blz);
  if (!eserAccount) {
    return Result.INVALID;
  }

  return eserValidate(eserAccount);
};
