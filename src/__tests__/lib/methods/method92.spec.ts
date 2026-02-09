/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method92 from "../../../lib/methods/method92";

describe("method 92", () => {
  it("confirms 1234567893 is valid", () => {
    expect(method92("1234567893")).toEqual("VALID");
  });
  it("confirms 4567893 is valid", () => {
    expect(method92("4567893")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235567893 is invalid", () => {
    expect(method92("1235567893")).toEqual("INVALID");
  });
});
