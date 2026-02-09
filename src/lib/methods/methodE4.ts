/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method02 from "./method02";

export default (number: string): Result => {
  if (method02(number) === "VALID") {
    return "VALID";
  }

  return method00(number);
};
