/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { Result } from "../types";

// This method is currently not used. Neither directly by a BLZ nor indirectly
// by being called by another method.
export default (_number: string): Result => "METHOD_NOT_IMPLEMENTED_NOT_IN_USE";
