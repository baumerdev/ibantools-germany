/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method06Core } from "./method06";

export default (number: string): Result =>
  method06Core(number, [2, 3, 4, 5, 6, 7, 8, 9, 1]);
