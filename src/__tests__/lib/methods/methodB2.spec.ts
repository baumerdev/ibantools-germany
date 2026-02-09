/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB2 from "../../../lib/methods/methodB2";

describe("method B2", () => {
  it("confirms 0020012357 is valid (variation 1)", () => {
    expect(methodB2("0020012357")).toEqual("VALID");
  });
  it("confirms 0080012345 is valid (variation 1)", () => {
    expect(methodB2("0080012345")).toEqual("VALID");
  });
  it("confirms 0926801910 is valid (variation 1)", () => {
    expect(methodB2("0926801910")).toEqual("VALID");
  });
  it("confirms 1002345674 is valid (variation 1)", () => {
    expect(methodB2("1002345674")).toEqual("VALID");
  });
  it("confirms 8000990054 is valid (variation 2)", () => {
    expect(methodB2("8000990054")).toEqual("VALID");
  });
  it("confirms 9000481805 is valid (variation 2)", () => {
    expect(methodB2("9000481805")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0020012399 is invalid", () => {
    expect(methodB2("0020012399")).toEqual("INVALID");
  });
  it("confirms 0080012347 is invalid", () => {
    expect(methodB2("0080012347")).toEqual("INVALID");
  });
  it("confirms 0080012370 is invalid", () => {
    expect(methodB2("0080012370")).toEqual("INVALID");
  });
  it("confirms 0932100027 is invalid", () => {
    expect(methodB2("0932100027")).toEqual("INVALID");
  });
  it("confirms 3310123454 is invalid", () => {
    expect(methodB2("3310123454")).toEqual("INVALID");
  });
  it("confirms 8000990057 is invalid", () => {
    expect(methodB2("8000990057")).toEqual("INVALID");
  });
  it("confirms 8011000126 is invalid", () => {
    expect(methodB2("8011000126")).toEqual("INVALID");
  });
  it("confirms 9000481800 is invalid", () => {
    expect(methodB2("9000481800")).toEqual("INVALID");
  });
  it("confirms 9980480111 is invalid", () => {
    expect(methodB2("9980480111")).toEqual("INVALID");
  });
});
