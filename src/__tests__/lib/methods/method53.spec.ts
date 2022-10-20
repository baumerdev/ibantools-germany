/*!
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

import { Result } from "../../../lib/types";

import method53 from "../../../lib/methods/method53";

describe("method 53", () => {
  it("confirms 382432256 with BLZ 16052072 is valid", () => {
    expect(method53("382432256", "16052072")).toEqual(Result.VALID);
  });
  it("confirms 9876543218 is valid (method 20)", () => {
    expect(method53("9876543218", "00000000")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 12345678 with BLZ 16052072 is valid", () => {
    expect(method53("12345678", "16052072")).toEqual(Result.INVALID);
  });
  it("confirms 12345678 with BLZ 00000000 is valid", () => {
    expect(method53("12345678", "00000000")).toEqual(Result.INVALID);
  });
});
