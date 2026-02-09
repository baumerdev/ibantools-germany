/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method06Core } from "./method06";

export default (number: string): Result => {
  const weight = [2, 3, 4, 5, 6, 7, 2];
  const paddedNumber = paddedAccountNumber(number);

  if (paddedNumber.match(/^00/)) {
    return method06Core(paddedNumber.slice(2, 10), weight);
  }
  return method06Core(paddedNumber.slice(0, 8), weight);
};
