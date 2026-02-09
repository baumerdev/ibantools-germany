/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method06Core } from "./method06";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  const variation1Offset = paddedNumber.match(/^0000/) ? 4 : 0;
  if (
    method06Core(
      paddedNumber.slice(variation1Offset, variation1Offset + 6),
      [2, 3, 4, 5, 6],
    ) === "VALID"
  ) {
    return "VALID";
  }

  return method06Core(
    paddedNumber.slice(variation1Offset, variation1Offset + 6),
    [2, 3, 4, 5, 6],
    0,
    0,
    7,
  );
};
