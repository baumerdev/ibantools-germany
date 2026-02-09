/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method20 from "./method20";
import method53 from "./method53";

export default (number: string, blz: string): Result => {
  const numericNumber = Number(number);
  if (
    numericNumber >= 1000000000 ||
    (numericNumber >= 269100000 && numericNumber <= 269900000)
  ) {
    return method20(number);
  }

  return method53(number, blz);
};
