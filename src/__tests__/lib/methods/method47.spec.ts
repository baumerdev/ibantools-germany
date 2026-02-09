/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method47 from "../../../lib/methods/method47";

describe("method 47", () => {
  it("confirms 1018000 is valid", () => {
    expect(method47("1018000")).toEqual("VALID");
  });
  it("confirms 1003554450 is valid", () => {
    expect(method47("1003554450")).toEqual("VALID");
  });
  it("confirms 1234567800 is valid", () => {
    expect(method47("1234567800")).toEqual("VALID");
  });
  it("confirms 1234567809 is valid", () => {
    expect(method47("1234567809")).toEqual("VALID");
  });
  it("confirms 4567800 is valid", () => {
    expect(method47("4567800")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1028000 is invalid", () => {
    expect(method47("1028000")).toEqual("INVALID");
  });
  it("confirms 1003555450 is invalid", () => {
    expect(method47("1003555450")).toEqual("INVALID");
  });
  it("confirms 1235567800 is invalid", () => {
    expect(method47("1235567800")).toEqual("INVALID");
  });
  it("confirms 1234568809 is invalid", () => {
    expect(method47("1234568809")).toEqual("INVALID");
  });
  it("confirms 4667800 is invalid", () => {
    expect(method47("4667800")).toEqual("INVALID");
  });
});
