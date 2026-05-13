/*!
 * @jest-environment jsdom
 *
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import "../browser";

describe("browser", () => {
  it("adds function ibantoolsGermany.generateBBAN to window", () => {
    expect(typeof window.ibantoolsGermany.generateBBAN).toBe("function");
  });
  it("adds function ibantoolsGermany.generateIBAN to window", () => {
    expect(typeof window.ibantoolsGermany.generateIBAN).toBe("function");
  });
  it("adds function ibantoolsGermany.isValidAccountNumberBLZ to window", () => {
    expect(typeof window.ibantoolsGermany.isValidAccountNumberBLZ).toBe(
      "function",
    );
  });
  it("adds function ibantoolsGermany.isValidBBAN to window", () => {
    expect(typeof window.ibantoolsGermany.isValidBBAN).toBe("function");
  });
  it("adds function ibantoolsGermany.isValidIBAN to window", () => {
    expect(typeof window.ibantoolsGermany.isValidIBAN).toBe("function");
  });
  it("does not overwrite an existing window.ibantoolsGermany object", () => {
    const marker = () => "marker";
    window.ibantoolsGermany = { marker };
    // biome-ignore lint/correctness/noUndeclaredVariables: jest globals are injected by the jest test runner
    jest.isolateModules(() => {
      // biome-ignore lint/style/noCommonJs: require is required inside jest.isolateModules to force re-evaluation of the module body
      require("../browser");
    });
    expect(window.ibantoolsGermany.marker).toBe(marker);
    expect(typeof window.ibantoolsGermany.generateIBAN).toBe("function");
  });
});
