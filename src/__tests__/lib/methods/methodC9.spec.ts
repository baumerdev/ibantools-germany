/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC9 from "../../../lib/methods/methodC9";

describe("method C9", () => {
  it("confirms 3456789019 is valid (variation 1)", () => {
    expect(methodC9("3456789019")).toEqual("VALID");
  });
  it("confirms 5678901231 is valid (variation 1)", () => {
    expect(methodC9("5678901231")).toEqual("VALID");
  });
  it("confirms 0123456789 is valid (variation 2)", () => {
    expect(methodC9("0123456789")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3456789012 is invalid", () => {
    expect(methodC9("3456789012")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodC9("1234567890")).toEqual("INVALID");
  });
  it("confirms 9012345678 is invalid", () => {
    expect(methodC9("9012345678")).toEqual("INVALID");
  });
});
