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

  if (Number.isNaN(firstDigit)) {
    return "INVALID";
  }

  const leftFillConsts = [
    4451970, 4451981, 4451992, 4451993, 4344992, 4344990, 4344991, 5499570,
    4451994, 5499579,
  ];

  return method00Core(
    `${leftFillConsts[firstDigit]}${paddedNumber.slice(1, 10)}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
};
