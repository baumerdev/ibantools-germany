/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method56 from "../../../lib/methods/method56";

describe("method 56", () => {
  it("confirms 290545005 is valid", () => {
    expect(method56("290545005")).toEqual("VALID");
  });
  it("confirms 9234567877 is valid (calculated check digit is 7)", () => {
    expect(method56("9234567877")).toEqual("VALID");
  });
  it("confirms 9718304037 is valid (calculated check digit is 10, fallback 7)", () => {
    expect(method56("9718304037")).toEqual("VALID");
  });
  it("confirms 9234567818 is valid (calculated check digit is 8)", () => {
    expect(method56("9234567818")).toEqual("VALID");
  });
  it("confirms 9234567858 is valid (calculated check digit is 11, fallback 8)", () => {
    expect(method56("9234567858")).toEqual("VALID");
  });
  // Check for invalid result
  it("confirms 291545005 is invalid", () => {
    expect(method56("291545005")).toEqual("INVALID");
  });
  it("confirms 9244567877 is invalid", () => {
    expect(method56("9244567877")).toEqual("INVALID");
  });
  it("confirms 9719304037 is invalid", () => {
    expect(method56("9719304037")).toEqual("INVALID");
  });
  it("confirms 9234667818 is invalid", () => {
    expect(method56("9234667818")).toEqual("INVALID");
  });
  it("confirms 9234568858 is invalid", () => {
    expect(method56("9234568858")).toEqual("INVALID");
  });
  it("confirms 900000097 is invalid", () => {
    expect(method56("900000097")).toEqual("INVALID");
  });
  it("confirms 900000038 is invalid", () => {
    expect(method56("900000038")).toEqual("INVALID");
  });
});
