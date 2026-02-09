/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method12 from "../../../lib/methods/method12";

describe("method 12", () => {
  it("is an unknown check digit calculation method", () => {
    expect(method12("12345")).toEqual("UNKOWN_CHECK_DIGIT_CALCULATION_METHOD");
  });
});
