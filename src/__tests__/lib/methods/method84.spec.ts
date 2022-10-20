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

import method84 from "../../../lib/methods/method84";

describe("method 84", () => {
  it("confirms 240699 is valid (variation 1)", () => {
    expect(method84("240699")).toEqual(Result.VALID);
  });
  it("confirms 350982 is valid (variation 1)", () => {
    expect(method84("350982")).toEqual(Result.VALID);
  });
  it("confirms 461059 is valid (variation 1)", () => {
    expect(method84("461059")).toEqual(Result.VALID);
  });
  it("confirms 240692 is valid (variation 2)", () => {
    expect(method84("240692")).toEqual(Result.VALID);
  });
  it("confirms 350985 is valid (variation 2)", () => {
    expect(method84("350985")).toEqual(Result.VALID);
  });
  it("confirms 461052 is valid (variation 2)", () => {
    expect(method84("461052")).toEqual(Result.VALID);
  });
  it("confirms 240961 is valid (variation 3)", () => {
    expect(method84("240961")).toEqual(Result.VALID);
  });
  it("confirms 350984 is valid (variation 3)", () => {
    expect(method84("350984")).toEqual(Result.VALID);
  });
  it("confirms 461054 is valid (variation 3)", () => {
    expect(method84("461054")).toEqual(Result.VALID);
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(method84("0199100002")).toEqual(Result.VALID);
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(method84("0099100010")).toEqual(Result.VALID);
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(method84("2599100002")).toEqual(Result.VALID);
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(method84("0199100004")).toEqual(Result.VALID);
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(method84("2599100003")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 240965 is invalid", () => {
    expect(method84("240965")).toEqual(Result.INVALID);
  });
  it("confirms 350980 is invalid", () => {
    expect(method84("350980")).toEqual(Result.INVALID);
  });
  it("confirms 461053 is invalid", () => {
    expect(method84("461053")).toEqual(Result.INVALID);
  });
});
