/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method24 from "../../../lib/methods/method24";

describe("method 24", () => {
  it("confirms 138301 is valid", () => {
    expect(method24("138301")).toEqual("VALID");
  });
  it("confirms 1306118605 is valid", () => {
    expect(method24("1306118605")).toEqual("VALID");
  });
  it("confirms 6000138301 is valid (special case, begins with 3-6)", () => {
    expect(method24("6000138301")).toEqual("VALID");
  });
  it("confirms 3307118608 is valid (special case, begins with 3-6)", () => {
    expect(method24("3307118608")).toEqual("VALID");
  });
  it("confirms 9990138301 is valid (special case, begins with 9)", () => {
    expect(method24("9990138301")).toEqual("VALID");
  });
  it("confirms 9307118603 is valid (special case, begins with 9)", () => {
    expect(method24("9307118603")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 128301 is invalid", () => {
    expect(method24("128301")).toEqual("INVALID");
  });
  it("confirms 1306118705 is invalid", () => {
    expect(method24("1306118705")).toEqual("INVALID");
  });
  it("confirms 6000139301 is invalid", () => {
    expect(method24("6000139301")).toEqual("INVALID");
  });
  it("confirms 3306118608 is invalid", () => {
    expect(method24("3306118608")).toEqual("INVALID");
  });
  it("confirms 9991138301 is invalid", () => {
    expect(method24("9991138301")).toEqual("INVALID");
  });
  it("confirms 9307118613 is invalid", () => {
    expect(method24("9307118613")).toEqual("INVALID");
  });
});
