/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method07 from "../../../lib/methods/method07";

describe("method 07", () => {
  it("confirms 2234567890 is valid", () => {
    expect(method07("2234567890")).toEqual("VALID");
  });
  it("confirms 3234567890 is valid", () => {
    expect(method07("3234567891")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234567890 is invalid (two digit check digit)", () => {
    expect(method07("1234567890")).toEqual("INVALID");
  });
  it("confirms 3234567890 is invalid", () => {
    expect(method07("3234567890")).toEqual("INVALID");
  });
});
