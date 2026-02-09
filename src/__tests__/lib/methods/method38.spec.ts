/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method38 from "../../../lib/methods/method38";

describe("method 38", () => {
  it("confirms 191919 is valid", () => {
    expect(method38("191919")).toEqual("VALID");
  });
  it("confirms 1100660 is valid", () => {
    expect(method38("1100660")).toEqual("VALID");
  });
  it("confirms 1234567899 is valid", () => {
    expect(method38("1234567899")).toEqual("VALID");
  });
  it("confirms 4567899 is valid", () => {
    expect(method38("4567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 192919 is invalid", () => {
    expect(method38("192919")).toEqual("INVALID");
  });
  it("confirms 1101660 is invalid", () => {
    expect(method38("1101660")).toEqual("INVALID");
  });
  it("confirms 1234568899 is invalid", () => {
    expect(method38("1234568899")).toEqual("INVALID");
  });
  it("confirms 5567899 is invalid", () => {
    expect(method38("5567899")).toEqual("INVALID");
  });
});
