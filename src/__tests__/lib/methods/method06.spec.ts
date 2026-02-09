/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method06 from "../../../lib/methods/method06";

describe("method 06", () => {
  it("confirms 94012341 is valid", () => {
    expect(method06("94012341")).toEqual("VALID");
  });
  it("confirms 5073321010 is valid", () => {
    expect(method06("5073321010")).toEqual("VALID");
  });
  it("confirms 1234567892 is valid", () => {
    expect(method06("1234567892")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 94013341 is invalid", () => {
    expect(method06("94013341")).toEqual("INVALID");
  });
  it("confirms 5073331010 is invalid", () => {
    expect(method06("5073331010")).toEqual("INVALID");
  });
  it("confirms 1234667892 is invalid", () => {
    expect(method06("1234667892")).toEqual("INVALID");
  });
});
