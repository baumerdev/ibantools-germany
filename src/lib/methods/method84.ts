/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method06Core } from "./method06";
import { method51NominalAccount } from "./method51";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  const significantNumber = paddedNumber.slice(4, 10);

  // Variation 1
  if (method06Core(significantNumber, [2, 3, 4, 5, 6]) === "VALID") {
    return "VALID";
  }

  // Variation 2
  if (method06Core(significantNumber, [2, 3, 4, 5, 6], 0, 0, 7) === "VALID") {
    return "VALID";
  }

  // Variation 3
  if (method06Core(significantNumber, [2, 1, 2, 1, 2], 0, 0, 10) === "VALID") {
    return "VALID";
  }

  return "INVALID";
};
