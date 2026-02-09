/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method52 from "../../../lib/methods/method52";

describe("method 52", () => {
  it("confirms 43001500 with BLZ 13051172 is valid", () => {
    expect(method52("43001500", "13051172")).toEqual("VALID");
  });
  it("confirms 9876543218 is valid (method 20)", () => {
    expect(method52("9876543218", "00000000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123456789 with BLZ 13051172 is invalid", () => {
    expect(method52("123456789", "13051172")).toEqual("INVALID");
  });
});
