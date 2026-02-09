/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method00 from "./method00";
import method06 from "./method06";
import { method51NominalAccount } from "./method51";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  if (method06(paddedNumber.slice(3, 10)) === "VALID") {
    return "VALID";
  }

  return method00(paddedNumber.slice(3, 10));
};
