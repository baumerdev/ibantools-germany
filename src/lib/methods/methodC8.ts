/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method04 from "./method04";
import method07 from "./method07";

export default (number: string): Result => {
  if (method00(number) === "VALID") {
    return "VALID";
  }

  if (method04(number) === "VALID") {
    return "VALID";
  }

  return method07(number);
};
