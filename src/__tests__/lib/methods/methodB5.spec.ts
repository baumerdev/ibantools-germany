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

import methodB5 from "../../../lib/methods/methodB5";

describe("method B5", () => {
  it("confirms 0159006955 is valid (variation 1)", () => {
    expect(methodB5("0159006955")).toEqual(Result.VALID);
  });
  it("confirms 2000123451 is valid (variation 1)", () => {
    expect(methodB5("2000123451")).toEqual(Result.VALID);
  });
  it("confirms 1151043216 is valid (variation 1)", () => {
    expect(methodB5("1151043216")).toEqual(Result.VALID);
  });
  it("confirms 9000939033 is valid (variation 1)", () => {
    expect(methodB5("9000939033")).toEqual(Result.VALID);
  });
  it("confirms 0123456782 is valid (variation 2)", () => {
    expect(methodB5("0123456782")).toEqual(Result.VALID);
  });
  it("confirms 0130098767 is valid (variation 2)", () => {
    expect(methodB5("0130098767")).toEqual(Result.VALID);
  });
  it("confirms 1045000252 is valid (variation 2)", () => {
    expect(methodB5("1045000252")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 7414398260 is invalid", () => {
    expect(methodB5("7414398260")).toEqual(Result.INVALID);
  });
  it("confirms 8347251693 is invalid", () => {
    expect(methodB5("8347251693")).toEqual(Result.INVALID);
  });
  it("confirms 2345678901 is invalid", () => {
    expect(methodB5("2345678901")).toEqual(Result.INVALID);
  });
  it("confirms 5678901234 is invalid", () => {
    expect(methodB5("5678901234")).toEqual(Result.INVALID);
  });
  it("confirms 9000293707 is invalid", () => {
    expect(methodB5("9000293707")).toEqual(Result.INVALID);
  });
  it("confirms 0159004165 is invalid", () => {
    expect(methodB5("0159004165")).toEqual(Result.INVALID);
  });
  it("confirms 0023456787 is invalid", () => {
    expect(methodB5("0023456787")).toEqual(Result.INVALID);
  });
  it("confirms 0056789018 is invalid", () => {
    expect(methodB5("0056789018")).toEqual(Result.INVALID);
  });
  it("confirms 3045000333 is invalid", () => {
    expect(methodB5("3045000333")).toEqual(Result.INVALID);
  });
});
