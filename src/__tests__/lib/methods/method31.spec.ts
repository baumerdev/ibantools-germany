/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method31 from "../../../lib/methods/method31";

describe("method 31", () => {
  it("confirms 1000000524 is valid", () => {
    expect(method31("1000000524")).toEqual("VALID");
  });
  it("confirms 1000000583 is valid", () => {
    expect(method31("1000000583")).toEqual("VALID");
  });
  it("confirms 12345679 is valid", () => {
    expect(method31("12345679")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1001000524 is invalid", () => {
    expect(method31("1001000524")).toEqual("INVALID");
  });
  it("confirms 1000000683 is invalid", () => {
    expect(method31("1000000683")).toEqual("INVALID");
  });
  it("confirms 12355679 is invalid", () => {
    expect(method31("12355679")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method31("1234567890")).toEqual("INVALID");
  });
});
