/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC2 from "../../../lib/methods/methodC2";

describe("method C2", () => {
  it("confirms 2394871426 is valid (variation 1)", () => {
    expect(methodC2("2394871426")).toEqual("VALID");
  });
  it("confirms 4218461950 is valid (variation 1)", () => {
    expect(methodC2("4218461950")).toEqual("VALID");
  });
  it("confirms 7352569148 is valid (variation 1)", () => {
    expect(methodC2("7352569148")).toEqual("VALID");
  });
  it("confirms 5127485166 is valid (variation 2)", () => {
    expect(methodC2("5127485166")).toEqual("VALID");
  });
  it("confirms 8738142564 is valid (variation 2)", () => {
    expect(methodC2("8738142564")).toEqual("VALID");
  });
  it("confirms 0076543216 is valid (variation 3)", () => {
    expect(methodC2("0076543216")).toEqual("VALID");
  });
  it("confirms 3456789012 is valid (variation 3)", () => {
    expect(methodC2("3456789012")).toEqual("VALID");
  });
  it("confirms 9024675138 is valid (variation 3)", () => {
    expect(methodC2("9024675138")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual("INVALID");
  });
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual("INVALID");
  });
  it("confirms 9024675131 is invalid", () => {
    expect(methodC2("9024675131")).toEqual("INVALID");
  });
  it("confirms 7352569145 is invalid", () => {
    expect(methodC2("7352569145")).toEqual("INVALID");
  });
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual("INVALID");
  });
  it("confirms 9024675131 is invalid", () => {
    expect(methodC2("9024675131")).toEqual("INVALID");
  });
  it("confirms 7352569145 is invalid", () => {
    expect(methodC2("7352569145")).toEqual("INVALID");
  });
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual("INVALID");
  });
  it("confirms 7352569145 is invalid", () => {
    expect(methodC2("7352569145")).toEqual("INVALID");
  });
  it("confirms 9024675131 is invalid", () => {
    expect(methodC2("9024675131")).toEqual("INVALID");
  });
});
