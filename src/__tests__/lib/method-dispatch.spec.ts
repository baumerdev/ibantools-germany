/**
 * ibantools-germany
 * Copyright (C) 2022 Markus Baumer <markus@baumer.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import currentCheckDigit from "../../data/current.checkDigit.json";
import { CheckDigits } from "../../lib/data";
import { methodDispatch } from "../../lib/method-dispatch";
import { Result } from "../../lib/types";

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
        Result.UNKOWN_CHECK_DIGIT_CALCULATION_METHOD
      );
    });
  }

  it("returns unknown calculation method for method 12", () => {
    expect(methodDispatch("x", "x", "12")).toEqual(
      Result.UNKOWN_CHECK_DIGIT_CALCULATION_METHOD
    );
  });

  it("returns unknown calculation method", () => {
    expect(methodDispatch("x", "x", "x")).toEqual(
      Result.UNKOWN_CHECK_DIGIT_CALCULATION_METHOD
    );
  });
});

describe("methodDispatch by data", () => {
  Object.keys(currentCheckDigit as CheckDigits).forEach((method) => {
    const firstBLZForMethod = (currentCheckDigit as CheckDigits)[method][0];
    it(`confirms method ${method} in data file is implemented`, () => {
      expect(methodDispatch("1", String(firstBLZForMethod), method)).toMatch(
        /^(VALID|INVALID|NO_CHECK_DIGIT_CALCULATION)$/
      );
    });
  });
});
