/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method14 from "../../../lib/methods/method14";

describe("method 14", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method14("1234567897")).toEqual("VALID");
  });
  it("confirms 9994567897 is valid", () => {
    expect(method14("9994567897")).toEqual("VALID");
  });
  it("confirms 4567897 is valid", () => {
    expect(method14("4567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235567897 is invalid", () => {
    expect(method14("1235567897")).toEqual("INVALID");
  });
  it("confirms 9994667897 is invalid", () => {
    expect(method14("9994667897")).toEqual("INVALID");
  });
  it("confirms 4577897 is invalid", () => {
    expect(method14("4577897")).toEqual("INVALID");
  });
});
