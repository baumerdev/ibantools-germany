/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method50 from "../../../lib/methods/method50";

describe("method 50", () => {
  it("confirms 4000005001 is valid", () => {
    expect(method50("4000005001")).toEqual("VALID");
  });
  it("confirms 4444442001 is valid", () => {
    expect(method50("4444442001")).toEqual("VALID");
  });
  it("confirms 1234560000 is valid", () => {
    expect(method50("1234560000")).toEqual("VALID");
  });
  it("confirms 1234560 is valid (omitted subaccount)", () => {
    expect(method50("1234560")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 4001005001 is invalid", () => {
    expect(method50("4001005001")).toEqual("INVALID");
  });
  it("confirms 4444452001 is invalid", () => {
    expect(method50("4444452001")).toEqual("INVALID");
  });
  it("confirms 1234570000 is invalid", () => {
    expect(method50("1234570000")).toEqual("INVALID");
  });
  it("confirms 1334560 is invalid", () => {
    expect(method50("1334560")).toEqual("INVALID");
  });
});
