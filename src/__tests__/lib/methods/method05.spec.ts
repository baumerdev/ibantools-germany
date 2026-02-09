/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method05 from "../../../lib/methods/method05";

describe("method 05", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method05("1234567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234667897 is invalid", () => {
    expect(method05("1234667897")).toEqual("INVALID");
  });
});
