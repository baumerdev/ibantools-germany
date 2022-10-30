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

import methodD2 from "../../../lib/methods/methodD2";

describe("method D2", () => {
  it("confirms 189912137 is valid (variation 1)", () => {
    expect(methodD2("189912137")).toEqual(Result.VALID);
  });
  it("confirms 235308215 is valid (variation 1)", () => {
    expect(methodD2("235308215")).toEqual(Result.VALID);
  });
  it("confirms 4455667784 is valid (variation 2)", () => {
    expect(methodD2("4455667784")).toEqual(Result.VALID);
  });
  it("confirms 1234567897 is valid (variation 2)", () => {
    expect(methodD2("1234567897")).toEqual(Result.VALID);
  });
  it("confirms 51181008 is valid (variation 3)", () => {
    expect(methodD2("51181008")).toEqual(Result.VALID);
  });
  it("confirms 71214205 is valid (variation 3)", () => {
    expect(methodD2("71214205")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 6414241 is invalid", () => {
    expect(methodD2("6414241")).toEqual(Result.INVALID);
  });
  it("confirms 179751314 is invalid", () => {
    expect(methodD2("179751314")).toEqual(Result.INVALID);
  });
  it("confirms 6414241 is invalid", () => {
    expect(methodD2("6414241")).toEqual(Result.INVALID);
  });
  it("confirms 179751314 is invalid", () => {
    expect(methodD2("179751314")).toEqual(Result.INVALID);
  });
  it("confirms 6414241 is invalid", () => {
    expect(methodD2("6414241")).toEqual(Result.INVALID);
  });
  it("confirms 179751314 is invalid", () => {
    expect(methodD2("179751314")).toEqual(Result.INVALID);
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodD2("1234567890")).toEqual(Result.INVALID);
  });
});
