/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB6 from "../../../lib/methods/methodB6";

describe("method B6", () => {
  it("confirms 9110000000 is valid (variation 1)", () => {
    expect(methodB6("9110000000", "00000000")).toEqual("VALID");
  });
  it("confirms 0269876545 is valid (variation 1)", () => {
    expect(methodB6("0269876545", "00000000")).toEqual("VALID");
  });
  it("confirms 487310018 with BLZ 80053782 is valid (variation 2)", () => {
    expect(methodB6("487310018", "80053782")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9111000000 is invalid (variation 1)", () => {
    expect(methodB6("9111000000", "00000000")).toEqual("INVALID");
  });
  it("confirms 0269456780 is invalid (variation 1)", () => {
    expect(methodB6("0269456780", "00000000")).toEqual("INVALID");
  });
  it("confirms 467310018 with BLZ 80053762 is invalid (variation 2)", () => {
    expect(methodB6("467310018", "80053762")).toEqual("INVALID");
  });
  it("confirms 477310018 with BLZ 80053772 is invalid (variation 2)", () => {
    expect(methodB6("477310018", "80053772")).toEqual("INVALID");
  });
});
