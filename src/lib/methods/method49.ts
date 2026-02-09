/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import method00 from "./method00";
import method01 from "./method01";

export default (number: string): Result => {
  const result00 = method00(number);
  if (result00 === "VALID") {
    return result00;
  }

  return method01(number);
};
