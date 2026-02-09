/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method95 from "../../../lib/methods/method95";

describe("method 95", () => {
  it("confirms 0068007003 is valid", () => {
    expect(method95("0068007003")).toEqual("VALID");
  });
  it("confirms 0847321750 is valid", () => {
    expect(method95("0847321750")).toEqual("VALID");
  });
  it("confirms 6450060494 is valid", () => {
    expect(method95("6450060494")).toEqual("VALID");
  });
  it("confirms 6454000003 is valid", () => {
    expect(method95("6454000003")).toEqual("VALID");
  });
  it("has no check digit calculation for 0000000001", () => {
    expect(method95("0000000001")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0001999999", () => {
    expect(method95("0001999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0009000000", () => {
    expect(method95("0009000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0025999999", () => {
    expect(method95("0025999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0396000000", () => {
    expect(method95("0396000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0499999999", () => {
    expect(method95("0499999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0700000000", () => {
    expect(method95("0700000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0799999999", () => {
    expect(method95("0799999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0910000000", () => {
    expect(method95("0910000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0989999999", () => {
    expect(method95("0989999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 0069007003 is invalid", () => {
    expect(method95("0069007003")).toEqual("INVALID");
  });
  it("confirms 0847322750 is invalid", () => {
    expect(method95("0847322750")).toEqual("INVALID");
  });
  it("confirms 6450160494 is invalid", () => {
    expect(method95("6450160494")).toEqual("INVALID");
  });
  it("confirms 6455000003 is invalid", () => {
    expect(method95("6455000003")).toEqual("INVALID");
  });
});
