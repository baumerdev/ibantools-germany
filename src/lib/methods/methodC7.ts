/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method06 from "./method06";
import method63 from "./method63";

export default (number: string): Result => {
  if (method63(number) === "VALID") {
    return "VALID";
  }

  return method06(number);
};
