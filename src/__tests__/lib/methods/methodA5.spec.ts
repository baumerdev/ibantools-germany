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

import methodA5 from "../../../lib/methods/methodA5";

describe("method A5", () => {
  it("confirms 9941510001 is valid (variation 1)", () => {
    expect(methodA5("9941510001")).toEqual(Result.VALID);
  });
  it("confirms 9961230019 is valid (variation 1)", () => {
    expect(methodA5("9961230019")).toEqual(Result.VALID);
  });
  it("confirms 9380027210 is valid (variation 1)", () => {
    expect(methodA5("9380027210")).toEqual(Result.VALID);
  });
  it("confirms 9932290910 is valid (variation 1)", () => {
    expect(methodA5("9932290910")).toEqual(Result.VALID);
  });
  it("confirms 0000251437 is valid (variation 2)", () => {
    expect(methodA5("0000251437")).toEqual(Result.VALID);
  });
  it("confirms 0007948344 is valid (variation 2)", () => {
    expect(methodA5("0007948344")).toEqual(Result.VALID);
  });
  it("confirms 0000159590 is valid (variation 2)", () => {
    expect(methodA5("0000159590")).toEqual(Result.VALID);
  });
  it("confirms 0000051640 is valid (variation 2)", () => {
    expect(methodA5("0000051640")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 9941510002 is invalid", () => {
    expect(methodA5("9941510002")).toEqual(Result.INVALID);
  });
  it("confirms 9961230020 is invalid", () => {
    expect(methodA5("9961230020")).toEqual(Result.INVALID);
  });
  it("confirms 0000251438 is invalid", () => {
    expect(methodA5("0000251438")).toEqual(Result.INVALID);
  });
  it("confirms 0007948345 is invalid", () => {
    expect(methodA5("0007948345")).toEqual(Result.INVALID);
  });
});
