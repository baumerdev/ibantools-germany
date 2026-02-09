/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method20 from "./method20";
import method52 from "./method52";

export default (number: string, blz: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (
    paddedNumber.match(/^00/) &&
    method52(paddedNumber.slice(2), blz) === "VALID"
  ) {
    return "VALID";
  }

  return method20(paddedNumber);
};
