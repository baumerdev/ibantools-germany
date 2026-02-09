/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodB9 from "../../../lib/methods/methodB9";

describe("method B9", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodB9("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
