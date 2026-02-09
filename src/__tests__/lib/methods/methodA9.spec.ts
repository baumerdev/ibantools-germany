/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodA9 from "../../../lib/methods/methodA9";

describe("method A9", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodA9("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
