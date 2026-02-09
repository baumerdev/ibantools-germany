/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import methodC4 from "../../../lib/methods/methodC4";

describe("method C4", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(methodC4("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
