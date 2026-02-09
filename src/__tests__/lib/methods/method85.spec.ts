/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method85 from "../../../lib/methods/method85";

describe("method 85", () => {
  it("confirms 0001156071 is valid (variation A)", () => {
    expect(method85("0001156071")).toEqual("VALID");
  });
  it("confirms 0001156136 is valid (variation A)", () => {
    expect(method85("0001156136")).toEqual("VALID");
  });
  it("confirms 1234564111 is valid (variation A)", () => {
    expect(method85("1234564111")).toEqual("VALID");
  });
  it("confirms 1234566268 is valid (variation B)", () => {
    expect(method85("1234566268")).toEqual("VALID");
  });
  it("confirms 1234569041 is valid (variation C)", () => {
    expect(method85("1234569041")).toEqual("VALID");
  });
  it("confirms 0000156040 is valid (variation C)", () => {
    expect(method85("0000156040")).toEqual("VALID");
  });
  it("confirms 0000156078 is valid (variation B)", () => {
    expect(method85("0000156078")).toEqual("VALID");
  });
  it("confirms 94013341 is valid", () => {
    expect(method85("94013340")).toEqual("VALID");
  });
  it("confirms 0000156071 is valid (variation C)", () => {
    expect(method85("0000156071")).toEqual("VALID");
  });
  it("confirms 3199100002 is valid (exemption)", () => {
    expect(method85("3199100002")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0001156081 is invalid", () => {
    expect(method85("0001156081")).toEqual("INVALID");
  });
  it("confirms 0000256078 is invalid", () => {
    expect(method85("0000256078")).toEqual("INVALID");
  });
  it("confirms 0000157071 is invalid", () => {
    expect(method85("0000157071")).toEqual("INVALID");
  });
  it("confirms 3199200002 is invalid", () => {
    expect(method85("3199200002")).toEqual("INVALID");
  });
  it("confirms 0000156047 is valid (variation C)", () => {
    expect(method85("0000156047")).toEqual("INVALID");
  });
});
