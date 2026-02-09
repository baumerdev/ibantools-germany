/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

import { method02Core } from "./method02";

export default (number: string): Result =>
  method02Core(number, [2, 3, 4, 5, 6, 7, 2, 3, 4]);
