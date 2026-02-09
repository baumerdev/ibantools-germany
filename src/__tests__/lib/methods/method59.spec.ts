/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method59 from "../../../lib/methods/method59";

describe("method 59", () => {
  it("confirms 99999999 is valid (shorter than 9 digits, always valid)", () => {
    expect(method59("99999999")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid", () => {
    expect(method59("1234567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 100000000 is invalid (wrong digit for number longer than 9 digits)", () => {
    expect(method59("100000000")).toEqual("INVALID");
  });
  it("confirms 1234568897 is invalid", () => {
    expect(method59("1234568897")).toEqual("INVALID");
  });
});
