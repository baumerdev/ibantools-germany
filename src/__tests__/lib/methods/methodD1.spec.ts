/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD1 from "../../../lib/methods/methodD1";

describe("method D1", () => {
  it("confirms 0082012203 is valid", () => {
    expect(methodD1("0082012203")).toEqual("VALID");
  });
  it("confirms 1452683581 is valid", () => {
    expect(methodD1("1452683581")).toEqual("VALID");
  });
  it("confirms 2129642505 is valid", () => {
    expect(methodD1("2129642505")).toEqual("VALID");
  });
  it("confirms 3002000027 is valid", () => {
    expect(methodD1("3002000027")).toEqual("VALID");
  });
  it("confirms 4230001407 is valid", () => {
    expect(methodD1("4230001407")).toEqual("VALID");
  });
  it("confirms 5000065514 is valid", () => {
    expect(methodD1("5000065514")).toEqual("VALID");
  });
  it("confirms 6001526215 is valid", () => {
    expect(methodD1("6001526215")).toEqual("VALID");
  });
  it("confirms 7126502149 is valid", () => {
    expect(methodD1("7126502149")).toEqual("VALID");
  });
  it("confirms 9000430223 is valid", () => {
    expect(methodD1("9000430223")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0000260986 is invalid", () => {
    expect(methodD1("0000260986")).toEqual("INVALID");
  });
  it("confirms 1062813622 is invalid", () => {
    expect(methodD1("1062813622")).toEqual("INVALID");
  });
  it("confirms 2256412314 is invalid", () => {
    expect(methodD1("2256412314")).toEqual("INVALID");
  });
  it("confirms 3012084101 is invalid", () => {
    expect(methodD1("3012084101")).toEqual("INVALID");
  });
  it("confirms 4006003027 is invalid", () => {
    expect(methodD1("4006003027")).toEqual("INVALID");
  });
  it("confirms 5814500990 is invalid", () => {
    expect(methodD1("5814500990")).toEqual("INVALID");
  });
  it("confirms 6128462594 is invalid", () => {
    expect(methodD1("6128462594")).toEqual("INVALID");
  });
  it("confirms 7000062035 is invalid", () => {
    expect(methodD1("7000062035")).toEqual("INVALID");
  });
  it("confirms 8003306026 is invalid", () => {
    expect(methodD1("8003306026")).toEqual("INVALID");
  });
  it("confirms 9000641509 is invalid", () => {
    expect(methodD1("9000641509")).toEqual("INVALID");
  });
});
