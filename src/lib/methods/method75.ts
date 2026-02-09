/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method00 from "./method00";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (paddedNumber.match(/^0{3,4}/)) {
    return method00(paddedNumber.slice(4, 10));
  }
  if (paddedNumber.match(/^09/)) {
    return method00(paddedNumber.slice(2, 8));
  }

  return method00(paddedNumber.slice(1, 7));
};
