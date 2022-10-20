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

import method91 from "../../../lib/methods/method91";

describe("method 91", () => {
  it("confirms 2974118000 is valid (variation 1)", () => {
    expect(method91("2974118000")).toEqual(Result.VALID);
  });
  it("confirms 5281741000 is valid (variation 1)", () => {
    expect(method91("5281741000")).toEqual(Result.VALID);
  });
  it("confirms 9952810000 is valid (variation 1)", () => {
    expect(method91("9952810000")).toEqual(Result.VALID);
  });
  it("confirms 2974117000 is valid (variation 2)", () => {
    expect(method91("2974117000")).toEqual(Result.VALID);
  });
  it("confirms 5281770000 is valid (variation 2)", () => {
    expect(method91("5281770000")).toEqual(Result.VALID);
  });
  it("confirms 9952812000 is valid (variation 2)", () => {
    expect(method91("9952812000")).toEqual(Result.VALID);
  });
  it("confirms 8840019000 is valid (variation 3)", () => {
    expect(method91("8840019000")).toEqual(Result.VALID);
  });
  it("confirms 8840050000 is valid (variation 3)", () => {
    expect(method91("8840050000")).toEqual(Result.VALID);
  });
  it("confirms 8840087000 is valid (variation 3)", () => {
    expect(method91("8840087000")).toEqual(Result.VALID);
  });
  it("confirms 8840045000 is valid (variation 3)", () => {
    expect(method91("8840045000")).toEqual(Result.VALID);
  });
  it("confirms 8840012000 is valid (variation 4)", () => {
    expect(method91("8840012000")).toEqual(Result.VALID);
  });
  it("confirms 8840055000 is valid (variation 4)", () => {
    expect(method91("8840055000")).toEqual(Result.VALID);
  });
  it("confirms 8840080000 is valid (variation 4)", () => {
    expect(method91("8840080000")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 2984118000 is invalid", () => {
    expect(method91("2984118000")).toEqual(Result.INVALID);
  });
  it("confirms 2984117000 is invalid", () => {
    expect(method91("2984117000")).toEqual(Result.INVALID);
  });
  it("confirms 8850019000 is invalid", () => {
    expect(method91("8850019000")).toEqual(Result.INVALID);
  });
  it("confirms 8850012000 is invalid", () => {
    expect(method91("8850012000")).toEqual(Result.INVALID);
  });
});
