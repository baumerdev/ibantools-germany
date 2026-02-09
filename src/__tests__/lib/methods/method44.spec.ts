/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method44 from "../../../lib/methods/method44";

describe("method 44", () => {
  it("confirms 889006 is valid", () => {
    expect(method44("889006")).toEqual("VALID");
  });
  it("confirms 2618040504 is valid", () => {
    expect(method44("2618040504")).toEqual("VALID");
  });
  it("confirms 1234567891 is valid", () => {
    expect(method44("1234567891")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 889106 is invalid", () => {
    expect(method44("889106")).toEqual("INVALID");
  });
  it("confirms 2618040514 is invalid", () => {
    expect(method44("2618040514")).toEqual("INVALID");
  });
  it("confirms 1234566891 is invalid", () => {
    expect(method44("1234566891")).toEqual("INVALID");
  });
});
