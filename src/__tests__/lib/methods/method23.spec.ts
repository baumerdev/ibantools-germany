/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method23 from "../../../lib/methods/method23";

describe("method 23", () => {
  it("confirms 1234560890 is valid", () => {
    expect(method23("1234560890")).toEqual("VALID");
  });
  it("confirms 1237551890 is valid (special, remainder 1)", () => {
    expect(method23("1237551890")).toEqual("VALID");
  });
  it("confirms 1234501890 is valid (default, remainder 1)", () => {
    expect(method23("1234501890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1334560890 is invalid", () => {
    expect(method23("1334560890")).toEqual("INVALID");
  });
  it("confirms 1247551890 is invalid", () => {
    expect(method23("1247551890")).toEqual("INVALID");
  });
  it("confirms 1235501890 is invalid", () => {
    expect(method23("1235501890")).toEqual("INVALID");
  });
});
