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

import currentCheckDigits from "../../data/current.json";
import { CheckDigits, methodForBLZ } from "../../lib/data";

describe("current.json", () => {
  // Safeguard that there are enough converted entries.
  it("contains more than 100 entries", () => {
    expect(
      Object.keys(currentCheckDigits as CheckDigits).length
    ).toBeGreaterThan(100);
  });
});

describe("methodForBLZ", () => {
  Object.keys(currentCheckDigits as CheckDigits).forEach((method) => {
    const firstBLZForMethod = (currentCheckDigits as CheckDigits)[method][0];
    it(`returns ${method} for BLZ ${firstBLZForMethod}`, () => {
      expect(methodForBLZ(String(firstBLZForMethod))).toEqual(method);
    });
  });

  it("returns null for unknown BLZ 00000000", () => {
    expect(methodForBLZ("00000000")).toEqual(null);
  });
});
