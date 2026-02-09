/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method42 from "../../../lib/methods/method42";

describe("method 42", () => {
  it("confirms 59498 is valid", () => {
    expect(method42("59498")).toEqual("VALID");
  });
  it("confirms 59510 is valid", () => {
    expect(method42("59510")).toEqual("VALID");
  });
  it("confirms 1234567899 is valid", () => {
    expect(method42("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 59598 is invalid", () => {
    expect(method42("59598")).toEqual("INVALID");
  });
  it("confirms 59520 is invalid", () => {
    expect(method42("59520")).toEqual("INVALID");
  });
  it("confirms 1234568899 is invalid", () => {
    expect(method42("1234568899")).toEqual("INVALID");
  });
});
