/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method66 from "../../../lib/methods/method66";

describe("method 66", () => {
  it("confirms 100150502 is valid", () => {
    expect(method66("100150502")).toEqual("VALID");
  });
  it("confirms 100154508 is valid", () => {
    expect(method66("100154508")).toEqual("VALID");
  });
  it("confirms 101154508 is valid", () => {
    expect(method66("101154508")).toEqual("VALID");
  });
  it("confirms 100154516 is valid", () => {
    expect(method66("100154516")).toEqual("VALID");
  });
  it("confirms 101154516 is valid", () => {
    expect(method66("101154516")).toEqual("VALID");
  });
  it("has no check digit calculation for 983393104", () => {
    expect(method66("983393104")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 100150602 is invalid", () => {
    expect(method66("100150602")).toEqual("INVALID");
  });
  it("confirms 100154518 is invalid", () => {
    expect(method66("100154518")).toEqual("INVALID");
  });
  it("confirms 101454508 is invalid", () => {
    expect(method66("101454508")).toEqual("INVALID");
  });
  it("confirms 1100154516 is invalid", () => {
    expect(method66("1100154516")).toEqual("INVALID");
  });
  it("confirms 101155516 is invalid", () => {
    expect(method66("101155516")).toEqual("INVALID");
  });
});
