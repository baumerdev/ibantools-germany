/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method02Core } from "./method02";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  return method02Core(paddedNumber.slice(4, 10), [2, 3, 4, 5, 6, 0, 0, 0, 0]);
};
