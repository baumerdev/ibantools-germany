/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method75 from "../../../lib/methods/method75";

describe("method 75", () => {
  it("confirms 123455 is valid (6 digits)", () => {
    expect(method75("123455")).toEqual("VALID");
  });
  it("confirms 1234567 is valid (7 digits)", () => {
    expect(method75("1234567")).toEqual("VALID");
  });
  it("confirms 912345578 is valid (9 digits, starting with 9)", () => {
    expect(method75("912345578")).toEqual("VALID");
  });
  it("confirms 912345500 is valid (9 digits, starting with 9)", () => {
    expect(method75("912345500")).toEqual("VALID");
  });
  it("confirms 123455789 is valid (9 digits)", () => {
    expect(method75("123455789")).toEqual("VALID");
  });
  it("confirms 123455000 is valid (9 digits)", () => {
    expect(method75("123455000")).toEqual("VALID");
  });
  it("confirms 1234567890 is valid (10 digits)", () => {
    expect(method75("1234567890")).toEqual("VALID");
  });
  it("confirms 1234567000 is valid (10 digits)", () => {
    expect(method75("1234567000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123555 is invalid", () => {
    expect(method75("123555")).toEqual("INVALID");
  });
  it("confirms 1334567 is invalid", () => {
    expect(method75("1334567")).toEqual("INVALID");
  });
  it("confirms 912346578 is invalid", () => {
    expect(method75("912346578")).toEqual("INVALID");
  });
  it("confirms 912346500 is invalid", () => {
    expect(method75("912346500")).toEqual("INVALID");
  });
  it("confirms 223455789 is invalid", () => {
    expect(method75("223455789")).toEqual("INVALID");
  });
  it("confirms 223455000 is invalid", () => {
    expect(method75("223455000")).toEqual("INVALID");
  });
  it("confirms 1234577890 is invalid", () => {
    expect(method75("1234577890")).toEqual("INVALID");
  });
  it("confirms 1234577000 is invalid", () => {
    expect(method75("1234577000")).toEqual("INVALID");
  });
});
