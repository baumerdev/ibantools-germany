/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD2 from "../../../lib/methods/methodD2";

describe("method D2", () => {
  it("confirms 189912137 is valid (variation 1)", () => {
    expect(methodD2("189912137")).toEqual("VALID");
  });
  it("confirms 235308215 is valid (variation 1)", () => {
    expect(methodD2("235308215")).toEqual("VALID");
  });
  it("confirms 4455667784 is valid (variation 2)", () => {
    expect(methodD2("4455667784")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid (variation 2)", () => {
    expect(methodD2("1234567897")).toEqual("VALID");
  });
  it("confirms 51181008 is valid (variation 3)", () => {
    expect(methodD2("51181008")).toEqual("VALID");
  });
  it("confirms 71214205 is valid (variation 3)", () => {
    expect(methodD2("71214205")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6414241 is invalid", () => {
    expect(methodD2("6414241")).toEqual("INVALID");
  });
  it("confirms 179751314 is invalid", () => {
    expect(methodD2("179751314")).toEqual("INVALID");
  });
  it("confirms 6414241 is invalid", () => {
    expect(methodD2("6414241")).toEqual("INVALID");
  });
  it("confirms 179751314 is invalid", () => {
    expect(methodD2("179751314")).toEqual("INVALID");
  });
  it("confirms 6414241 is invalid", () => {
    expect(methodD2("6414241")).toEqual("INVALID");
  });
  it("confirms 179751314 is invalid", () => {
    expect(methodD2("179751314")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodD2("1234567890")).toEqual("INVALID");
  });
});
