/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC0 from "../../../lib/methods/methodC0";

describe("method C0", () => {
  it("confirms 43001500 is valid (variation 1)", () => {
    expect(methodC0("43001500", "13051172")).toEqual("VALID");
  });
  it("confirms 48726458 is valid (variation 1)", () => {
    expect(methodC0("48726458", "13051172")).toEqual("VALID");
  });
  it("confirms 0012341097 is valid (variation 1)", () => {
    expect(methodC0("0012341097", "13051172")).toEqual("VALID");
  });
  it("confirms 0082335729 is valid (variation 2)", () => {
    expect(methodC0("0082335729", "00000000")).toEqual("VALID");
  });
  it("confirms 0734192657 is valid (variation 2)", () => {
    expect(methodC0("0734192657", "00000000")).toEqual("VALID");
  });
  it("confirms 6932875274 is valid (variation 2)", () => {
    expect(methodC0("6932875274", "00000000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 29837521 with BLZ 13051172 is invalid (variation 1)", () => {
    expect(methodC0("29837521", "13051172")).toEqual("INVALID");
  });
  it("confirms 0132572975 is invalid (variation 2)", () => {
    expect(methodC0("0132572975", "00000000")).toEqual("INVALID");
  });
  it("confirms 3038752371 is invalid (variation 2)", () => {
    expect(methodC0("3038752371", "00000000")).toEqual("INVALID");
  });
});
