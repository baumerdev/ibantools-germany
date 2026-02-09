/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method46 from "../../../lib/methods/method46";

describe("method 46", () => {
  it("confirms 0235468612 is valid", () => {
    expect(method46("0235468612")).toEqual("VALID");
  });
  it("confirms 0837890901 is valid", () => {
    expect(method46("0837890901")).toEqual("VALID");
  });
  it("confirms 1041447600 is valid", () => {
    expect(method46("1041447600")).toEqual("VALID");
  });
  it("confirms 1234567990 is valid", () => {
    expect(method46("1234567990")).toEqual("VALID");
  });
  it("confirms 1234567900 is valid", () => {
    expect(method46("1234567900")).toEqual("VALID");
  });
  it("confirms 34567990 is valid", () => {
    expect(method46("34567990")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0235568612 is invalid", () => {
    expect(method46("0235568612")).toEqual("INVALID");
  });
  it("confirms 0837891901 is invalid", () => {
    expect(method46("0837891901")).toEqual("INVALID");
  });
  it("confirms 1042447600 is invalid", () => {
    expect(method46("1042447600")).toEqual("INVALID");
  });
  it("confirms 1234667990 is invalid", () => {
    expect(method46("1234667990")).toEqual("INVALID");
  });
  it("confirms 1234577900 is invalid", () => {
    expect(method46("1234577900")).toEqual("INVALID");
  });
  it("confirms 34568990 is invalid", () => {
    expect(method46("34568990")).toEqual("INVALID");
  });
});
