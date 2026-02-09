/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method08 from "../../../lib/methods/method08";

describe("method 08", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method08("1234567897")).toEqual("VALID");
  });

  // Check for no check digit
  it("has no check digit calculation for 59999", () => {
    expect(method08("59999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 1235567897 is invalid", () => {
    expect(method08("1235567897")).toEqual("INVALID");
  });
});
