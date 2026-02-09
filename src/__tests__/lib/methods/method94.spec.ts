/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method94 from "../../../lib/methods/method94";

describe("method 94", () => {
  it("confirms 6782533003 is valid", () => {
    expect(method94("6782533003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6782633003 is invalid", () => {
    expect(method94("6782633003")).toEqual("INVALID");
  });
});
