/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method98 from "../../../lib/methods/method98";

describe("method 98", () => {
  it("confirms 9619439213 is valid", () => {
    expect(method98("9619439213")).toEqual("VALID");
  });
  it("confirms 9619509976 is valid", () => {
    expect(method98("9619509976")).toEqual("VALID");
  });
  it("confirms 9619319999 is valid", () => {
    expect(method98("9619319999")).toEqual("VALID");
  });
  it("confirms 3009800016 is valid", () => {
    expect(method98("3009800016")).toEqual("VALID");
  });
  it("confirms 5989800173 is valid", () => {
    expect(method98("5989800173")).toEqual("VALID");
  });
  it("confirms 6719430018 is valid", () => {
    expect(method98("6719430018")).toEqual("VALID");
  });
  it("confirms 9141405 is valid (fallback method 32)", () => {
    expect(method98("9141405")).toEqual("VALID");
  });
  it("confirms 1709107983 is valid (fallback method 32)", () => {
    expect(method98("1709107983")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9619438213 is invalid", () => {
    expect(method98("9619438213")).toEqual("INVALID");
  });
  it("confirms 9619508976 is invalid", () => {
    expect(method98("9619508976")).toEqual("INVALID");
  });
  it("confirms 9619329999 is invalid", () => {
    expect(method98("9619329999")).toEqual("INVALID");
  });
  it("confirms 9141415 is invalid", () => {
    expect(method98("9141415")).toEqual("INVALID");
  });
  it("confirms 1708107983 is invalid", () => {
    expect(method98("1708107983")).toEqual("INVALID");
  });
});
