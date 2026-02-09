/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method00Core } from "./method00";

const tenDigits = (number: string): Result => {
  if (number.slice(3, 4) !== "9") {
    return "INVALID";
  }

  return method00Core(number.slice(3, 10), [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};

const nineDigitsVariation1 = (number: string): Result => {
  return method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};

const nineDigitsVariation2 = (number: string): Result => {
  return method00Core(
    `${number.slice(1, 2)}${number.slice(4, 10)}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
};

export default (number: string): Result => {
  if (number.length < 6) {
    return "INVALID";
  }

  const paddedNumber = paddedAccountNumber(number);
  if (paddedNumber.startsWith("04")) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  if (!paddedNumber.startsWith("0")) {
    return tenDigits(paddedNumber);
  }

  if (nineDigitsVariation1(paddedNumber) === "VALID") {
    return "VALID";
  }

  return nineDigitsVariation2(paddedNumber);
};
