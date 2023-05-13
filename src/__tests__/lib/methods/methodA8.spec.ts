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

import methodA8 from "../../../lib/methods/methodA8";

describe("method A8", () => {
  it("confirms 7436661 is valid (variation 1)", () => {
    expect(methodA8("7436661")).toEqual(Result.VALID);
  });
  it("confirms 7436670 is valid (variation 1)", () => {
    expect(methodA8("7436670")).toEqual(Result.VALID);
  });
  it("confirms 1359100 is valid (variation 1)", () => {
    expect(methodA8("1359100")).toEqual(Result.VALID);
  });
  it("confirms 7436660 is valid (variation 2)", () => {
    expect(methodA8("7436660")).toEqual(Result.VALID);
  });
  it("confirms 7436678 is valid (variation 2)", () => {
    expect(methodA8("7436678")).toEqual(Result.VALID);
  });
  it("confirms 0003503398 is valid (variation 2)", () => {
    expect(methodA8("0003503398")).toEqual(Result.VALID);
  });
  it("confirms 0001340967 is valid (variation 2)", () => {
    expect(methodA8("0001340967")).toEqual(Result.VALID);
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(methodA8("0199100002")).toEqual(Result.VALID);
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(methodA8("0099100010")).toEqual(Result.VALID);
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(methodA8("2599100002")).toEqual(Result.VALID);
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(methodA8("0199100004")).toEqual(Result.VALID);
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(methodA8("2599100003")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 7436666 is invalid", () => {
    expect(methodA8("7436666")).toEqual(Result.INVALID);
  });
  it("confirms 7436677 is invalid", () => {
    expect(methodA8("7436677")).toEqual(Result.INVALID);
  });
  it("confirms 0003503391 is invalid", () => {
    expect(methodA8("0003503391")).toEqual(Result.INVALID);
  });
  it("confirms 0001340966 is invalid", () => {
    expect(methodA8("0001340966")).toEqual(Result.INVALID);
  });
});
