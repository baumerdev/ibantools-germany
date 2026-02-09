/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method10 from "./method10";
import method18 from "./method18";

export default (number: string): Result => {
  if (method00(number) === "VALID") {
    return "VALID";
  }

  if (method10(number) === "VALID") {
    return "VALID";
  }

  return method18(number);
};
