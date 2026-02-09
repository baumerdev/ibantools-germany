/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method20 from "../../../lib/methods/method20";

describe("method 20", () => {
  it("confirms 1234567890 is valid", () => {
    expect(method20("1234567896")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1244567890 is invalid", () => {
    expect(method20("1244567890")).toEqual("INVALID");
  });
});
