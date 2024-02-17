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

import {
  calculateCrossSums,
  calculateSum,
  diffNextHalfDecade,
  getDigits,
  getUnitFromNumber,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import { Result } from "../types";

import method04 from "./method04";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Variation 1
  const digits = getDigits(paddedNumber);
  const givenCheckDigit = digits.pop();
  const weightedDigits = weightDigitsRTL(digits, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSums);
  const unit = getUnitFromNumber(sum);
  const calculatedCheckDigit = getUnitFromNumber(10 - unit);

  if (calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  // Variation 1, Exemption
  if (
    paddedNumber.match(/^0000[^0]/) &&
    diffNextHalfDecade(sum) === givenCheckDigit
  ) {
    return "VALID";
  }

  // Variation 2
  return method04(paddedNumber);
};
