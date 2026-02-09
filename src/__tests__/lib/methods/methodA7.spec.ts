/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA7 from "../../../lib/methods/methodA7";

describe("method A7", () => {
  it("confirms 19010008 is valid (variation 1)", () => {
    expect(methodA7("19010008")).toEqual("VALID");
  });
  it("confirms 19010438 is valid (variation 1)", () => {
    expect(methodA7("19010438")).toEqual("VALID");
  });
  it("confirms 19010660 is valid (variation 2)", () => {
    expect(methodA7("19010660")).toEqual("VALID");
  });
  it("confirms 19010876 is valid (variation 2)", () => {
    expect(methodA7("19010876")).toEqual("VALID");
  });
  it("confirms 209010892 is valid (variation 2)", () => {
    expect(methodA7("209010892")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 209010893 is invalid", () => {
    expect(methodA7("209010893")).toEqual("INVALID");
  });
  it("confirms 209010893 is invalid", () => {
    expect(methodA7("209010893")).toEqual("INVALID");
  });
  it("confirms 1234567899 is invalid", () => {
    expect(methodA7("1234567899")).toEqual("INVALID");
  });
});
