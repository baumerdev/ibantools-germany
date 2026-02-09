/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method93 from "../../../lib/methods/method93";

describe("method 93", () => {
  it("confirms 6714790000 is valid (modulo 11)", () => {
    expect(method93("6714790000")).toEqual("VALID");
  });
  it("confirms 0000671479 is valid (modulo 11)", () => {
    expect(method93("0000671479")).toEqual("VALID");
  });
  it("confirms 1277830000 is valid (modulo 7)", () => {
    expect(method93("1277830000")).toEqual("VALID");
  });
  it("confirms 0000127783 is valid (modulo 7)", () => {
    expect(method93("0000127783")).toEqual("VALID");
  });
  it("confirms 1277910000 is valid (modulo 7)", () => {
    expect(method93("1277910000")).toEqual("VALID");
  });
  it("confirms 0000127791 is valid (modulo 7)", () => {
    expect(method93("0000127791")).toEqual("VALID");
  });
  it("confirms 3067540000 is valid (modulo 7 and 11)", () => {
    expect(method93("3067540000")).toEqual("VALID");
  });
  it("confirms 0000306754 is valid (modulo 7 and 11)", () => {
    expect(method93("0000306754")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6714790010 is invalid", () => {
    expect(method93("671479010")).toEqual("INVALID");
  });
  it("confirms 0000671579 is invalid", () => {
    expect(method93("0000671579")).toEqual("INVALID");
  });
  it("confirms 1277840000 is invalid", () => {
    expect(method93("1277840000")).toEqual("INVALID");
  });
  it("confirms 0100127783 is invalid", () => {
    expect(method93("0100127783")).toEqual("INVALID");
  });
});
