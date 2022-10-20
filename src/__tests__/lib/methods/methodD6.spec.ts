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

import methodD6 from "../../../lib/methods/methodD6";

describe("method D6", () => {
  it("confirms 3601671056 is valid (variation 1)", () => {
    expect(methodD6("3601671056")).toEqual(Result.VALID);
  });
  it("confirms 4402001046 is valid (variation 1)", () => {
    expect(methodD6("4402001046")).toEqual(Result.VALID);
  });
  it("confirms 6100268241 is valid (variation 1)", () => {
    expect(methodD6("6100268241")).toEqual(Result.VALID);
  });
  it("confirms 7001000681 is valid (variation 2)", () => {
    expect(methodD6("7001000681")).toEqual(Result.VALID);
  });
  it("confirms 9000111105 is valid (variation 2)", () => {
    expect(methodD6("9000111105")).toEqual(Result.VALID);
  });
  it("confirms 9001291005 is valid (variation 2)", () => {
    expect(methodD6("9001291005")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 3615071237 is invalid", () => {
    expect(methodD6("3615071237")).toEqual(Result.INVALID);
  });
  it("confirms 6039267013 is invalid", () => {
    expect(methodD6("6039267013")).toEqual(Result.INVALID);
  });
  it("confirms 6039316014 is invalid", () => {
    expect(methodD6("6039316014")).toEqual(Result.INVALID);
  });
  it("confirms 7004017653 is invalid", () => {
    expect(methodD6("7004017653")).toEqual(Result.INVALID);
  });
  it("confirms 9002720007 is invalid", () => {
    expect(methodD6("9002720007")).toEqual(Result.INVALID);
  });
  it("confirms 9017483524 is invalid", () => {
    expect(methodD6("9017483524")).toEqual(Result.INVALID);
  });
});
