/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method81 from "../../../lib/methods/method81";

describe("method 81", () => {
  it("confirms 0646440 is valid", () => {
    expect(method81("0646440")).toEqual("VALID");
  });
  it("confirms 1359100 is valid", () => {
    expect(method81("1359100")).toEqual("VALID");
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(method81("0199100002")).toEqual("VALID");
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(method81("0099100010")).toEqual("VALID");
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(method81("2599100002")).toEqual("VALID");
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(method81("0199100004")).toEqual("VALID");
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(method81("2599100003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0647440 is invalid", () => {
    expect(method81("0647440")).toEqual("INVALID");
  });
  it("confirms 1259100 is invalid", () => {
    expect(method81("1259100")).toEqual("INVALID");
  });
});
