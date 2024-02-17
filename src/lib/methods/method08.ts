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

import { method00Core } from "./method00";

export default (number: string): Result => {
  if (Number(number) < 60000) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};
