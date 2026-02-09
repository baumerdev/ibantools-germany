/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD7 from "../../../lib/methods/methodD7";

describe("method D7", () => {
  it("confirms 0500018205 is valid", () => {
    expect(methodD7("0500018205")).toEqual("VALID");
  });
  it("confirms 0230103715 is valid", () => {
    expect(methodD7("0230103715")).toEqual("VALID");
  });
  it("confirms 0301000434 is valid", () => {
    expect(methodD7("0301000434")).toEqual("VALID");
  });
  it("confirms 0330035104 is valid", () => {
    expect(methodD7("0330035104")).toEqual("VALID");
  });
  it("confirms 0420001202 is valid", () => {
    expect(methodD7("0420001202")).toEqual("VALID");
  });
  it("confirms 0134637709 is valid", () => {
    expect(methodD7("0134637709")).toEqual("VALID");
  });
  it("confirms 0201005939 is valid", () => {
    expect(methodD7("0201005939")).toEqual("VALID");
  });
  it("confirms 0602006999 is valid", () => {
    expect(methodD7("0602006999")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0501006102 is invalid", () => {
    expect(methodD7("0501006102")).toEqual("INVALID");
  });
  it("confirms 0231307867 is invalid", () => {
    expect(methodD7("0231307867")).toEqual("INVALID");
  });
  it("confirms 0301005331 is invalid", () => {
    expect(methodD7("0301005331")).toEqual("INVALID");
  });
  it("confirms 0330034104 is invalid", () => {
    expect(methodD7("0330034104")).toEqual("INVALID");
  });
  it("confirms 0420001302 is invalid", () => {
    expect(methodD7("0420001302")).toEqual("INVALID");
  });
  it("confirms 0135638809 is invalid", () => {
    expect(methodD7("0135638809")).toEqual("INVALID");
  });
  it("confirms 0202005939 is invalid", () => {
    expect(methodD7("0202005939")).toEqual("INVALID");
  });
  it("confirms 0601006977 is invalid", () => {
    expect(methodD7("0601006977")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodD7("1234567890")).toEqual("INVALID");
  });
});
