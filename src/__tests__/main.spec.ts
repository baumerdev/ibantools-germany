/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import * as main from "../main";

describe("main", () => {
  it("exports function named generateBBAN", () => {
    expect(typeof main.generateBBAN).toBe("function");
  });
  it("exports function named generateIBAN", () => {
    expect(typeof main.generateIBAN).toBe("function");
  });
  it("exports function named isValidAccountNumberBLZ", () => {
    expect(typeof main.isValidAccountNumberBLZ).toBe("function");
  });
  it("exports function named isValidBBAN", () => {
    expect(typeof main.isValidBBAN).toBe("function");
  });
  it("exports function named isValidIBAN", () => {
    expect(typeof main.isValidIBAN).toBe("function");
  });
});
