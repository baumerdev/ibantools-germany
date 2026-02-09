/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method01 from "./method01";

export default (number: string): Result => {
  const numericNumber = Number(number);
  if (
    (numericNumber >= 1000000 && numericNumber <= 5999999) ||
    (numericNumber >= 700000000 && numericNumber <= 899999999)
  ) {
    return method01(number);
  }

  return "NO_CHECK_DIGIT_CALCULATION";
};
