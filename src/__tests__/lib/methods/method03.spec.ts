/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method03 from "../../../lib/methods/method03";

describe("method 03", () => {
  it("confirms 1234567890 is valid", () => {
    expect(method03("1234567890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235567890 is invalid", () => {
    expect(method03("1235567890")).toEqual("INVALID");
  });
});
