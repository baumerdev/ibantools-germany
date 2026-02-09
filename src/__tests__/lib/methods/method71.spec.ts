/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method71 from "../../../lib/methods/method71";

describe("method 71", () => {
  it("confirms 7101234007 is valid", () => {
    expect(method71("7101234007")).toEqual("VALID");
  });
  it("confirms 0246786040 is valid (no remainder)", () => {
    expect(method71("0246786040")).toEqual("VALID");
  });
  it("confirms 0446786041 is valid (remainder 1)", () => {
    expect(method71("0446786041")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 7101235007 is invalid", () => {
    expect(method71("7101235007")).toEqual("INVALID");
  });
  it("confirms 0246886040 is invalid", () => {
    expect(method71("0246886040")).toEqual("INVALID");
  });
  it("confirms 0346786041 is invalid", () => {
    expect(method71("0346786041")).toEqual("INVALID");
  });
});
