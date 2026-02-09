/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodE0 from "../../../lib/methods/methodE0";

describe("method E0", () => {
  it("confirms 1234568013 is valid", () => {
    expect(methodE0("1234568013")).toEqual("VALID");
  });
  it("confirms 1534568010 is valid", () => {
    expect(methodE0("1534568010")).toEqual("VALID");
  });
  it("confirms 2610015 is valid", () => {
    expect(methodE0("2610015")).toEqual("VALID");
  });
  it("confirms 8741013011 is valid", () => {
    expect(methodE0("8741013011")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234769013 is invalid", () => {
    expect(methodE0("1234769013")).toEqual("INVALID");
  });
  it("confirms 2710014 is invalid", () => {
    expect(methodE0("2710014")).toEqual("INVALID");
  });
  it("confirms 9741015011 is invalid", () => {
    expect(methodE0("9741015011")).toEqual("INVALID");
  });
});
