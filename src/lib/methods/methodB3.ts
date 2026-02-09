/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method06 from "./method06";
import method32 from "./method32";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (paddedNumber.match(/^[0-8]/)) {
    return method32(number);
  }

  return method06(number);
};
