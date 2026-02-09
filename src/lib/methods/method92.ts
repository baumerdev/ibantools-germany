/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method01Core } from "./method01";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  return method01Core(paddedNumber.slice(3, 10), [3, 7, 1, 3, 7, 1]);
};
