/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method06 from "./method06";

export default (number: string): Result => {
  const numericNumber = Number(number);
  if (numericNumber >= 396000000 && numericNumber <= 499999999) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return method06(number);
};
