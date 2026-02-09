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

  if (firstDigit === 0) {
    return "INVALID";
  }

  return method00Core(
    `428259${paddedNumber}`,
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  );
};
