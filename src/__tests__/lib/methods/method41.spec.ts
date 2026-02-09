/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method41 from "../../../lib/methods/method41";

describe("method 41", () => {
  it("confirms 4013410024 is valid", () => {
    expect(method41("4013410024")).toEqual("VALID");
  });
  it("confirms 4016660195 is valid", () => {
    expect(method41("4016660195")).toEqual("VALID");
  });
  it("confirms 0166805317 is valid", () => {
    expect(method41("0166805317")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid", () => {
    expect(method41("1234567897")).toEqual("VALID");
  });
  it("confirms 4019310079 is valid (ignore digits 1-3)", () => {
    expect(method41("4019310079")).toEqual("VALID");
  });
  it("confirms 4019340829 is valid (ignore digits 1-3)", () => {
    expect(method41("4019340829")).toEqual("VALID");
  });
  it("confirms 4019151002 is valid (ignore digits 1-3)", () => {
    expect(method41("4019151002")).toEqual("VALID");
  });
  it("confirms 1239567892 is valid (ignore digits 1-3)", () => {
    expect(method41("1239567892")).toEqual("VALID");
  });
  it("confirms 9999567892 is valid (ignore digits 1-3)", () => {
    expect(method41("9999567892")).toEqual("VALID");
  });

  // // Check for invalid result
  it("confirms 4014410024 is invalid", () => {
    expect(method41("4014410024")).toEqual("INVALID");
  });
  it("confirms 4026660195 is invalid", () => {
    expect(method41("4026660195")).toEqual("INVALID");
  });
  it("confirms 0166815317 is invalid", () => {
    expect(method41("0166815317")).toEqual("INVALID");
  });
  it("confirms 1244567897 is invalid", () => {
    expect(method41("1244567897")).toEqual("INVALID");
  });
  it("confirms 4019310179 is invalid", () => {
    expect(method41("4019310179")).toEqual("INVALID");
  });
  it("confirms 4019350829 is invalid", () => {
    expect(method41("4019350829")).toEqual("INVALID");
  });
  it("confirms 4019251002 is invalid", () => {
    expect(method41("4019251002")).toEqual("INVALID");
  });
  it("confirms 1239577892 is invalid", () => {
    expect(method41("1239577892")).toEqual("INVALID");
  });
  it("confirms 9999567802 is invalid", () => {
    expect(method41("9999567802")).toEqual("INVALID");
  });
});
