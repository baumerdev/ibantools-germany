/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method63 from "../../../lib/methods/method63";

describe("method 63", () => {
  it("confirms 123456600 is valid", () => {
    expect(method63("123456600")).toEqual("VALID");
  });
  it("confirms 1234566 is valid", () => {
    expect(method63("1234566")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123466600 is invalid", () => {
    expect(method63("123466600")).toEqual("INVALID");
  });
  it("confirms 1244566 is invalid", () => {
    expect(method63("1244566")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method63("1234567890")).toEqual("INVALID");
  });
});
