/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD6 from "../../../lib/methods/methodD6";

describe("method D6", () => {
  it("confirms 3409 is valid (variation 1)", () => {
    expect(methodD6("3409")).toEqual("VALID");
  });
  it("confirms 585327 is valid (variation 1)", () => {
    expect(methodD6("585327")).toEqual("VALID");
  });
  it("confirms 1650513 is valid (variation 1)", () => {
    expect(methodD6("1650513")).toEqual("VALID");
  });
  it("confirms 3601671056 is valid (variation 2)", () => {
    expect(methodD6("3601671056")).toEqual("VALID");
  });
  it("confirms 4402001046 is valid (variation 2)", () => {
    expect(methodD6("4402001046")).toEqual("VALID");
  });
  it("confirms 6100268241 is valid (variation 2)", () => {
    expect(methodD6("6100268241")).toEqual("VALID");
  });
  it("confirms 7001000681 is valid (variation 3)", () => {
    expect(methodD6("7001000681")).toEqual("VALID");
  });
  it("confirms 9000111105 is valid (variation 3)", () => {
    expect(methodD6("9000111105")).toEqual("VALID");
  });
  it("confirms 9001291005 is valid (variation 3)", () => {
    expect(methodD6("9001291005")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 33394 is invalid", () => {
    expect(methodD6("33394")).toEqual("INVALID");
  });
  it("confirms 595795 is invalid", () => {
    expect(methodD6("595795")).toEqual("INVALID");
  });
  it("confirms 16400501 is invalid", () => {
    expect(methodD6("16400501")).toEqual("INVALID");
  });
  it("confirms 3615071237 is invalid", () => {
    expect(methodD6("3615071237")).toEqual("INVALID");
  });
  it("confirms 6039267013 is invalid", () => {
    expect(methodD6("6039267013")).toEqual("INVALID");
  });
  it("confirms 6039316014 is invalid", () => {
    expect(methodD6("6039316014")).toEqual("INVALID");
  });
  it("confirms 7004017653 is invalid", () => {
    expect(methodD6("7004017653")).toEqual("INVALID");
  });
  it("confirms 9002720007 is invalid", () => {
    expect(methodD6("9002720007")).toEqual("INVALID");
  });
  it("confirms 9017483524 is invalid", () => {
    expect(methodD6("9017483524")).toEqual("INVALID");
  });
});
