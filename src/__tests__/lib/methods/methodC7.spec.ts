/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC7 from "../../../lib/methods/methodC7";

describe("method C7", () => {
  it("confirms 3500022 is valid (variation 1)", () => {
    expect(methodC7("3500022")).toEqual("VALID");
  });
  it("confirms 38150900 is valid (variation 1)", () => {
    expect(methodC7("38150900")).toEqual("VALID");
  });
  it("confirms 600103660 is valid (variation 1)", () => {
    expect(methodC7("600103660")).toEqual("VALID");
  });
  it("confirms 39101181 is valid (variation 1)", () => {
    expect(methodC7("39101181")).toEqual("VALID");
  });
  it("confirms 94012341 is valid (variation 2)", () => {
    expect(methodC7("94012341")).toEqual("VALID");
  });
  it("confirms 5073321010 is valid (variation 2)", () => {
    expect(methodC7("5073321010")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3500042 is invalid", () => {
    expect(methodC7("3500042")).toEqual("INVALID");
  });
  it("confirms 1234517892 is invalid", () => {
    expect(methodC7("1234517892")).toEqual("INVALID");
  });
  it("confirms 987614325 is invalid", () => {
    expect(methodC7("987614325")).toEqual("INVALID");
  });
});
