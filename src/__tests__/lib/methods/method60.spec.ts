/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method60 from "../../../lib/methods/method60";

describe("method 60", () => {
  it("confirms 1234567891 is valid", () => {
    expect(method60("1234567891")).toEqual("VALID");
  });
  it("confirms 34567891 is valid", () => {
    expect(method60("34567891")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235567891 is invalid", () => {
    expect(method60("1235567891")).toEqual("INVALID");
  });
  it("confirms 34567881 is invalid", () => {
    expect(method60("34567881")).toEqual("INVALID");
  });
});
