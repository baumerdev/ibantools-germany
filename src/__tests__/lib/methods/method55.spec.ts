/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method55 from "../../../lib/methods/method55";

describe("method 55", () => {
  it("confirms 1234567895 is valid", () => {
    expect(method55("1234567895")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234667895 is invalid", () => {
    expect(method55("1234667895")).toEqual("INVALID");
  });
});
