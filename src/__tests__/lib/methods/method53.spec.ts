/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method53 from "../../../lib/methods/method53";

describe("method 53", () => {
  it("confirms 382432256 with BLZ 16052072 is valid", () => {
    expect(method53("382432256", "16052072")).toEqual("VALID");
  });
  it("confirms 1234567860 is valid (10 digits)", () => {
    expect(method53("1234567860", "16052072")).toEqual("VALID");
  });
  it("confirms 9876543218 is valid (method 20)", () => {
    expect(method53("9876543218", "00000000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 12345678 with BLZ 16052072 is valid", () => {
    expect(method53("12345678", "16052072")).toEqual("INVALID");
  });
  it("confirms 12345678 with BLZ 00000000 is valid", () => {
    expect(method53("12345678", "00000000")).toEqual("INVALID");
  });
});
