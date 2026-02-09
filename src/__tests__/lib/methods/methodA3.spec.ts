/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA3 from "../../../lib/methods/methodA3";

describe("method A3", () => {
  it("confirms 1234567897 is valid (variation 1)", () => {
    expect(methodA3("1234567897")).toEqual("VALID");
  });
  it("confirms 0123456782 is valid (variation 1)", () => {
    expect(methodA3("0123456782")).toEqual("VALID");
  });
  it("confirms 9876543210 is valid (variation 1)", () => {
    expect(methodA3("9876543210")).toEqual("VALID");
  });
  it("confirms 1234567890 is valid (variation 2)", () => {
    expect(methodA3("1234567890")).toEqual("VALID");
  });
  it("confirms 0123456789 is valid (variation 2)", () => {
    expect(methodA3("0123456789")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6543217890 is invalid (variation 1)", () => {
    expect(methodA3("6543217890")).toEqual("INVALID");
  });
  it("confirms 0543216789 is invalid (variation 1)", () => {
    expect(methodA3("0543216789")).toEqual("INVALID");
  });
  it("confirms 6543217890 is invalid (variation 2)", () => {
    expect(methodA3("6543217890")).toEqual("INVALID");
  });
  it("confirms 0543216789 is invalid (variation 2)", () => {
    expect(methodA3("0543216789")).toEqual("INVALID");
  });
});
