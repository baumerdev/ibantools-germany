/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method19 from "../../../lib/methods/method19";

describe("method 19", () => {
  it("confirms 0240334000 is valid", () => {
    expect(method19("0240334000")).toEqual("VALID");
  });
  it("confirms 0200520016 is valid", () => {
    expect(method19("0200520016")).toEqual("VALID");
  });
  it("confirms 1234567898 is valid", () => {
    expect(method19("1234567898")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0240434000 is invalid", () => {
    expect(method19("0240434000")).toEqual("INVALID");
  });
  it("confirms 0200620016 is invalid", () => {
    expect(method19("0200620016")).toEqual("INVALID");
  });
  it("confirms 1234577898 is invalid", () => {
    expect(method19("1234577898")).toEqual("INVALID");
  });
});
