/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method19 from "./method19";

export default (number: string): Result => {
  if (method19(number) === "VALID") {
    return "VALID";
  }

  if (method00(number) === "VALID") {
    return "VALID";
  }

  const numericNumber = Number(number);
  if (numericNumber >= 1300000 && numericNumber <= 99399999) {
    return "VALID";
  }

  return "INVALID";
};
