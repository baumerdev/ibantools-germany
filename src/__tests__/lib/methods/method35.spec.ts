/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method35 from "../../../lib/methods/method35";

describe("method 35", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(method35("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
