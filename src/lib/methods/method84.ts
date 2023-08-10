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

import { method06Core } from "./method06";
import { method51NominalAccount } from "./method51";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  const significantNumber = paddedNumber.slice(4, 10);

  // Variation 1
  if (method06Core(significantNumber, [2, 3, 4, 5, 6]) === "VALID") {
    return "VALID";
  }

  // Variation 2
  if (method06Core(significantNumber, [2, 3, 4, 5, 6], 0, 0, 7) === "VALID") {
    return "VALID";
  }

  // Variation 3
  if (method06Core(significantNumber, [2, 1, 2, 1, 2], 0, 0, 10) === "VALID") {
    return "VALID";
  }

  return "INVALID";
};
