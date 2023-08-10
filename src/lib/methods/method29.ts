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

import { calculateSum, getDigits, getUnitFromNumber } from "../helper";
import { Result } from "../types";

export default (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop(); // Check digit is last digit

  const transformMatrix = [
    [0, 1, 5, 9, 3, 7, 4, 8, 2, 6],
    [0, 1, 7, 6, 9, 8, 3, 2, 5, 4],
    [0, 1, 8, 4, 6, 2, 9, 5, 7, 3],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  digits.reverse();
  const transformedDigits = digits.map(
    (digit, index) => transformMatrix[index % 4][digit]
  );

  const sum = calculateSum(transformedDigits);
  const sumUnit = getUnitFromNumber(sum);
  const calculatedCheckDigit = 10 - sumUnit;

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
