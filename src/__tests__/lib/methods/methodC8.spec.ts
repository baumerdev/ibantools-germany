/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC8 from "../../../lib/methods/methodC8";

describe("method C8", () => {
  it("confirms 3456789019 is valid (variation 1)", () => {
    expect(methodC8("3456789019")).toEqual("VALID");
  });
  it("confirms 5678901231 is valid (variation 1)", () => {
    expect(methodC8("5678901231")).toEqual("VALID");
  });
  it("confirms 3456789012 is valid (variation 2)", () => {
    expect(methodC8("3456789012")).toEqual("VALID");
  });
  it("confirms 0022007130 is valid (variation 2)", () => {
    expect(methodC8("0022007130")).toEqual("VALID");
  });
  it("confirms 0123456789 is valid (variation 3)", () => {
    expect(methodC8("0123456789")).toEqual("VALID");
  });
  it("confirms 0552071285 is valid (variation 3)", () => {
    expect(methodC8("0552071285")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234567890 is invalid", () => {
    expect(methodC8("1234567890")).toEqual("INVALID");
  });
  it("confirms 9012345678 is invalid", () => {
    expect(methodC8("9012345678")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodC8("1234567890")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodC8("1234567890")).toEqual("INVALID");
  });
});
