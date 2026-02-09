/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
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
import type { Result } from "../types";

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
