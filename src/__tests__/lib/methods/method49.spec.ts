/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method49 from "../../../lib/methods/method49";

describe("method 49", () => {
  it("confirms 1234567897 is valid (method 00)", () => {
    expect(method49("1234567897")).toEqual("VALID");
  });
  it("confirms 1234567899 is valid (method 01)", () => {
    expect(method49("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1244567899 is invalid", () => {
    expect(method49("1244567899")).toEqual("INVALID");
  });
  it("confirms 1244567899 is invalid", () => {
    expect(method49("1244567899")).toEqual("INVALID");
  });
});
