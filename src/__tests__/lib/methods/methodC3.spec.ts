/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC3 from "../../../lib/methods/methodC3";

describe("method C3", () => {
  it("confirms 9294182 is valid (variation 1)", () => {
    expect(methodC3("9294182")).toEqual("VALID");
  });
  it("confirms 4431276 is valid (variation 1)", () => {
    expect(methodC3("4431276")).toEqual("VALID");
  });
  it("confirms 19919 is valid (variation 1)", () => {
    expect(methodC3("19919")).toEqual("VALID");
  });
  it("confirms 9000420530 is valid (variation 2)", () => {
    expect(methodC3("9000420530")).toEqual("VALID");
  });
  it("confirms 9000010006 is valid (variation 2)", () => {
    expect(methodC3("9000010006")).toEqual("VALID");
  });
  it("confirms 9000577650 is valid (variation 2)", () => {
    expect(methodC3("9000577650")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 17002 is invalid", () => {
    expect(methodC3("17002")).toEqual("INVALID");
  });
  it("confirms 123451 is invalid", () => {
    expect(methodC3("123451")).toEqual("INVALID");
  });
  it("confirms 122448 is invalid", () => {
    expect(methodC3("122448")).toEqual("INVALID");
  });
  it("confirms 9000734028 is invalid", () => {
    expect(methodC3("9000734028")).toEqual("INVALID");
  });
  it("confirms 9000733227 is invalid", () => {
    expect(methodC3("9000733227")).toEqual("INVALID");
  });
  it("confirms 9000731120 is invalid", () => {
    expect(methodC3("9000731120")).toEqual("INVALID");
  });
});
