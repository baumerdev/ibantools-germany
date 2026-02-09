/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodE4 from "../../../lib/methods/methodE4";

describe("method E4", () => {
  it("confirms 1501836 is valid (variation 1)", () => {
    expect(methodE4("1501836")).toEqual("VALID");
  });
  it("confirms 9290702 is valid (variation 1)", () => {
    expect(methodE4("9290702")).toEqual("VALID");
  });
  it("confirms 539290858 is valid (variation 1)", () => {
    expect(methodE4("539290858")).toEqual("VALID");
  });
  it("confirms 1501824 is valid (variation 2)", () => {
    expect(methodE4("1501824")).toEqual("VALID");
  });
  it("confirms 1501832 is valid (variation 2)", () => {
    expect(methodE4("1501832")).toEqual("VALID");
  });
  it("confirms 9290701 is valid (variation 2)", () => {
    expect(methodE4("9290701")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 12345007 is invalid", () => {
    expect(methodE4("12345007")).toEqual("INVALID");
  });
  it("confirms 87654005 is invalid", () => {
    expect(methodE4("87654005")).toEqual("INVALID");
  });
  it("confirms 12345007 is invalid", () => {
    expect(methodE4("12345007")).toEqual("INVALID");
  });
  it("confirms 87654005 is invalid", () => {
    expect(methodE4("87654005")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodE4("1234567890")).toEqual("INVALID");
  });
});
