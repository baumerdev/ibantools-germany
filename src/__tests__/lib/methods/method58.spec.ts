/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method58 from "../../../lib/methods/method58";

describe("method 58", () => {
  it("confirms 1800881120 is valid", () => {
    expect(method58("1800881120")).toEqual("VALID");
  });
  it("confirms 9200654108 is valid", () => {
    expect(method58("9200654108")).toEqual("VALID");
  });
  it("confirms 1015222224 is valid", () => {
    expect(method58("1015222224")).toEqual("VALID");
  });
  it("confirms 3703169668 is valid", () => {
    expect(method58("3703169668")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1800981120 is invalid", () => {
    expect(method58("1800981120")).toEqual("INVALID");
  });
  it("confirms 9200654208 is invalid", () => {
    expect(method58("9200654208")).toEqual("INVALID");
  });
  it("confirms 1015232224 is invalid", () => {
    expect(method58("1015232224")).toEqual("INVALID");
  });
  it("confirms 3703169678 is invalid", () => {
    expect(method58("3703169678")).toEqual("INVALID");
  });
});
