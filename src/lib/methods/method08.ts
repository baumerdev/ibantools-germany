/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method00Core } from "./method00";

export default (number: string): Result => {
  if (Number(number) < 60000) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};
