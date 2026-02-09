/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method30 from "../../../lib/methods/method30";

describe("method 30", () => {
  it("confirms 1234567892 is valid", () => {
    expect(method30("1234567892")).toEqual("VALID");
  });
  it("confirms 1230 is valid", () => {
    expect(method30("1230")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 2234567892 is invalid", () => {
    expect(method30("2234567892")).toEqual("INVALID");
  });
  it("confirms 1240 is invalid", () => {
    expect(method30("1240")).toEqual("INVALID");
  });
});
