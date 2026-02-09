/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method34 from "../../../lib/methods/method34";

describe("method 34", () => {
  it("confirms 9913000700 is valid", () => {
    expect(method34("9913000700")).toEqual("VALID");
  });
  it("confirms 9914001000 is valid", () => {
    expect(method34("9914001000")).toEqual("VALID");
  });
  it("confirms 1234567190 is valid", () => {
    expect(method34("1234567190")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9914000700 is invalid", () => {
    expect(method34("9914000700")).toEqual("INVALID");
  });
  it("confirms 9914002000 is invalid", () => {
    expect(method34("9914002000")).toEqual("INVALID");
  });
  it("confirms 1234667190 is invalid", () => {
    expect(method34("1234667190")).toEqual("INVALID");
  });
});
