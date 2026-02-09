/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method04 from "../../../lib/methods/method04";

describe("method 04", () => {
  it("confirms 1234567892 is valid", () => {
    expect(method04("1234567892")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234577892 is invalid", () => {
    expect(method04("1234577892")).toEqual("INVALID");
  });
});
