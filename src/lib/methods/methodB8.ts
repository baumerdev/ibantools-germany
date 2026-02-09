/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method20 from "./method20";
import method29 from "./method29";

export default (number: string): Result => {
  if (method20(number) === "VALID") {
    return "VALID";
  }

  if (method29(number) === "VALID") {
    return "VALID";
  }

  const numericNumber = Number(number);
  if (
    (numericNumber >= 5100000000 && numericNumber <= 5999999999) ||
    (numericNumber >= 9010000000 && numericNumber <= 9109999999)
  ) {
    return "NO_CHECK_DIGIT_CALCULATION";
  }

  return "INVALID";
};
