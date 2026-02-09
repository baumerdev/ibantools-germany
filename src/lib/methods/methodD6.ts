/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method03 from "./method03";
import method07 from "./method07";

export default (number: string): Result => {
  if (method07(number) === "VALID") {
    return "VALID";
  }

  if (method03(number) === "VALID") {
    return "VALID";
  }

  return method00(number);
};
