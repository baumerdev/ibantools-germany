/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method01 from "./method01";
import method05 from "./method05";

export default (number: string): Result => {
  if (method05(number) === "VALID") {
    return "VALID";
  }

  if (method01(number) === "VALID") {
    return "VALID";
  }

  return method00(number);
};
