/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method33, { method33Core } from "../../../lib/methods/method33";

describe("method 33", () => {
  it("confirms 48658 is valid", () => {
    expect(method33("48658")).toEqual("VALID");
  });
  it("confirms 84956 is valid", () => {
    expect(method33("84956")).toEqual("VALID");
  });
  it("confirms 1234567892 is valid", () => {
    expect(method33("1234567892")).toEqual("VALID");
  });
  it("confirms 0000567892 is valid", () => {
    expect(method33("0000567892")).toEqual("VALID");
  });
  it("confirms 1234567807 is valid (special case for method 51 D)", () => {
    expect(method33Core("1234567807", [2, 3, 4, 5, 6], 7)).toEqual("VALID");
  });
  it("confirms 1234567800 is valid (special case for method 51 D)", () => {
    expect(method33Core("1234567800", [2, 3, 4, 5, 6], 7, 0)).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 48758 is invalid", () => {
    expect(method33("48758")).toEqual("INVALID");
  });
  it("confirms 94956 is invalid", () => {
    expect(method33("94956")).toEqual("INVALID");
  });
  it("confirms 1234568892 is invalid", () => {
    expect(method33("1234568892")).toEqual("INVALID");
  });
  it("confirms 0000566892 is invalid", () => {
    expect(method33("0000566892")).toEqual("INVALID");
  });
  it("confirms 1234567800 is invalid (special case for method 51 D)", () => {
    expect(method33Core("1234567800", [2, 3, 4, 5, 6], 7)).toEqual("INVALID");
  });
  it("confirms 1234567807 is invalid (special case for method 51 D)", () => {
    expect(method33Core("1234567807", [2, 3, 4, 5, 6], 7, 0)).toEqual(
      "INVALID",
    );
  });
});
