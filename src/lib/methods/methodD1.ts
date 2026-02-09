/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method00Core } from "./method00";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const firstDigit = Number(paddedNumber.slice(0, 1));

  if (Number.isNaN(firstDigit) || firstDigit === 8) {
    return "INVALID";
  }

  const leftFillConsts = [
    4363380, 4363381, 4363382, 4363383, 4363384, 4363385, 4363386, 4363387, -1,
    4363389,
  ];

  return method00Core(
    `${leftFillConsts[firstDigit]}${paddedNumber.slice(1, 10)}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
};
