/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method00Core } from "./method00";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  let numberForCheck = paddedNumber;
  if (paddedNumber.slice(3, 4) === "9") {
    numberForCheck = paddedNumber.slice(3, 10);
  }

  return method00Core(numberForCheck, [2, 1, 2, 1, 2, 1, 2, 1, 2]);
};
