/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method15 from "../../../lib/methods/method15";

describe("method 15", () => {
  it("confirms 1234567890 is valid", () => {
    expect(method15("1234567890")).toEqual("VALID");
  });
  it("confirms 1234567830 is valid", () => {
    expect(method15("1234567830")).toEqual("VALID");
  });
  it("confirms 1234567881 is valid", () => {
    expect(method15("1234567881")).toEqual("VALID");
  });
  it("confirms 67890 is valid", () => {
    expect(method15("67890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234577890 is invalid", () => {
    expect(method15("1234577890")).toEqual("INVALID");
  });
  it("confirms 1234568830 is invalid", () => {
    expect(method15("1234568830")).toEqual("INVALID");
  });
  it("confirms 1234567981 is invalid", () => {
    expect(method15("1234567981")).toEqual("INVALID");
  });
  it("confirms 66890 is invalid", () => {
    expect(method15("66890")).toEqual("INVALID");
  });
});
