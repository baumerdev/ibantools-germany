/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";

export default (number: string): Result => {
  if (Number(number) < 100000000) {
    return "VALID";
  }

  return method00(number);
};
