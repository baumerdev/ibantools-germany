/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA5 from "../../../lib/methods/methodA5";

describe("method A5", () => {
  it("confirms 9941510001 is valid (variation 1)", () => {
    expect(methodA5("9941510001")).toEqual("VALID");
  });
  it("confirms 9961230019 is valid (variation 1)", () => {
    expect(methodA5("9961230019")).toEqual("VALID");
  });
  it("confirms 9380027210 is valid (variation 1)", () => {
    expect(methodA5("9380027210")).toEqual("VALID");
  });
  it("confirms 9932290910 is valid (variation 1)", () => {
    expect(methodA5("9932290910")).toEqual("VALID");
  });
  it("confirms 0000251437 is valid (variation 2)", () => {
    expect(methodA5("0000251437")).toEqual("VALID");
  });
  it("confirms 0007948344 is valid (variation 2)", () => {
    expect(methodA5("0007948344")).toEqual("VALID");
  });
  it("confirms 0000159590 is valid (variation 2)", () => {
    expect(methodA5("0000159590")).toEqual("VALID");
  });
  it("confirms 0000051640 is valid (variation 2)", () => {
    expect(methodA5("0000051640")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9941510002 is invalid", () => {
    expect(methodA5("9941510002")).toEqual("INVALID");
  });
  it("confirms 9961230020 is invalid", () => {
    expect(methodA5("9961230020")).toEqual("INVALID");
  });
  it("confirms 0000251438 is invalid", () => {
    expect(methodA5("0000251438")).toEqual("INVALID");
  });
  it("confirms 0007948345 is invalid", () => {
    expect(methodA5("0007948345")).toEqual("INVALID");
  });
});
