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

import methodB1 from "../../../lib/methods/methodB1";

describe("method B1", () => {
  it("confirms 1434253150 is valid (variation 1)", () => {
    expect(methodB1("1434253150")).toEqual(Result.VALID);
  });
  it("confirms 2746315471 is valid (variation 1)", () => {
    expect(methodB1("2746315471")).toEqual(Result.VALID);
  });
  it("confirms 7414398260 is valid (variation 2)", () => {
    expect(methodB1("7414398260")).toEqual(Result.VALID);
  });
  it("confirms 8347251693 is valid (variation 2)", () => {
    expect(methodB1("8347251693")).toEqual(Result.VALID);
  });
  it("confirms 1501824 is valid (variation 3)", () => {
    expect(methodB1("1501824")).toEqual(Result.VALID);
  });
  it("confirms 1501832 is valid (variation 3)", () => {
    expect(methodB1("1501832")).toEqual(Result.VALID);
  });
  it("confirms 539290858 is valid (variation 3)", () => {
    expect(methodB1("539290858")).toEqual(Result.VALID);
  });
  it("confirms 7414398268 is valid (variation 3)", () => {
    expect(methodB1("7414398268")).toEqual(Result.VALID);
  });
  it("confirms 8347251699 is valid (variation 3)", () => {
    expect(methodB1("8347251699")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0123456789 is invalid", () => {
    expect(methodB1("0123456789")).toEqual(Result.INVALID);
  });
  it("confirms 2345678901 is invalid", () => {
    expect(methodB1("2345678901")).toEqual(Result.INVALID);
  });
  it("confirms 5678901234 is invalid", () => {
    expect(methodB1("5678901234")).toEqual(Result.INVALID);
  });
});
