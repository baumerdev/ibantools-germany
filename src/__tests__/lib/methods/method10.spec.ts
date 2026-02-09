/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method10 from "../../../lib/methods/method10";

describe("method 10", () => {
  it("confirms 12345008 is valid", () => {
    expect(method10("12345008")).toEqual("VALID");
  });
  it("confirms 87654008 is valid", () => {
    expect(method10("87654008")).toEqual("VALID");
  });
  it("confirms 1234567890 is valid", () => {
    expect(method10("1234567890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 12346008 is invalid", () => {
    expect(method10("12346008")).toEqual("INVALID");
  });
  it("confirms 87656008 is invalid", () => {
    expect(method10("87656008")).toEqual("INVALID");
  });
  it("confirms 1234577890 is invalid", () => {
    expect(method10("1234577890")).toEqual("INVALID");
  });
});
