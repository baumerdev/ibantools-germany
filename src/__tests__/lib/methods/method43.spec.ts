/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method43 from "../../../lib/methods/method43";

describe("method 43", () => {
  it("confirms 6135244 is valid", () => {
    expect(method43("6135244")).toEqual("VALID");
  });
  it("confirms 9516893476 is valid", () => {
    expect(method43("9516893476")).toEqual("VALID");
  });
  it("confirms 1234567895 is valid", () => {
    expect(method43("1234567895")).toEqual("VALID");
  });
  it("confirms 1234567840 is valid", () => {
    expect(method43("1234567840")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6125244 is invalid", () => {
    expect(method43("6125244")).toEqual("INVALID");
  });
  it("confirms 9516893576 is invalid", () => {
    expect(method43("9516893576")).toEqual("INVALID");
  });
  it("confirms 1235567895 is invalid", () => {
    expect(method43("1235567895")).toEqual("INVALID");
  });
});
