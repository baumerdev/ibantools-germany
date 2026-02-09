/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method33Core } from "./method33";

export default (number: string): Result =>
  method33Core(number, [2, 4, 8, 5, 10, 0, 0, 0, 0]);
