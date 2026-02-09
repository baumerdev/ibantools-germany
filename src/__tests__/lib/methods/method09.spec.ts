/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method09 from "../../../lib/methods/method09";

describe("method 09", () => {
  it("has no check digit calculation for 12345", () => {
    expect(method09("12345")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
});
