/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method02 from "../../../lib/methods/method02";

describe("method 02", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method02("1234567897")).toEqual("VALID");
  });
  it("confirms 5834567890 is valid", () => {
    expect(method02("5834567890")).toEqual("VALID");
  });

  // Check for invalid results
  it("confirms 5234567890 is invalid (two digit check digit)", () => {
    expect(method02("5234567890")).toEqual("INVALID");
  });
  it("confirms 1234667897 is invalid", () => {
    expect(method02("1234667897")).toEqual("INVALID");
  });
});
