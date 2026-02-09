/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method06CheckDigit, method06Result } from "./method06";

export default (number: string): Result => {
  const { calculatedCheckDigit, givenCheckDigit, diffRemainder } =
    method06CheckDigit(number, [2, 3, 4, 5, 6, 7, 2, 3, 4]);

  if (diffRemainder === 1 && number.slice(-2, -1) === number.slice(-1)) {
    return "VALID";
  }

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};
