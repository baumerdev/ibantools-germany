/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method61 from "../../../lib/methods/method61";

describe("method 61", () => {
  it("confirms 2063099200 is valid", () => {
    expect(method61("2063099200")).toEqual("VALID");
  });
  it("confirms 2063099299 is valid", () => {
    expect(method61("2063099299")).toEqual("VALID");
  });
  it("confirms 0260760481 is valid", () => {
    expect(method61("0260760481")).toEqual("VALID");
  });
  it("confirms 1234526000 is valid", () => {
    expect(method61("1234526000")).toEqual("VALID");
  });
  it("confirms 1234551080 is valid (special case 8)", () => {
    expect(method61("1234551080")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 2063098200 is invalid", () => {
    expect(method61("2063098200")).toEqual("INVALID");
  });
  it("confirms 2063099288 is invalid", () => {
    expect(method61("2063099288")).toEqual("INVALID");
  });
  it("confirms 0260860481 is invalid", () => {
    expect(method61("0260860481")).toEqual("INVALID");
  });
});
