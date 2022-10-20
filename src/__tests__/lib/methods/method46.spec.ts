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

import method46 from "../../../lib/methods/method46";

describe("method 46", () => {
  it("confirms 0235468612 is valid", () => {
    expect(method46("0235468612")).toEqual(Result.VALID);
  });
  it("confirms 0837890901 is valid", () => {
    expect(method46("0837890901")).toEqual(Result.VALID);
  });
  it("confirms 1041447600 is valid", () => {
    expect(method46("1041447600")).toEqual(Result.VALID);
  });
  it("confirms 1234567990 is valid", () => {
    expect(method46("1234567990")).toEqual(Result.VALID);
  });
  it("confirms 1234567900 is valid", () => {
    expect(method46("1234567900")).toEqual(Result.VALID);
  });
  it("confirms 34567990 is valid", () => {
    expect(method46("34567990")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0235568612 is invalid", () => {
    expect(method46("0235568612")).toEqual(Result.INVALID);
  });
  it("confirms 0837891901 is invalid", () => {
    expect(method46("0837891901")).toEqual(Result.INVALID);
  });
  it("confirms 1042447600 is invalid", () => {
    expect(method46("1042447600")).toEqual(Result.INVALID);
  });
  it("confirms 1234667990 is invalid", () => {
    expect(method46("1234667990")).toEqual(Result.INVALID);
  });
  it("confirms 1234577900 is invalid", () => {
    expect(method46("1234577900")).toEqual(Result.INVALID);
  });
  it("confirms 34568990 is invalid", () => {
    expect(method46("34568990")).toEqual(Result.INVALID);
  });
});
