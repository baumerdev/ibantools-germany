/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method18 from "../../../lib/methods/method18";

describe("method 18", () => {
  it("confirms 1234567899 is valid", () => {
    expect(method18("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234557899 is invalid", () => {
    expect(method18("1234557899")).toEqual("INVALID");
  });
});
