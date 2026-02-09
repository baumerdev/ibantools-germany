/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method00 from "./method00";
import method03 from "./method03";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (method00(paddedNumber) === "VALID") {
    return "VALID";
  }

  return method03(paddedNumber);
};
