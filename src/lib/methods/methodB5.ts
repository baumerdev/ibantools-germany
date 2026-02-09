/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method00 from "./method00";
import { method01Core } from "./method01";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (method01Core(number, [7, 3, 1, 7, 3, 1, 7, 3, 1]) === "VALID") {
    return "VALID";
  }
  if (paddedNumber.match(/^[89]/)) {
    return "INVALID";
  }

  return method00(number);
};
