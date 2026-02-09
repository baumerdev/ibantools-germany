/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB8 from "../../../lib/methods/methodB8";

describe("method B8", () => {
  it("confirms 0734192657 is valid (variation 1)", () => {
    expect(methodB8("0734192657")).toEqual("VALID");
  });
  it("confirms 6932875274 is valid (variation 1)", () => {
    expect(methodB8("6932875274")).toEqual("VALID");
  });
  it("confirms 3145863029 is valid (variation 2)", () => {
    expect(methodB8("3145863029")).toEqual("VALID");
  });
  it("confirms 2938692523 is valid (variation 2)", () => {
    expect(methodB8("2938692523")).toEqual("VALID");
  });
  it("has no check digit calculation for 5100000000", () => {
    expect(methodB8("5100000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 5999999998", () => {
    expect(methodB8("5999999998")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 9010000000", () => {
    expect(methodB8("9010000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 9109999999", () => {
    expect(methodB8("9109999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 0132572975 is invalid", () => {
    expect(methodB8("0132572975")).toEqual("INVALID");
  });
  it("confirms 9000412340 is invalid", () => {
    expect(methodB8("9000412340")).toEqual("INVALID");
  });
  it("confirms 9310305011 is invalid", () => {
    expect(methodB8("9310305011")).toEqual("INVALID");
  });
  it("confirms 0132572975 is invalid", () => {
    expect(methodB8("0132572975")).toEqual("INVALID");
  });
  it("confirms 9000412340 is invalid", () => {
    expect(methodB8("9000412340")).toEqual("INVALID");
  });
});
