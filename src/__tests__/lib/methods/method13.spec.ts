/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method13 from "../../../lib/methods/method13";

describe("method 13", () => {
  it("confirms 12345676 is valid", () => {
    expect(method13("12345676")).toEqual("VALID");
  });
  it("confirms 1234567600 is valid", () => {
    expect(method13("1234567600")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 12355676 is invalid", () => {
    expect(method13("12355676")).toEqual("INVALID");
  });
  it("confirms 1244567600 is invalid", () => {
    expect(method13("1244567600")).toEqual("INVALID");
  });
});
