/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { paddedAccountNumber } from "../helper";
import type { Result } from "../types";

import { method06CheckDigit, method06Result } from "./method06";

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);
  const { calculatedCheckDigit, givenCheckDigit } = method06CheckDigit(
    paddedNumber.slice(0, 7),
    [2, 3, 4, 5, 6, 7],
  );

  if (calculatedCheckDigit === 1 && number.slice(4, 5) === number.slice(5, 6)) {
    return "VALID";
  }

  return method06Result(givenCheckDigit, calculatedCheckDigit);
};
