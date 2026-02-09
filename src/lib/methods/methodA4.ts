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

import { method06Core } from "./method06";
import method93 from "./method93";

const variation1 = (number: string): Result =>
  method06Core(number.slice(3, 10), [2, 3, 4, 5, 6, 7]);

const variation2 = (number: string): Result => {
  const digits = getDigits(number.slice(3, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const { difference, remainder } = moduloDifference(sum, 7, 7);

  if (remainder === 0) {
    return givenCheckDigit === 0 ? "VALID" : "INVALID";
  }

  return givenCheckDigit === difference ? "VALID" : "INVALID";
};

const variation3 = (number: string): Result =>
  method06Core(number.slice(4, 10), [2, 3, 4, 5, 6]);

const variation4 = (number: string): Result => method93(number);

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (!paddedNumber.match(/^\d{2}99/)) {
    if (variation1(paddedNumber) === "VALID") {
      return "VALID";
    }

    if (variation2(paddedNumber) === "VALID") {
      return "VALID";
    }
  }

  if (paddedNumber.match(/^\d{2}99/)) {
    if (variation3(paddedNumber) === "VALID") {
      return "VALID";
    }
  }

  if (variation4(paddedNumber) === "VALID") {
    return "VALID";
  }

  return "INVALID";
};
