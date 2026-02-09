/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method00 from "../../../lib/methods/method00";

describe("method 00", () => {
  it("confirms 9290701 is valid", () => {
    expect(method00("9290701")).toEqual("VALID");
  });
  it("confirms 539290858 is valid", () => {
    expect(method00("539290858")).toEqual("VALID");
  });
  it("confirms 1501824 is valid", () => {
    expect(method00("1501824")).toEqual("VALID");
  });
  it("confirms 1501832 is valid", () => {
    expect(method00("1501832")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid", () => {
    expect(method00("1234567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9290801 is invalid", () => {
    expect(method00("9290801")).toEqual("INVALID");
  });
  it("confirms 539190858 is invalid", () => {
    expect(method00("539190858")).toEqual("INVALID");
  });
  it("confirms 1601824 is invalid", () => {
    expect(method00("1601824")).toEqual("INVALID");
  });
  it("confirms 1501842 is invalid", () => {
    expect(method00("1501842")).toEqual("INVALID");
  });
  it("confirms 1234667897 is invalid", () => {
    expect(method00("1234667897")).toEqual("INVALID");
  });
});
