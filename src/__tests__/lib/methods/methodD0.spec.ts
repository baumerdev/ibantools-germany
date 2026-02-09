/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD0 from "../../../lib/methods/methodD0";

describe("method D0", () => {
  it("confirms 6100272324 is valid (variation 1)", () => {
    expect(methodD0("6100272324")).toEqual("VALID");
  });
  it("confirms 6100273479 is valid (variation 1)", () => {
    expect(methodD0("6100273479")).toEqual("VALID");
  });
  it("has no check digit calculation for 5700000000", () => {
    expect(methodD0("5700000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 5799999999", () => {
    expect(methodD0("5799999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 6100272885 is invalid", () => {
    expect(methodD0("6100272885")).toEqual("INVALID");
  });
  it("confirms 6100273377 is invalid", () => {
    expect(methodD0("6100273377")).toEqual("INVALID");
  });
  it("confirms 6100274012 is invalid", () => {
    expect(methodD0("6100274012")).toEqual("INVALID");
  });
  it("confirms 5699999999 is invalid", () => {
    expect(methodD0("5699999999")).toEqual("INVALID");
  });
  it("confirms 5800000000 is invalid", () => {
    expect(methodD0("5800000000")).toEqual("INVALID");
  });
});
