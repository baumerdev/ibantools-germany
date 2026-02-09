/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateCrossSums,
  calculateSum,
  getDigits,
  getUnitFromNumber,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

import { method06Result } from "./method06";

const method63Core = (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (!paddedNumber.startsWith("0")) {
    return "INVALID";
  }

  const digits = getDigits(paddedNumber.slice(1, 8));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 1, 2, 1, 2, 1]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSums);
  const calculatedCheckDigit = 10 - getUnitFromNumber(sum);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

export default (number: string): Result => {
  if (method63Core(number) === "VALID") {
    return "VALID";
  }

  if (number.length > 8) {
    return "INVALID";
  }

  // If validation fails, try checking it with trailing
  // subaccount number 00 which is allowed to be omitted.
  return method63Core(`${number}00`);
};
