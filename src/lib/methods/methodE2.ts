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

  if (Number.isNaN(firstDigit) || firstDigit >= 6) {
    return "INVALID";
  }

  const leftFillConsts = [4383200, 4383201, 4383202, 4383203, 4383204, 4383205];

  return method00Core(
    `${leftFillConsts[firstDigit]}${paddedNumber.slice(1, 10)}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
};
