/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method01 from "../../../lib/methods/method01";

describe("method 01", () => {
  it("confirms 1234567899 is valid", () => {
    expect(method01("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1244567899 is invalid", () => {
    expect(method01("1244567899")).toEqual("INVALID");
  });
});
