/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method96 from "../../../lib/methods/method96";

describe("method 96", () => {
  it("confirms 0000254100 is valid (variation 1)", () => {
    expect(method96("0000254100")).toEqual("VALID");
  });
  it("confirms 9421000009 is valid (variation 1)", () => {
    expect(method96("9421000009")).toEqual("VALID");
  });
  it("confirms 0000000208 is valid (variation 2)", () => {
    expect(method96("0000000208")).toEqual("VALID");
  });
  it("confirms 0101115152 is valid (variation 2)", () => {
    expect(method96("0101115152")).toEqual("VALID");
  });
  it("confirms 0301204301 is valid (variation 2)", () => {
    expect(method96("0301204301")).toEqual("VALID");
  });
  it("confirms 0001300000 is valid (variation 3)", () => {
    expect(method96("0001300000")).toEqual("VALID");
  });
  it("confirms 0001300000 is valid (variation 3)", () => {
    expect(method96("0099399999")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0000254200 is invalid", () => {
    expect(method96("0000254200")).toEqual("INVALID");
  });
  it("confirms 9421000109 is invalid", () => {
    expect(method96("9421000109")).toEqual("INVALID");
  });
  it("confirms 0000000408 is invalid", () => {
    expect(method96("0000000408")).toEqual("INVALID");
  });
  it("confirms 0101315152 is invalid", () => {
    expect(method96("0101315152")).toEqual("INVALID");
  });
  it("confirms 0301224301 is invalid", () => {
    expect(method96("0301224301")).toEqual("INVALID");
  });
});
