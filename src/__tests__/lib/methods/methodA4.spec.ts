/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA4 from "../../../lib/methods/methodA4";

describe("method A4", () => {
  it("confirms 0004711173 is valid (variation 1)", () => {
    expect(methodA4("0004711173")).toEqual("VALID");
  });
  it("confirms 0007093330 is valid (variation 1)", () => {
    expect(methodA4("0007093330")).toEqual("VALID");
  });
  it("confirms 0004711172 is valid (variation 2)", () => {
    expect(methodA4("0004711172")).toEqual("VALID");
  });
  it("confirms 0007093335 is valid (variation 2)", () => {
    expect(methodA4("0007093335")).toEqual("VALID");
  });
  it("confirms 1234567800 is valid (variation 2)", () => {
    expect(methodA4("1234567800")).toEqual("VALID");
  });
  it("confirms 1199503010 is valid (variation 3)", () => {
    expect(methodA4("1199503010")).toEqual("VALID");
  });
  it("confirms 8499421235 is valid (variation 3)", () => {
    expect(methodA4("8499421235")).toEqual("VALID");
  });
  it("confirms 0000862342 is valid (variation 4, modulo 7)", () => {
    expect(methodA4("0000862342")).toEqual("VALID");
  });
  it("confirms 8997710000 is valid (variation 4, modulo 7)", () => {
    expect(methodA4("8997710000")).toEqual("VALID");
  });
  it("confirms 0000905844 is valid (variation 4, modulo 11)", () => {
    expect(methodA4("0000905844")).toEqual("VALID");
  });
  it("confirms 5030101099 is valid (variation 4, modulo 11)", () => {
    expect(methodA4("5030101099")).toEqual("VALID");
  });
  it("confirms 0001123458 is valid (variation 4)", () => {
    expect(methodA4("0001123458")).toEqual("VALID");
  });
  it("confirms 1299503117 is valid (variation 4)", () => {
    expect(methodA4("1299503117")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0004711173 is invalid", () => {
    expect(methodA4("0004711183")).toEqual("INVALID");
  });
  it("confirms 0004811172 is invalid", () => {
    expect(methodA4("0004811172")).toEqual("INVALID");
  });
  it("confirms 8499423235 is invalid", () => {
    expect(methodA4("8499423235")).toEqual("INVALID");
  });
  it("confirms 0001223458 is invalid", () => {
    expect(methodA4("0001223458")).toEqual("INVALID");
  });
});
