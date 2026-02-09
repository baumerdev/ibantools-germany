/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method78 from "../../../lib/methods/method78";

describe("method 78", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method78("1234567897")).toEqual("VALID");
  });
  it("confirms 7581499 is valid", () => {
    expect(method78("7581499")).toEqual("VALID");
  });
  it("confirms 9999999981 is valid", () => {
    expect(method78("9999999981")).toEqual("VALID");
  });

  // Check for no check digit
  it("has no check digit calculation for 10000000", () => {
    expect(method78("10000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0010000000", () => {
    expect(method78("0010000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 99999999", () => {
    expect(method78("99999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0099999999", () => {
    expect(method78("0099999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 1235567897 is invalid", () => {
    expect(method78("1235567897")).toEqual("INVALID");
  });
  it("confirms 7581599 is invalid", () => {
    expect(method78("7581599")).toEqual("INVALID");
  });
  it("confirms 9998999981 is invalid", () => {
    expect(method78("9998999981")).toEqual("INVALID");
  });
});
