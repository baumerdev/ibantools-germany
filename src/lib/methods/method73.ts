/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import {
  calculateCrossSums,
  calculateSum,
  getDigits,
  moduloDifference,
  paddedAccountNumber,
  weightDigitsRTL,
} from "../helper";
import type { Result } from "../types";

import { method00Core } from "./method00";
import { method51NominalAccount } from "./method51";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  // Variation 1
  if (method00Core(paddedNumber.slice(3, 10), [2, 1, 2, 1, 2, 1]) === "VALID") {
    return "VALID";
  }

  // Variation 2
  if (method00Core(paddedNumber.slice(4, 10), [2, 1, 2, 1, 2]) === "VALID") {
    return "VALID";
  }

  // Variation 3
  const digits = getDigits(paddedNumber.slice(4, 10));
  const givenCheckDigit = digits.pop();
  const weightedDigits = weightDigitsRTL(digits, [2, 1, 2, 1, 2]);
  const crossSums = calculateCrossSums(weightedDigits);
  const sum = calculateSum(crossSums);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 7, 7);

  if (calculatedCheckDigit === 7) {
    return givenCheckDigit === 0 ? "VALID" : "INVALID";
  }

  if (calculatedCheckDigit !== 7 && calculatedCheckDigit === givenCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
