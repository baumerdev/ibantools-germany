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

import methodC2 from "../../../lib/methods/methodC2";

describe("method C2", () => {
  it("confirms 2394871426 is valid (variation 1)", () => {
    expect(methodC2("2394871426")).toEqual(Result.VALID);
  });
  it("confirms 4218461950 is valid (variation 1)", () => {
    expect(methodC2("4218461950")).toEqual(Result.VALID);
  });
  it("confirms 7352569148 is valid (variation 1)", () => {
    expect(methodC2("7352569148")).toEqual(Result.VALID);
  });
  it("confirms 5127485166 is valid (variation 2)", () => {
    expect(methodC2("5127485166")).toEqual(Result.VALID);
  });
  it("confirms 8738142564 is valid (variation 2)", () => {
    expect(methodC2("8738142564")).toEqual(Result.VALID);
  });
  it("confirms 0076543216 is valid (variation 3)", () => {
    expect(methodC2("0076543216")).toEqual(Result.VALID);
  });
  it("confirms 3456789012 is valid (variation 3)", () => {
    expect(methodC2("3456789012")).toEqual(Result.VALID);
  });
  it("confirms 9024675138 is valid (variation 3)", () => {
    expect(methodC2("9024675138")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual(Result.INVALID);
  });
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual(Result.INVALID);
  });
  it("confirms 9024675131 is invalid", () => {
    expect(methodC2("9024675131")).toEqual(Result.INVALID);
  });
  it("confirms 7352569145 is invalid", () => {
    expect(methodC2("7352569145")).toEqual(Result.INVALID);
  });
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual(Result.INVALID);
  });
  it("confirms 9024675131 is invalid", () => {
    expect(methodC2("9024675131")).toEqual(Result.INVALID);
  });
  it("confirms 7352569145 is invalid", () => {
    expect(methodC2("7352569145")).toEqual(Result.INVALID);
  });
  it("confirms 0328705282 is invalid", () => {
    expect(methodC2("0328705282")).toEqual(Result.INVALID);
  });
  it("confirms 7352569145 is invalid", () => {
    expect(methodC2("7352569145")).toEqual(Result.INVALID);
  });
  it("confirms 9024675131 is invalid", () => {
    expect(methodC2("9024675131")).toEqual(Result.INVALID);
  });
});
