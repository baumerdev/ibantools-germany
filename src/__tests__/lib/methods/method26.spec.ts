/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method26 from "../../../lib/methods/method26";

describe("method 26", () => {
  it("confirms 0520309001 is valid", () => {
    expect(method26("0520309001")).toEqual("VALID");
  });
  it("confirms 1111118111 is valid", () => {
    expect(method26("1111118111")).toEqual("VALID");
  });
  it("confirms 0005501024 is valid", () => {
    expect(method26("0005501024")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0520319001 is invalid", () => {
    expect(method26("0520319001")).toEqual("INVALID");
  });
  it("confirms 1121118111 is invalid", () => {
    expect(method26("1121118111")).toEqual("INVALID");
  });
  it("confirms 1005501024 is invalid", () => {
    expect(method26("1005501024")).toEqual("INVALID");
  });
});
