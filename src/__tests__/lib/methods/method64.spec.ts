/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method64 from "../../../lib/methods/method64";

describe("method 64", () => {
  it("confirms 1206473010 is valid", () => {
    expect(method64("1206473010")).toEqual("VALID");
  });
  it("confirms 5016511020 is valid", () => {
    expect(method64("5016511020")).toEqual("VALID");
  });
  it("confirms 1234562890 is valid", () => {
    expect(method64("1234562890")).toEqual("VALID");
  });
  it("confirms 1234562000 is valid", () => {
    expect(method64("1234562000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1206483010 is invalid", () => {
    expect(method64("1206483010")).toEqual("INVALID");
  });
  it("confirms 5015511020 is invalid", () => {
    expect(method64("5015511020")).toEqual("INVALID");
  });
  it("confirms 1234563890 is invalid", () => {
    expect(method64("1234563890")).toEqual("INVALID");
  });
  it("confirms 1134562000 is invalid", () => {
    expect(method64("1134562000")).toEqual("INVALID");
  });
});
