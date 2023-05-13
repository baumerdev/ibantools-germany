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

import methodC3 from "../../../lib/methods/methodC3";

describe("method C3", () => {
  it("confirms 9294182 is valid (variation 1)", () => {
    expect(methodC3("9294182")).toEqual(Result.VALID);
  });
  it("confirms 4431276 is valid (variation 1)", () => {
    expect(methodC3("4431276")).toEqual(Result.VALID);
  });
  it("confirms 19919 is valid (variation 1)", () => {
    expect(methodC3("19919")).toEqual(Result.VALID);
  });
  it("confirms 9000420530 is valid (variation 2)", () => {
    expect(methodC3("9000420530")).toEqual(Result.VALID);
  });
  it("confirms 9000010006 is valid (variation 2)", () => {
    expect(methodC3("9000010006")).toEqual(Result.VALID);
  });
  it("confirms 9000577650 is valid (variation 2)", () => {
    expect(methodC3("9000577650")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 17002 is invalid", () => {
    expect(methodC3("17002")).toEqual(Result.INVALID);
  });
  it("confirms 123451 is invalid", () => {
    expect(methodC3("123451")).toEqual(Result.INVALID);
  });
  it("confirms 122448 is invalid", () => {
    expect(methodC3("122448")).toEqual(Result.INVALID);
  });
  it("confirms 9000734028 is invalid", () => {
    expect(methodC3("9000734028")).toEqual(Result.INVALID);
  });
  it("confirms 9000733227 is invalid", () => {
    expect(methodC3("9000733227")).toEqual(Result.INVALID);
  });
  it("confirms 9000731120 is invalid", () => {
    expect(methodC3("9000731120")).toEqual(Result.INVALID);
  });
});
