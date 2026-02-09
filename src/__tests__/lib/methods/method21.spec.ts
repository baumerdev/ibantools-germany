/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method21 from "../../../lib/methods/method21";

describe("method 21", () => {
  it("confirms 1234567893 is valid", () => {
    expect(method21("1234567893")).toEqual("VALID");
  });
  it("confirms 9290708 is valid", () => {
    expect(method21("9290708")).toEqual("VALID");
  });
  it("confirms 2345678909 is valid", () => {
    expect(method21("2345678909")).toEqual("VALID");
  });
  it("confirms 5678901237 is valid", () => {
    expect(method21("5678901237")).toEqual("VALID");
  });

  // // Check for invalid result
  it("confirms 1234467893 is invalid", () => {
    expect(method21("1234467893")).toEqual("INVALID");
  });
});
