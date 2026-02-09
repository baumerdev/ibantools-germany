/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";

export default (number: string): Result => {
  if (number.match(/^0{0,2}[^0]\d{7}$/)) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return method00(number);
};
