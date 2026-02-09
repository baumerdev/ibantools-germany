/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method29 from "./method29";
import method75 from "./method75";

export default (number: string): Result => {
  const numericNumber = Number(number);

  if (
    (numericNumber >= 100000 && numericNumber <= 899999) ||
    (numericNumber >= 100000000 && numericNumber <= 899999999)
  ) {
    return method75(number);
  }

  if (
    (numericNumber >= 1000000000 && numericNumber <= 1999999999) ||
    (numericNumber >= 4000000000 && numericNumber <= 6999999999) ||
    (numericNumber >= 9000000000 && numericNumber <= 9999999999)
  ) {
    return method29(number);
  }

  if (numericNumber >= 3000000000 && numericNumber <= 3999999999) {
    return method00(number);
  }

  if (
    (numericNumber >= 30000000 && numericNumber <= 59999999) ||
    (numericNumber >= 7000000000 && numericNumber <= 7099999999) ||
    (numericNumber >= 8500000000 && numericNumber <= 8599999999)
  ) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return "INVALID";
};
