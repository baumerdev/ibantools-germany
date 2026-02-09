/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD9 from "../../../lib/methods/methodD9";

describe("method D9", () => {
  it("confirms 1234567897 is valid (variation 1)", () => {
    expect(methodD9("1234567897")).toEqual("VALID");
  });
  it("confirms 0123456782 is valid (variation 1)", () => {
    expect(methodD9("0123456782")).toEqual("VALID");
  });
  it("confirms 9876543210 is valid (variation 2)", () => {
    expect(methodD9("9876543210")).toEqual("VALID");
  });
  it("confirms 1234567890 is valid (variation 2)", () => {
    expect(methodD9("1234567890")).toEqual("VALID");
  });
  it("confirms 0123456789 is valid (variation 2)", () => {
    expect(methodD9("0123456789")).toEqual("VALID");
  });
  it("confirms 1100132044 is valid (variation 3)", () => {
    expect(methodD9("1100132044")).toEqual("VALID");
  });
  it("confirms 1100669030 is valid (variation 3)", () => {
    expect(methodD9("1100669030")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6543217890 is invalid", () => {
    expect(methodD9("6543217890")).toEqual("INVALID");
  });
  it("confirms 0543216789 is invalid", () => {
    expect(methodD9("0543216789")).toEqual("INVALID");
  });
  it("confirms 6543217890 is invalid", () => {
    expect(methodD9("6543217890")).toEqual("INVALID");
  });
  it("confirms 1100789043 is invalid", () => {
    expect(methodD9("1100789043")).toEqual("INVALID");
  });
  it("confirms 1100914032 is invalid", () => {
    expect(methodD9("1100914032")).toEqual("INVALID");
  });
});
