/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method06Core } from "./method06";

export default (number: string): Result => {
  const weight = [2, 3, 4, 5, 6, 7, 8];
  const paddedNumber = paddedAccountNumber(number);

  return method06Core(paddedNumber.slice(0, 8), weight);
};
