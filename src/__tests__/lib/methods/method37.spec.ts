/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method37 from "../../../lib/methods/method37";

describe("method 37", () => {
  it("confirms 624315 is valid", () => {
    expect(method37("624315")).toEqual("VALID");
  });
  it("confirms 632500 is valid", () => {
    expect(method37("632500")).toEqual("VALID");
  });
  it("confirms 1234567891 is valid", () => {
    expect(method37("1234567891")).toEqual("VALID");
  });
  it("confirms 567891 is valid", () => {
    expect(method37("567891")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123278 is invalid", () => {
    expect(method37("123278")).toEqual("INVALID");
  });
  it("confirms 632600 is invalid", () => {
    expect(method37("632600")).toEqual("INVALID");
  });
  it("confirms 1234567991 is invalid", () => {
    expect(method37("1234567991")).toEqual("INVALID");
  });
  it("confirms 568891 is invalid", () => {
    expect(method37("568891")).toEqual("INVALID");
  });
});
