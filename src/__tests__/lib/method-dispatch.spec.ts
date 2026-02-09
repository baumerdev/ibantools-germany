/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import currentCheckDigits from "../../data/current.json";
import type { CheckDigits } from "../../lib/data";
import { methodDispatch } from "../../lib/method-dispatch";

describe("methodDispatch", () => {
  for (let i = 0; i <= 144; i++) {
    if (i === 12) {
      continue;
    }
    let method = `${i}`;
    if (i < 10) {
      method = `0${i}`;
    }
    if (i >= 100 && i <= 109) {
      method = `A${i - 100}`;
    }
    if (i >= 110 && i <= 119) {
      method = `B${i - 110}`;
    }
    if (i >= 120 && i <= 129) {
      method = `C${i - 120}`;
    }
    if (i >= 130 && i <= 139) {
      method = `D${i - 130}`;
    }
    if (i >= 140 && i <= 149) {
      method = `E${i - 140}`;
    }

    it(`returns no unknown calculation method for method ${method}`, () => {
      expect(methodDispatch("1234", "00000000", method)).not.toEqual(
        "UNKOWN_CHECK_DIGIT_CALCULATION_METHOD",
      );
    });
  }

  it("returns unknown calculation method for method 12", () => {
    expect(methodDispatch("x", "x", "12")).toEqual(
      "UNKOWN_CHECK_DIGIT_CALCULATION_METHOD",
    );
  });

  it("returns unknown calculation method", () => {
    expect(methodDispatch("x", "x", "x")).toEqual(
      "UNKOWN_CHECK_DIGIT_CALCULATION_METHOD",
    );
  });
});

describe("methodDispatch by data", () => {
  for (const method of Object.keys(currentCheckDigits as CheckDigits)) {
    const firstBLZForMethod = (currentCheckDigits as CheckDigits)[method][0];
    it(`confirms method ${method} in data file is implemented`, () => {
      if (method === "12") {
        // This method seems to be a data error Mar-Jun 2025
        return;
      }
      expect(methodDispatch("1", String(firstBLZForMethod), method)).toMatch(
        /^(VALID|INVALID|NO_CHECK_DIGIT_CALCULATION)$/,
      );
    });
  }
});
