/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

import { method06Result } from "./method06";

const method50Core = (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const digits = getDigits(paddedNumber.slice(0, 7));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

export default (number: string): Result => {
  if (method50Core(number) === "VALID") {
    return "VALID";
  }

  if (number.length > 7) {
    return "INVALID";
  }

  // If validation fails, try checking it with trailing
  // subaccount number 000 which is allowed to be omitted.
  return method50Core(`${number}000`);
};
