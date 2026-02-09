/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method76 from "../../../lib/methods/method76";

describe("method 76", () => {
  it("confirms 12345600 is valid", () => {
    expect(method76("12345600")).toEqual("VALID");
  });
  it("confirms 0006543200 is valid", () => {
    expect(method76("0006543200")).toEqual("VALID");
  });
  it("confirms 9012345600 is valid", () => {
    expect(method76("9012345600")).toEqual("VALID");
  });
  it("confirms 90123456 is valid", () => {
    expect(method76("90123456")).toEqual("VALID");
  });
  it("confirms 7876543100 is valid", () => {
    expect(method76("7876543100")).toEqual("VALID");
  });
  it("confirms 78765431 is valid", () => {
    expect(method76("78765431")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 12344600 is invalid", () => {
    expect(method76("12344600")).toEqual("INVALID");
  });
  it("confirms 0006543300 is invalid", () => {
    expect(method76("0006543300")).toEqual("INVALID");
  });
  it("confirms 9112345600 is invalid", () => {
    expect(method76("9112345600")).toEqual("INVALID");
  });
  it("confirms 90223466 is invalid", () => {
    expect(method76("90223466")).toEqual("INVALID");
  });
  it("confirms 7876542100 is invalid", () => {
    expect(method76("7876542100")).toEqual("INVALID");
  });
  it("confirms 78865431 is invalid", () => {
    expect(method76("78865431")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method76("1234567890")).toEqual("INVALID");
  });
});
