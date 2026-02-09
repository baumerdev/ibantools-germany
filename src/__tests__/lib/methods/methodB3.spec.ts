/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB3 from "../../../lib/methods/methodB3";

describe("method B3", () => {
  it("confirms 1000000060 is valid (variation 1)", () => {
    expect(methodB3("1000000060")).toEqual("VALID");
  });
  it("confirms 0000000140 is valid (variation 1)", () => {
    expect(methodB3("0000000140")).toEqual("VALID");
  });
  it("confirms 0000000019 is valid (variation 1)", () => {
    expect(methodB3("0000000019")).toEqual("VALID");
  });
  it("confirms 1002798417 is valid (variation 1)", () => {
    expect(methodB3("1002798417")).toEqual("VALID");
  });
  it("confirms 8409915001 is valid (variation 1)", () => {
    expect(methodB3("8409915001")).toEqual("VALID");
  });
  it("confirms 9635000101 is valid (variation 2)", () => {
    expect(methodB3("9635000101")).toEqual("VALID");
  });
  it("confirms 9730200100 is valid (variation 2)", () => {
    expect(methodB3("9730200100")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0002799899 is invalid", () => {
    expect(methodB3("0002799899")).toEqual("INVALID");
  });
  it("confirms 1000000111 is invalid", () => {
    expect(methodB3("1000000111")).toEqual("INVALID");
  });
  it("confirms 9635100101 is invalid", () => {
    expect(methodB3("9635100101")).toEqual("INVALID");
  });
  it("confirms 9730300100 is invalid", () => {
    expect(methodB3("9730300100")).toEqual("INVALID");
  });
});
