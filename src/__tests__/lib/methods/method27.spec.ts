/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method27 from "../../../lib/methods/method27";

describe("method 27", () => {
  it("confirms 9290701 is valid (like 00)", () => {
    expect(method27("9290701")).toEqual("VALID");
  });
  it("confirms 2847169488 is valid (M10H)", () => {
    expect(method27("2847169488")).toEqual("VALID");
  });
  it("confirms 2847169400 is valid (M10H)", () => {
    expect(method27("2847169400")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9291701 is invalid", () => {
    expect(method27("9291701")).toEqual("INVALID");
  });
  it("confirms 2837169488 is invalid", () => {
    expect(method27("2837169488")).toEqual("INVALID");
  });
});
