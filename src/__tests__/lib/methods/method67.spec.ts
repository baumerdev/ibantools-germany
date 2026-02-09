/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method67 from "../../../lib/methods/method67";

describe("method 67", () => {
  it("confirms 1234567490 is valid", () => {
    expect(method67("1234567490")).toEqual("VALID");
  });
  it("confirms 1234567400 is valid", () => {
    expect(method67("1234567400")).toEqual("VALID");
  });

  //  Check for invalid result
  it("confirms 1235567490 is invalid", () => {
    expect(method67("1235567490")).toEqual("INVALID");
  });
  it("confirms 1334567400 is invalid", () => {
    expect(method67("1334567400")).toEqual("INVALID");
  });
});
