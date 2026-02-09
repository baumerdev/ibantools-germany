/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method39 from "../../../lib/methods/method39";

describe("method 39", () => {
  it("confirms 200205 is valid", () => {
    expect(method39("200205")).toEqual("VALID");
  });
  it("confirms 10019400 is valid", () => {
    expect(method39("10019400")).toEqual("VALID");
  });
  it("confirms 1234567890 is valid", () => {
    expect(method39("1234567890")).toEqual("VALID");
  });
  it("confirms 34567890 is valid", () => {
    expect(method39("34567890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 210205 is invalid", () => {
    expect(method39("210205")).toEqual("INVALID");
  });
  it("confirms 10018400 is invalid", () => {
    expect(method39("10018400")).toEqual("INVALID");
  });
  it("confirms 1244567890 is invalid", () => {
    expect(method39("1244567890")).toEqual("INVALID");
  });
  it("confirms 34577890 is invalid", () => {
    expect(method39("34577890")).toEqual("INVALID");
  });
});
