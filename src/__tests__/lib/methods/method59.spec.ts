/**
 * ibantools-germany
 * Copyright (C) 2022-2023 Markus Baumer <markus@baumer.dev>
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

import method59 from "../../../lib/methods/method59";

describe("method 59", () => {
  it("confirms 99999999 is valid (shorter than 9 digits, always valid)", () => {
    expect(method59("99999999")).toEqual(Result.VALID);
  });
  it("confirms 1234567897 is valid", () => {
    expect(method59("1234567897")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 100000000 is invalid (wrong digit for number longer than 9 digits)", () => {
    expect(method59("100000000")).toEqual(Result.INVALID);
  });
  it("confirms 1234568897 is invalid", () => {
    expect(method59("1234568897")).toEqual(Result.INVALID);
  });
});
