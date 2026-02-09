/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA6 from "../../../lib/methods/methodA6";

describe("method A6", () => {
  it("confirms 800048548 is valid (variation 1)", () => {
    expect(methodA6("800048548")).toEqual("VALID");
  });
  it("confirms 0855000014 is valid (variation 1)", () => {
    expect(methodA6("0855000014")).toEqual("VALID");
  });
  it("confirms 17 is valid (variation 2)", () => {
    expect(methodA6("17")).toEqual("VALID");
  });
  it("confirms 55300030 is valid (variation 2)", () => {
    expect(methodA6("55300030")).toEqual("VALID");
  });
  it("confirms 150178033 is valid (variation 2)", () => {
    expect(methodA6("150178033")).toEqual("VALID");
  });
  it("confirms 600003555 is valid (variation 2)", () => {
    expect(methodA6("600003555")).toEqual("VALID");
  });
  it("confirms 900291823 is valid (variation 2)", () => {
    expect(methodA6("900291823")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 860000817 is invalid", () => {
    expect(methodA6("860000817")).toEqual("INVALID");
  });
  it("confirms 810033652 is invalid", () => {
    expect(methodA6("810033652")).toEqual("INVALID");
  });
  it("confirms 305888 is invalid", () => {
    expect(methodA6("305888")).toEqual("INVALID");
  });
  it("confirms 200071280 is invalid", () => {
    expect(methodA6("200071280")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodA6("1234567890")).toEqual("INVALID");
  });
});
