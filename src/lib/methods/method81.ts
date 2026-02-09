/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method32 from "./method32";
import { method51NominalAccount } from "./method51";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  return method32(number);
};
