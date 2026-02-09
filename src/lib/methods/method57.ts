/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method00Core } from "./method00";
import method09 from "./method09";

const method57Variation1 = (number: string): Result => {
  const firstSixDigits = number.slice(0, 6);
  if (firstSixDigits === "777777" || firstSixDigits === "888888") {
    return method09(number);
  }

  return method00Core(number, [1, 2, 1, 2, 1, 2, 1, 2, 1], { rtl: false });
};

const method57Variation2 = (number: string): Result =>
  method00Core(number, [1, 2, 1, 2, 1, 2, 1, 2, 1], {
    checkDigitPosition: 3,
    rtl: false,
  });

const method57Variation3 = (number: string): Result => {
  return method09(number);
};

const method57Variation4 = (number: string): Result => {
  if (number === "0185125434") {
    return "VALID";
  }

  const thirdFourthNumber = Number(number.slice(2, 4));
  const seventhToNinthNumber = Number(number.slice(6, 9));
  if (
    thirdFourthNumber >= 1 &&
    thirdFourthNumber <= 12 &&
    seventhToNinthNumber < 500
  ) {
    return "VALID";
  }

  return "INVALID";
};

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const firstSecondNumber = Number(paddedNumber.slice(0, 2));

  if (
    [51, 55, 61, 64, 65, 66, 70, 88, 94, 95].includes(firstSecondNumber) ||
    (firstSecondNumber >= 73 && firstSecondNumber <= 82)
  ) {
    return method57Variation1(paddedNumber);
  }

  if (
    [
      52, 53, 54, 62, 63, 67, 68, 69, 71, 72, 89, 90, 92, 93, 96, 97, 98,
    ].includes(firstSecondNumber) ||
    (firstSecondNumber >= 32 && firstSecondNumber <= 39) ||
    (firstSecondNumber >= 41 && firstSecondNumber <= 49) ||
    (firstSecondNumber >= 56 && firstSecondNumber <= 60) ||
    (firstSecondNumber >= 83 && firstSecondNumber <= 87)
  ) {
    return method57Variation2(paddedNumber);
  }

  if ([40, 50, 91, 99].includes(firstSecondNumber)) {
    return method57Variation3(paddedNumber);
  }

  if (firstSecondNumber >= 1 && firstSecondNumber <= 31) {
    return method57Variation4(paddedNumber);
  }

  return "INVALID";
};
