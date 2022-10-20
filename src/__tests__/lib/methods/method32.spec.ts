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

import method32 from "../../../lib/methods/method32";

describe("method 32", () => {
  it("confirms 9141405 is valid", () => {
    expect(method32("9141405")).toEqual(Result.VALID);
  });
  it("confirms 1709107983 is valid", () => {
    expect(method32("1709107983")).toEqual(Result.VALID);
  });
  it("confirms 0122116979 is valid", () => {
    expect(method32("0122116979")).toEqual(Result.VALID);
  });
  it("confirms 0121114867 is valid", () => {
    expect(method32("0121114867")).toEqual(Result.VALID);
  });
  it("confirms 9030101192 is valid", () => {
    expect(method32("9030101192")).toEqual(Result.VALID);
  });
  it("confirms 9245500460 is valid", () => {
    expect(method32("9245500460")).toEqual(Result.VALID);
  });
  it("confirms 1234567897 is valid", () => {
    expect(method32("1234567897")).toEqual(Result.VALID);
  });
  it("confirms 0004567897 is valid", () => {
    expect(method32("0004567897")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 9143405 is invalid", () => {
    expect(method32("9143405")).toEqual(Result.INVALID);
  });
  it("confirms 1709207983 is invalid", () => {
    expect(method32("1709207983")).toEqual(Result.INVALID);
  });
  it("confirms 0122117979 is invalid", () => {
    expect(method32("0122117979")).toEqual(Result.INVALID);
  });
  it("confirms 0121124867 is invalid", () => {
    expect(method32("0121124867")).toEqual(Result.INVALID);
  });
  it("confirms 9030111192 is invalid", () => {
    expect(method32("9030111192")).toEqual(Result.INVALID);
  });
  it("confirms 9246500460 is invalid", () => {
    expect(method32("9246500460")).toEqual(Result.INVALID);
  });
  it("confirms 1234568897 is invalid", () => {
    expect(method32("1234568897")).toEqual(Result.INVALID);
  });
  it("confirms 0004667897 is invalid", () => {
    expect(method32("0004667897")).toEqual(Result.INVALID);
  });
});
