/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method22 from "../../../lib/methods/method22";

describe("method 22", () => {
  it("confirms 1234567895 is valid", () => {
    expect(method22("1234567895")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1233567890 is invalid", () => {
    expect(method22("1233567890")).toEqual("INVALID");
  });
});
