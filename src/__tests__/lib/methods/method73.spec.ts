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

import method73 from "../../../lib/methods/method73";

describe("method 73", () => {
  it("confirms 0003503398 is valid (variation 1)", () => {
    expect(method73("0003503398")).toEqual(Result.VALID);
  });
  it("confirms 0001340967 is valid (variation 1)", () => {
    expect(method73("0001340967")).toEqual(Result.VALID);
  });
  it("confirms 0003503391 is valid (variation 2)", () => {
    expect(method73("0003503391")).toEqual(Result.VALID);
  });
  it("confirms 0003503392 is valid (variation 3)", () => {
    expect(method73("0003503392")).toEqual(Result.VALID);
  });
  it("confirms 123456 is valid (variation 3)", () => {
    expect(method73("123456")).toEqual(Result.VALID);
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(method73("0199100002")).toEqual(Result.VALID);
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(method73("0099100010")).toEqual(Result.VALID);
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(method73("2599100002")).toEqual(Result.VALID);
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(method73("0199100004")).toEqual(Result.VALID);
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(method73("2599100003")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0003503397 is invalid (wrong digit, variation 1)", () => {
    expect(method73("0003503397")).toEqual(Result.INVALID);
  });
  it("confirms 0001240967 is invalid (wrong digit, variation 1)", () => {
    expect(method73("0001240967")).toEqual(Result.INVALID);
  });
  it("confirms 0003603391 is invalid (wrong digit, variation 2)", () => {
    expect(method73("0003603391")).toEqual(Result.INVALID);
  });
  it("confirms 121212 is invalid (wrong digit, variation 3)", () => {
    expect(method73("121212")).toEqual(Result.INVALID);
  });
  it("confirms 987654321 is invalid (wrong digit, variation 3)", () => {
    expect(method73("987654321")).toEqual(Result.INVALID);
  });
  it("confirms 1234567890 is invalid (wrong digit, variation 3)", () => {
    expect(method73("1234567890")).toEqual(Result.INVALID);
  });
});
