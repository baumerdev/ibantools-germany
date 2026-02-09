/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method45 from "../../../lib/methods/method45";

describe("method 45", () => {
  it("confirms 3545343232 is valid", () => {
    expect(method45("3545343232")).toEqual("VALID");
  });
  it("confirms 4013410024 is valid", () => {
    expect(method45("4013410024")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid", () => {
    expect(method45("1234567897")).toEqual("VALID");
  });
  it("has no check digit calculation for 0994681254 (first digit 0)", () => {
    expect(method45("0994681254")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0000012340 (first digit 0)", () => {
    expect(method45("0000012340")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 1000199999 (fifth digit 1)", () => {
    expect(method45("1000199999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0100114240 (fifth digit 1)", () => {
    expect(method45("0100114240")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 4890001112 (digit 1-2 = 48)", () => {
    expect(method45("4890001112")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 3555343232 is invalid", () => {
    expect(method45("3555343232")).toEqual("INVALID");
  });
  it("confirms 4013420024 is invalid", () => {
    expect(method45("4013420024")).toEqual("INVALID");
  });
  it("confirms 1234567997 is invalid", () => {
    expect(method45("1234567997")).toEqual("INVALID");
  });
});
