/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodE1 from "../../../lib/methods/methodE1";

describe("method E1", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodE1("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
