/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method68 from "../../../lib/methods/method68";

describe("method 68", () => {
  it("confirms 8889654328 is valid (10 digits)", () => {
    expect(method68("8889654328")).toEqual("VALID");
  });
  it("confirms 987654324 is valid (9 digits, variation 1)", () => {
    expect(method68("987654324")).toEqual("VALID");
  });
  it("confirms 987654328 is valid (9 digits, variation 2)", () => {
    expect(method68("987654328")).toEqual("VALID");
  });
  it("confirms 900654328 is valid (9 digits, variation 2)", () => {
    expect(method68("900654328")).toEqual("VALID");
  });
  it("confirms 654327 is valid (9 digits, variation 2)", () => {
    expect(method68("654327")).toEqual("VALID");
  });
  it("confirms 99654327 is valid (9 digits, variation 2)", () => {
    expect(method68("99654327")).toEqual("VALID");
  });
  it("has no check digit calculation for 400000000", () => {
    expect(method68("400000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 499999999", () => {
    expect(method68("499999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  //  Check for invalid result
  it("confirms 8889654338 is invalid", () => {
    expect(method68("8889654338")).toEqual("INVALID");
  });
  it("confirms 987654424 is invalid", () => {
    expect(method68("987654424")).toEqual("INVALID");
  });
  it("confirms 987655328 is invalid", () => {
    expect(method68("987655328")).toEqual("INVALID");
  });
  it("confirms 59999 is invalid (too short)", () => {
    expect(method68("59999")).toEqual("INVALID");
  });
  it("confirms 8880654327 is invalid (valid check digit but no 9 as fourth digit)", () => {
    expect(method68("8880654327")).toEqual("INVALID");
  });
});
