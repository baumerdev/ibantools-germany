/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method89 from "../../../lib/methods/method89";

describe("method 89", () => {
  it("confirms 599999 is valid (no check digit for 6 or less digits)", () => {
    expect(method89("599999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("confirms 1000000000 is valid (no check digit for 10 digits)", () => {
    expect(method89("1000000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("confirms 1098506 is valid (7 digit numbers)", () => {
    expect(method89("1098506")).toEqual("VALID");
  });
  it("confirms 32028008 is valid (8-9 digit numbers)", () => {
    expect(method89("32028008")).toEqual("VALID");
  });
  it("confirms 218433000 is valid (8-9 digit numbers)", () => {
    expect(method89("218433000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1097506 is invalid", () => {
    expect(method89("1097506")).toEqual("INVALID");
  });
  it("confirms 32028018 is invalid", () => {
    expect(method89("32028018")).toEqual("INVALID");
  });
  it("confirms 219433000 is invalid", () => {
    expect(method89("219433000")).toEqual("INVALID");
  });
});
