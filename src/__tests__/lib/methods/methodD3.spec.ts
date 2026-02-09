/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodD3 from "../../../lib/methods/methodD3";

describe("method D3", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodD3("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
