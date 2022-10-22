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

import { Result } from "../../../lib/types";

import methodD9 from "../../../lib/methods/methodD9";

describe("method D9", () => {
  it("confirms 1234567897 is valid (variation 1)", () => {
    expect(methodD9("1234567897")).toEqual(Result.VALID);
  });
  it("confirms 0123456782 is valid (variation 1)", () => {
    expect(methodD9("0123456782")).toEqual(Result.VALID);
  });
  it("confirms 9876543210 is valid (variation 2)", () => {
    expect(methodD9("9876543210")).toEqual(Result.VALID);
  });
  it("confirms 1234567890 is valid (variation 2)", () => {
    expect(methodD9("1234567890")).toEqual(Result.VALID);
  });
  it("confirms 0123456789 is valid (variation 2)", () => {
    expect(methodD9("0123456789")).toEqual(Result.VALID);
  });
  it("confirms 1100132044 is valid (variation 3)", () => {
    expect(methodD9("1100132044")).toEqual(Result.VALID);
  });
  it("confirms 1100669030 is valid (variation 3)", () => {
    expect(methodD9("1100669030")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 6543217890 is invalid", () => {
    expect(methodD9("6543217890")).toEqual(Result.INVALID);
  });
  it("confirms 0543216789 is invalid", () => {
    expect(methodD9("0543216789")).toEqual(Result.INVALID);
  });
  it("confirms 6543217890 is invalid", () => {
    expect(methodD9("6543217890")).toEqual(Result.INVALID);
  });
  it("confirms 1100789043 is invalid", () => {
    expect(methodD9("1100789043")).toEqual(Result.INVALID);
  });
  it("confirms 1100914032 is invalid", () => {
    expect(methodD9("1100914032")).toEqual(Result.INVALID);
  });
});
