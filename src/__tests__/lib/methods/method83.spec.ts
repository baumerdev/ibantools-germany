/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import method83 from "../../../lib/methods/method83";

describe("method 83", () => {
  it("is currently not used by BLZ or other method", () => {
    expect(method83("")).toEqual("METHOD_NOT_IMPLEMENTED_NOT_IN_USE");
  });
});
