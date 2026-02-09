/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { calculateSum, getDigits, getUnitFromNumber } from "../helper";
import type { Result } from "../types";

import { method00Core } from "./method00";

export default (number: string): Result => {
  if (Number(number) <= 999999999) {
    return method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
  }

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
    (digit, index) => transformMatrix[index % 4][digit],
  );

  const sum = calculateSum(transformedDigits);
  const sumUnit = getUnitFromNumber(sum);
  const calculatedCheckDigit = getUnitFromNumber(10 - sumUnit);

  if (givenCheckDigit === calculatedCheckDigit) {
    return "VALID";
  }

  return "INVALID";
};
