/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { extractAccountNumberBLZFromBBAN } from "../../lib/extract";

describe("extractAccountNumberBLZFromBBAN", () => {
  it("extracts account number 9290701, BLZ 10220500 from BBAN 102205000009290701", () => {
    expect(extractAccountNumberBLZFromBBAN("102205000009290701")).toEqual({
      accountNumber: "0009290701",
      blz: "10220500",
    });
  });

  it("cannot extract data from invalid BBAN (wrong format)", () => {
    expect(extractAccountNumberBLZFromBBAN("1022050000092907021")).toEqual(
      null,
    );
  });

  it("cannot extract data from invalid BBAN format (wrong length)", () => {
    expect(extractAccountNumberBLZFromBBAN("10220500000929070")).toEqual(null);
  });
});
