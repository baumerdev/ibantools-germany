/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method00Core } from "./method00";

export default (number: string): Result =>
  method00Core(number, [2, 1, 2, 1, 2, 1, 2, 1, 2], {
    handleSum: "CROSS_SUM",
  });
