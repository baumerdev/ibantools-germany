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

  return method00(paddedNumber.slice(2, 10));
};
