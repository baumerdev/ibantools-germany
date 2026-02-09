/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import method00 from "./method00";
import method58 from "./method58";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  if (paddedNumber.match(/^9/)) {
    return method58(number);
  }

  return method00(number);
};
