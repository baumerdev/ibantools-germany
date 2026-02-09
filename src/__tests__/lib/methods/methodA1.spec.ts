/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA1 from "../../../lib/methods/methodA1";

describe("method A1", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodA1("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
