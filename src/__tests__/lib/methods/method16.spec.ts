/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method16 from "../../../lib/methods/method16";

describe("method 16", () => {
  it("confirms 1134567895 is valid", () => {
    expect(method16("1134567895")).toEqual("VALID");
  });
  it("confirms 1234563811 is valid (special, remainder 1)", () => {
    expect(method16("1234563811")).toEqual("VALID");
  });
  it("confirms 1234567841 is valid (default, remainder 1)", () => {
    expect(method16("1234567841")).toEqual("VALID");
  });
  it("confirms 1234568499 is valid (special, remainder 1)", () => {
    expect(method16("1234568499")).toEqual("VALID");
  });
  // Check for invalid result
  it("confirms 1135567895 is invalid", () => {
    expect(method16("1135567895")).toEqual("INVALID");
  });
  it("confirms 1234563821 is invalid", () => {
    expect(method16("1234563821")).toEqual("INVALID");
  });
  it("confirms 1235567841 is invalid", () => {
    expect(method16("1235567841")).toEqual("INVALID");
  });
});
