/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method99 from "../../../lib/methods/method99";

describe("method 99", () => {
  it("confirms 0068007003 is valid", () => {
    expect(method99("0068007003")).toEqual("VALID");
  });
  it("confirms 0847321750 is valid", () => {
    expect(method99("0847321750")).toEqual("VALID");
  });
  it("has no check digit calculation for 0396000000", () => {
    expect(method99("0396000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0499999999", () => {
    expect(method99("0499999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 0068008003 is invalid", () => {
    expect(method99("0068008003")).toEqual("INVALID");
  });
  it("confirms 0847221750 is invalid", () => {
    expect(method99("0847221750")).toEqual("INVALID");
  });
  it("confirms 0395999999 is invalid", () => {
    expect(method99("0395999999")).toEqual("INVALID");
  });
  it("confirms 500000000 is invalid", () => {
    expect(method99("500000000")).toEqual("INVALID");
  });
});
