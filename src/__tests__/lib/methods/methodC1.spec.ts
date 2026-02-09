/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC1 from "../../../lib/methods/methodC1";

describe("method C1", () => {
  it("confirms 0446786040 is valid (variation 1)", () => {
    expect(methodC1("0446786040")).toEqual("VALID");
  });
  it("confirms 0478046940 is valid (variation 1)", () => {
    expect(methodC1("0478046940")).toEqual("VALID");
  });
  it("confirms 0701625830 is valid (variation 1)", () => {
    expect(methodC1("0701625830")).toEqual("VALID");
  });
  it("confirms 0701625840 is valid (variation 1)", () => {
    expect(methodC1("0701625840")).toEqual("VALID");
  });
  it("confirms 0882095630 is valid (variation 1)", () => {
    expect(methodC1("0882095630")).toEqual("VALID");
  });
  it("confirms 5432112349 is valid (variation 2)", () => {
    expect(methodC1("5432112349")).toEqual("VALID");
  });
  it("confirms 5543223456 is valid (variation 2)", () => {
    expect(methodC1("5543223456")).toEqual("VALID");
  });
  it("confirms 5654334563 is valid (variation 2)", () => {
    expect(methodC1("5654334563")).toEqual("VALID");
  });
  it("confirms 5765445670 is valid (variation 2)", () => {
    expect(methodC1("5765445670")).toEqual("VALID");
  });
  it("confirms 5876556788 is valid (variation 2)", () => {
    expect(methodC1("5876556788")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1000000111 is invalid", () => {
    expect(methodC1("1000000111")).toEqual("INVALID");
  });
  it("confirms 9635100101 is invalid", () => {
    expect(methodC1("9635100101")).toEqual("INVALID");
  });
  it("confirms 9730300100 is invalid", () => {
    expect(methodC1("9730300100")).toEqual("INVALID");
  });
  it("confirms 5876556789 is invalid", () => {
    expect(methodC1("5876556789")).toEqual("INVALID");
  });
});
