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
  if (method00Core(paddedNumber.slice(1, 8), [2, 1, 2, 1, 2, 1]) === "VALID") {
    return "VALID";
  }

  // If validation fails, try checking it with trailing
  // subaccount number 00 which is allowed to be omitted.
  const paddedNumberSubAccount = `${number}00`.padStart(10, "0");
  return method00Core(paddedNumberSubAccount.slice(1, 8), [2, 1, 2, 1, 2, 1]);
};
