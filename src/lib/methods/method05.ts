/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method01Core } from "./method01";

export default (number: string): Result =>
  method01Core(number, [7, 3, 1, 7, 3, 1, 7, 3, 1]);
