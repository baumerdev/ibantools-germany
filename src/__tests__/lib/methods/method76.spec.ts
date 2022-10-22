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

import method76 from "../../../lib/methods/method76";

describe("method 76", () => {
  it("confirms 12345600 is valid", () => {
    expect(method76("12345600")).toEqual(Result.VALID);
  });
  it("confirms 0006543200 is valid", () => {
    expect(method76("0006543200")).toEqual(Result.VALID);
  });
  it("confirms 9012345600 is valid", () => {
    expect(method76("9012345600")).toEqual(Result.VALID);
  });
  it("confirms 90123456 is valid", () => {
    expect(method76("90123456")).toEqual(Result.VALID);
  });
  it("confirms 7876543100 is valid", () => {
    expect(method76("7876543100")).toEqual(Result.VALID);
  });
  it("confirms 78765431 is valid", () => {
    expect(method76("78765431")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 12344600 is invalid", () => {
    expect(method76("12344600")).toEqual(Result.INVALID);
  });
  it("confirms 0006543300 is invalid", () => {
    expect(method76("0006543300")).toEqual(Result.INVALID);
  });
  it("confirms 9112345600 is invalid", () => {
    expect(method76("9112345600")).toEqual(Result.INVALID);
  });
  it("confirms 90223466 is invalid", () => {
    expect(method76("90223466")).toEqual(Result.INVALID);
  });
  it("confirms 7876542100 is invalid", () => {
    expect(method76("7876542100")).toEqual(Result.INVALID);
  });
  it("confirms 78865431 is invalid", () => {
    expect(method76("78865431")).toEqual(Result.INVALID);
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method76("1234567890")).toEqual(Result.INVALID);
  });
});
