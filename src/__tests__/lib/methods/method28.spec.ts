/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method28 from "../../../lib/methods/method28";

describe("method 28", () => {
  it("confirms 19999000 is valid (remainder 1)", () => {
    expect(method28("19999000")).toEqual("VALID");
  });
  it("confirms 1234561090 is valid (remainder 0)", () => {
    expect(method28("1234561090")).toEqual("VALID");
  });
  it("confirms 9130000201 is valid", () => {
    expect(method28("9130000201")).toEqual("VALID");
  });
  it("confirms 1234567990 is valid", () => {
    expect(method28("1234567990")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 19999000 is invalid (wrong remainder)", () => {
    expect(method28("19999101")).toEqual("INVALID");
  });
  it("confirms 1234561090 is invalid (wrong remainder)", () => {
    expect(method28("1234561190")).toEqual("INVALID");
  });
  it("confirms 9130100201 is invalid", () => {
    expect(method28("9130100201")).toEqual("INVALID");
  });
  it("confirms 1235567990 is invalid", () => {
    expect(method28("1235567990")).toEqual("INVALID");
  });
});
