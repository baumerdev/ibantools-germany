/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method82 from "../../../lib/methods/method82";

describe("method 82", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(method82("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
