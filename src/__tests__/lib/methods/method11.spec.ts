/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method11 from "../../../lib/methods/method11";

describe("method 11", () => {
  it("confirms 3234567891 is valid", () => {
    expect(method11("3234567891")).toEqual("VALID");
  });
  it("confirms 2234567890 is valid", () => {
    expect(method11("2234567890")).toEqual("VALID");
  });
  it("confirms 1234567899 is valid", () => {
    expect(method11("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3234667891 is invalid", () => {
    expect(method11("3234667891")).toEqual("INVALID");
  });
  it("confirms 2235567890 is invalid", () => {
    expect(method11("2235567890")).toEqual("INVALID");
  });
  it("confirms 1244567899 is invalid", () => {
    expect(method11("1244567899")).toEqual("INVALID");
  });
});
