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
import method53 from "./method53";

export default (number: string, blz: string): Result => {
  const numericNumber = Number(number);
  if (
    numericNumber >= 1000000000 ||
    (numericNumber >= 269100000 && numericNumber <= 269900000)
  ) {
    return method20(number);
  }

  return method53(number, blz);
};
