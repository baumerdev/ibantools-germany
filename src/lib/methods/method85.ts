/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method02Core } from "./method02";
import method06 from "./method06";
import method33, { method33Core } from "./method33";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 4) === "99") {
    return method02Core(paddedNumber.slice(2, 10), [2, 3, 4, 5, 6, 7, 8]);
  }

  let significantNumber = paddedNumber.slice(3, 10);
  // Variation A
  if (method06(significantNumber) === "VALID") {
    return "VALID";
  }

  significantNumber = significantNumber.slice(1);
  // Variation B
  if (method33(significantNumber) === "VALID") {
    return "VALID";
  }

  // Variation C
  if (paddedNumber.match(/[789]$/)) {
    return "INVALID";
  }

  return method33Core(significantNumber, [2, 3, 4, 5, 6], 7, 0);
};
