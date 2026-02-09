/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA2 from "../../../lib/methods/methodA2";

describe("method A2", () => {
  it("confirms 3456789019 is valid (variation 1)", () => {
    expect(methodA2("3456789019")).toEqual("VALID");
  });
  it("confirms 5678901231 is valid (variation 1)", () => {
    expect(methodA2("5678901231")).toEqual("VALID");
  });
  it("confirms 6789012348 is valid (variation 1)", () => {
    expect(methodA2("6789012348")).toEqual("VALID");
  });
  it("confirms 3456789012 is valid (variation 2)", () => {
    expect(methodA2("3456789012")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234567890 is invalid (variation 1)", () => {
    expect(methodA2("1234567890")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid (variation 2)", () => {
    expect(methodA2("1234567890")).toEqual("INVALID");
  });
  it("confirms 0123456789 is invalid (variation 2)", () => {
    expect(methodA2("0123456789")).toEqual("INVALID");
  });
});
