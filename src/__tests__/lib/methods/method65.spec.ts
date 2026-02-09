/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method65 from "../../../lib/methods/method65";

describe("method 65", () => {
  it("confirms 1234567400 is valid", () => {
    expect(method65("1234567400")).toEqual("VALID");
  });
  it("confirms 1234567590 is valid", () => {
    expect(method65("1234567590")).toEqual("VALID");
  });

  //  Check for invalid result
  it("confirms 1234667400 is invalid", () => {
    expect(method65("1234667400")).toEqual("INVALID");
  });
  it("confirms 1234568590 is invalid", () => {
    expect(method65("1234568590")).toEqual("INVALID");
  });
});
