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

import method00 from "./method00";
import { method06Result } from "./method06";
import { method33Core } from "./method33";

const method51aCore = (number: string): Result => {
  const digits = getDigits(number.slice(3, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7]);
  const sum = calculateSum(weightedDigits);
  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

const method51bCore = (number: string): Result =>
  method33Core(number, [2, 3, 4, 5, 6]);

const method51cCore = (number: string): Result => method00(number.slice(3, 10));

const method51dCore = (number: string): Result =>
  method33Core(number, [2, 3, 4, 5, 6], 7, 0);

const method51dVariation1 = (number: string): Result => {
  const digits = getDigits(number.slice(2, 10));
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7, 8]);
  const sum = calculateSum(weightedDigits);

  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

const method51dVariation2 = (number: string): Result => {
  const digits = getDigits(number);
  const givenCheckDigit = digits.pop() as number; // Check digit is last digit

  const weightedDigits = weightDigitsRTL(digits, [2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const sum = calculateSum(weightedDigits);

  const { difference: calculatedCheckDigit } = moduloDifference(sum, 11, 11);

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};

export const method51NominalAccount = (number: string): Result => {
  if (method51dVariation1(number) === "VALID") {
    return "VALID";
  }

  return method51dVariation2(number);
};

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  if (method51aCore(paddedNumber) === "VALID") {
    return "VALID";
  }
  if (method51bCore(paddedNumber) === "VALID") {
    return "VALID";
  }
  if (method51cCore(paddedNumber) === "VALID") {
    return "VALID";
  }

  if (Number(paddedNumber.slice(9, 10)) >= 7) {
    return "INVALID";
  }

  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  return method51dCore(paddedNumber);
};
