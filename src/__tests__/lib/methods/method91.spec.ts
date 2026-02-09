/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method91 from "../../../lib/methods/method91";

describe("method 91", () => {
  it("confirms 2974118000 is valid (variation 1)", () => {
    expect(method91("2974118000")).toEqual("VALID");
  });
  it("confirms 5281741000 is valid (variation 1)", () => {
    expect(method91("5281741000")).toEqual("VALID");
  });
  it("confirms 9952810000 is valid (variation 1)", () => {
    expect(method91("9952810000")).toEqual("VALID");
  });
  it("confirms 2974117000 is valid (variation 2)", () => {
    expect(method91("2974117000")).toEqual("VALID");
  });
  it("confirms 5281770000 is valid (variation 2)", () => {
    expect(method91("5281770000")).toEqual("VALID");
  });
  it("confirms 9952812000 is valid (variation 2)", () => {
    expect(method91("9952812000")).toEqual("VALID");
  });
  it("confirms 8840019000 is valid (variation 3)", () => {
    expect(method91("8840019000")).toEqual("VALID");
  });
  it("confirms 8840050000 is valid (variation 3)", () => {
    expect(method91("8840050000")).toEqual("VALID");
  });
  it("confirms 8840087000 is valid (variation 3)", () => {
    expect(method91("8840087000")).toEqual("VALID");
  });
  it("confirms 8840045000 is valid (variation 3)", () => {
    expect(method91("8840045000")).toEqual("VALID");
  });
  it("confirms 8840012000 is valid (variation 4)", () => {
    expect(method91("8840012000")).toEqual("VALID");
  });
  it("confirms 8840055000 is valid (variation 4)", () => {
    expect(method91("8840055000")).toEqual("VALID");
  });
  it("confirms 8840080000 is valid (variation 4)", () => {
    expect(method91("8840080000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 2984118000 is invalid", () => {
    expect(method91("2984118000")).toEqual("INVALID");
  });
  it("confirms 2984117000 is invalid", () => {
    expect(method91("2984117000")).toEqual("INVALID");
  });
  it("confirms 8850019000 is invalid", () => {
    expect(method91("8850019000")).toEqual("INVALID");
  });
  it("confirms 8850012000 is invalid", () => {
    expect(method91("8850012000")).toEqual("INVALID");
  });
});
