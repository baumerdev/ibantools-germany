/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA8 from "../../../lib/methods/methodA8";

describe("method A8", () => {
  it("confirms 7436661 is valid (variation 1)", () => {
    expect(methodA8("7436661")).toEqual("VALID");
  });
  it("confirms 7436670 is valid (variation 1)", () => {
    expect(methodA8("7436670")).toEqual("VALID");
  });
  it("confirms 1359100 is valid (variation 1)", () => {
    expect(methodA8("1359100")).toEqual("VALID");
  });
  it("confirms 7436660 is valid (variation 2)", () => {
    expect(methodA8("7436660")).toEqual("VALID");
  });
  it("confirms 7436678 is valid (variation 2)", () => {
    expect(methodA8("7436678")).toEqual("VALID");
  });
  it("confirms 0003503398 is valid (variation 2)", () => {
    expect(methodA8("0003503398")).toEqual("VALID");
  });
  it("confirms 0001340967 is valid (variation 2)", () => {
    expect(methodA8("0001340967")).toEqual("VALID");
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(methodA8("0199100002")).toEqual("VALID");
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(methodA8("0099100010")).toEqual("VALID");
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(methodA8("2599100002")).toEqual("VALID");
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(methodA8("0199100004")).toEqual("VALID");
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(methodA8("2599100003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 7436666 is invalid", () => {
    expect(methodA8("7436666")).toEqual("INVALID");
  });
  it("confirms 7436677 is invalid", () => {
    expect(methodA8("7436677")).toEqual("INVALID");
  });
  it("confirms 0003503391 is invalid", () => {
    expect(methodA8("0003503391")).toEqual("INVALID");
  });
  it("confirms 0001340966 is invalid", () => {
    expect(methodA8("0001340966")).toEqual("INVALID");
  });
});
