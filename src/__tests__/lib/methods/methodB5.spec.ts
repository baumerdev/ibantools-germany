/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB5 from "../../../lib/methods/methodB5";

describe("method B5", () => {
  it("confirms 0159006955 is valid (variation 1)", () => {
    expect(methodB5("0159006955")).toEqual("VALID");
  });
  it("confirms 2000123451 is valid (variation 1)", () => {
    expect(methodB5("2000123451")).toEqual("VALID");
  });
  it("confirms 1151043216 is valid (variation 1)", () => {
    expect(methodB5("1151043216")).toEqual("VALID");
  });
  it("confirms 9000939033 is valid (variation 1)", () => {
    expect(methodB5("9000939033")).toEqual("VALID");
  });
  it("confirms 0123456782 is valid (variation 2)", () => {
    expect(methodB5("0123456782")).toEqual("VALID");
  });
  it("confirms 0130098767 is valid (variation 2)", () => {
    expect(methodB5("0130098767")).toEqual("VALID");
  });
  it("confirms 1045000252 is valid (variation 2)", () => {
    expect(methodB5("1045000252")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 7414398260 is invalid", () => {
    expect(methodB5("7414398260")).toEqual("INVALID");
  });
  it("confirms 8347251693 is invalid", () => {
    expect(methodB5("8347251693")).toEqual("INVALID");
  });
  it("confirms 2345678901 is invalid", () => {
    expect(methodB5("2345678901")).toEqual("INVALID");
  });
  it("confirms 5678901234 is invalid", () => {
    expect(methodB5("5678901234")).toEqual("INVALID");
  });
  it("confirms 9000293707 is invalid", () => {
    expect(methodB5("9000293707")).toEqual("INVALID");
  });
  it("confirms 0159004165 is invalid", () => {
    expect(methodB5("0159004165")).toEqual("INVALID");
  });
  it("confirms 0023456787 is invalid", () => {
    expect(methodB5("0023456787")).toEqual("INVALID");
  });
  it("confirms 0056789018 is invalid", () => {
    expect(methodB5("0056789018")).toEqual("INVALID");
  });
  it("confirms 3045000333 is invalid", () => {
    expect(methodB5("3045000333")).toEqual("INVALID");
  });
});
