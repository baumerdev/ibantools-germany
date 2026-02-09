/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method87 from "../../../lib/methods/method87";

describe("method 87", () => {
  it("confirms 3199500501 is valid (variation Excemtion)", () => {
    expect(method87("3199500501")).toEqual("VALID");
  });
  it("confirms 0000000406 is valid (variation A)", () => {
    expect(method87("0000000406")).toEqual("VALID");
  });
  it("confirms 0000051768 is valid (variation A)", () => {
    expect(method87("0000051768")).toEqual("VALID");
  });
  it("confirms 0010701590 is valid (variation A)", () => {
    expect(method87("0010701590")).toEqual("VALID");
  });
  it("confirms 0010720185 is valid (variation A)", () => {
    expect(method87("0010720185")).toEqual("VALID");
  });
  it("confirms 0000100005 is valid (variation B)", () => {
    expect(method87("0000100005")).toEqual("VALID");
  });
  it("confirms 0000393814 is valid (variation B)", () => {
    expect(method87("0000393814")).toEqual("VALID");
  });
  it("confirms 0000950360 is valid (variation B)", () => {
    expect(method87("0000950360")).toEqual("VALID");
  });
  it("confirms 0000156040 is valid (variation C)", () => {
    expect(method87("0000156040")).toEqual("VALID");
  });
  it("confirms 0001975641 is valid (variation D)", () => {
    expect(method87("0001975641")).toEqual("VALID");
  });
  it("confirms 0001988654 is valid (variation D)", () => {
    expect(method87("0001988654")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3199501501 is invalid", () => {
    expect(method87("3199501501")).toEqual("INVALID");
  });
  it("confirms 0000000407 is invalid", () => {
    expect(method87("0000000407")).toEqual("INVALID");
  });
  it("confirms 0000051868 is invalid", () => {
    expect(method87("0000051868")).toEqual("INVALID");
  });
  it("confirms 0010720285 is invalid", () => {
    expect(method87("0010720285")).toEqual("INVALID");
  });
  it("confirms 0000110005 is invalid", () => {
    expect(method87("0000110005")).toEqual("INVALID");
  });
  it("confirms 0000383814 is invalid", () => {
    expect(method87("0000383814")).toEqual("INVALID");
  });
  it("confirms 0002988654 is invalid", () => {
    expect(method87("0002988654")).toEqual("INVALID");
  });
  it("confirms 0000156047 is invalid", () => {
    expect(method87("0000156047")).toEqual("INVALID");
  });
});
