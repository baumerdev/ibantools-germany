/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method36 from "../../../lib/methods/method36";

describe("method 36", () => {
  it("confirms 113178 is valid", () => {
    expect(method36("113178")).toEqual("VALID");
  });
  it("confirms 146666 is valid", () => {
    expect(method36("146666")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid", () => {
    expect(method36("1234567897")).toEqual("VALID");
  });
  it("confirms 67897 is valid", () => {
    expect(method36("67897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 113278 is invalid", () => {
    expect(method36("113278")).toEqual("INVALID");
  });
  it("confirms 147666 is invalid", () => {
    expect(method36("147666")).toEqual("INVALID");
  });
  it("confirms 1234667887 is invalid", () => {
    expect(method36("1234667887")).toEqual("INVALID");
  });
  it("confirms 67997 is invalid", () => {
    expect(method36("67997")).toEqual("INVALID");
  });
});
