/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import type { AccountNumberBLZ, ProbablyString } from "./types";

/**
 * Extract account number and BLZ from BBAN
 *
 * @param bban German BBAN with 18 digits
 * @returns Object with Account number and BLZ or null if invalid
 */
export const extractAccountNumberBLZFromBBAN = (
  bban: ProbablyString,
): AccountNumberBLZ | null => {
  if (!bban || !bban.match(/^[1-9]\d{17}$/)) {
    return null;
  }

  return {
    accountNumber: bban.slice(8),
    blz: bban.slice(0, 8),
  };
};
