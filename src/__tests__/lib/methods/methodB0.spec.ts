/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB0 from "../../../lib/methods/methodB0";

describe("method B0", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodB0("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
