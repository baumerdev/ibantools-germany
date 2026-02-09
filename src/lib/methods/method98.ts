/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method01Core } from "./method01";
import method32 from "./method32";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  if (
    method01Core(paddedNumber.slice(2, 10), [3, 1, 7, 3, 1, 7, 3]) === "VALID"
  ) {
    return "VALID";
  }

  return method32(number);
};
