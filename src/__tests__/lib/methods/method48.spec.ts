/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method48 from "../../../lib/methods/method48";

describe("method 48", () => {
  it("confirms 1234567810 is valid", () => {
    expect(method48("1234567810")).toEqual("VALID");
  });
  it("confirms 1234567819 is valid", () => {
    expect(method48("1234567819")).toEqual("VALID");
  });
  it("confirms 34567810 is valid", () => {
    expect(method48("34567810")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235567810 is invalid", () => {
    expect(method48("1235567810")).toEqual("INVALID");
  });
  it("confirms 1234667819 is invalid", () => {
    expect(method48("1234667819")).toEqual("INVALID");
  });
  it("confirms 34577810 is invalid", () => {
    expect(method48("34577810")).toEqual("INVALID");
  });
});
