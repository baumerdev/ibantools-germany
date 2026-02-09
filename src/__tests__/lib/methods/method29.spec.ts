/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method29 from "../../../lib/methods/method29";

describe("method 29", () => {
  it("confirms 3145863029 is valid", () => {
    expect(method29("3145863029")).toEqual("VALID");
  });
  it("confirms 1234567895 is valid", () => {
    expect(method29("1234567895")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3145763029 is invalid", () => {
    expect(method29("3145763029")).toEqual("INVALID");
  });
  it("confirms 1235567895 is invalid", () => {
    expect(method29("1235567895")).toEqual("INVALID");
  });
});
