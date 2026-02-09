/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method40 from "../../../lib/methods/method40";

describe("method 40", () => {
  it("confirms 1258345 is valid", () => {
    expect(method40("1258345")).toEqual("VALID");
  });
  it("confirms 3231963 is valid", () => {
    expect(method40("3231963")).toEqual("VALID");
  });
  it("confirms 1234567899 is valid", () => {
    expect(method40("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1358345 is invalid", () => {
    expect(method40("1358345")).toEqual("INVALID");
  });
  it("confirms 3232963 is invalid", () => {
    expect(method40("3232963")).toEqual("INVALID");
  });
  it("confirms 1234568899 is invalid", () => {
    expect(method40("1234568899")).toEqual("INVALID");
  });
});
