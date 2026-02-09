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

  if (
    paddedNumber.slice(0, 1) === "0" ||
    paddedNumber.slice(4, 5) === "1" ||
    paddedNumber.slice(0, 2) === "48"
  ) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};
