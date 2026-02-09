/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method17 from "../../../lib/methods/method17";

describe("method 17", () => {
  it("confirms 1234563811 is valid", () => {
    expect(method17("1234567990")).toEqual("VALID");
  });
  it("confirms 0446786040 is valid (remainder 0)", () => {
    expect(method17("0446786040")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235563811 is invalid", () => {
    expect(method17("1235567990")).toEqual("INVALID");
  });
  it("confirms 0446886040 is invalid", () => {
    expect(method17("0446886040")).toEqual("INVALID");
  });
});
