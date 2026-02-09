/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method84 from "../../../lib/methods/method84";

describe("method 84", () => {
  it("confirms 240699 is valid (variation 1)", () => {
    expect(method84("240699")).toEqual("VALID");
  });
  it("confirms 350982 is valid (variation 1)", () => {
    expect(method84("350982")).toEqual("VALID");
  });
  it("confirms 461059 is valid (variation 1)", () => {
    expect(method84("461059")).toEqual("VALID");
  });
  it("confirms 240692 is valid (variation 2)", () => {
    expect(method84("240692")).toEqual("VALID");
  });
  it("confirms 350985 is valid (variation 2)", () => {
    expect(method84("350985")).toEqual("VALID");
  });
  it("confirms 461052 is valid (variation 2)", () => {
    expect(method84("461052")).toEqual("VALID");
  });
  it("confirms 240961 is valid (variation 3)", () => {
    expect(method84("240961")).toEqual("VALID");
  });
  it("confirms 350984 is valid (variation 3)", () => {
    expect(method84("350984")).toEqual("VALID");
  });
  it("confirms 461054 is valid (variation 3)", () => {
    expect(method84("461054")).toEqual("VALID");
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(method84("0199100002")).toEqual("VALID");
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(method84("0099100010")).toEqual("VALID");
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(method84("2599100002")).toEqual("VALID");
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(method84("0199100004")).toEqual("VALID");
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(method84("2599100003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 240965 is invalid", () => {
    expect(method84("240965")).toEqual("INVALID");
  });
  it("confirms 350980 is invalid", () => {
    expect(method84("350980")).toEqual("INVALID");
  });
  it("confirms 461053 is invalid", () => {
    expect(method84("461053")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method84("1234567890")).toEqual("INVALID");
  });
});
