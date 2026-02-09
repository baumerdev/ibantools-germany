/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method06Core } from "./method06";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method06Core(paddedNumber.slice(2, 10), [2, 3, 4, 5, 6, 7, 8]);
  }

  return method06Core(paddedNumber.slice(3, 10), [2, 3, 4, 5, 6, 7]);
};
