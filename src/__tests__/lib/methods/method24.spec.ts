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

import method24 from "../../../lib/methods/method24";

describe("method 24", () => {
  it("confirms 138301 is valid", () => {
    expect(method24("138301")).toEqual(Result.VALID);
  });
  it("confirms 1306118605 is valid", () => {
    expect(method24("1306118605")).toEqual(Result.VALID);
  });
  it("confirms 6000138301 is valid (special case, begins with 3-6)", () => {
    expect(method24("6000138301")).toEqual(Result.VALID);
  });
  it("confirms 3307118608 is valid (special case, begins with 3-6)", () => {
    expect(method24("3307118608")).toEqual(Result.VALID);
  });
  it("confirms 9990138301 is valid (special case, begins with 9)", () => {
    expect(method24("9990138301")).toEqual(Result.VALID);
  });
  it("confirms 9307118603 is valid (special case, begins with 9)", () => {
    expect(method24("9307118603")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 128301 is invalid", () => {
    expect(method24("128301")).toEqual(Result.INVALID);
  });
  it("confirms 1306118705 is invalid", () => {
    expect(method24("1306118705")).toEqual(Result.INVALID);
  });
  it("confirms 6000139301 is invalid", () => {
    expect(method24("6000139301")).toEqual(Result.INVALID);
  });
  it("confirms 3306118608 is invalid", () => {
    expect(method24("3306118608")).toEqual(Result.INVALID);
  });
  it("confirms 9991138301 is invalid", () => {
    expect(method24("9991138301")).toEqual(Result.INVALID);
  });
  it("confirms 9307118613 is invalid", () => {
    expect(method24("9307118613")).toEqual(Result.INVALID);
  });
});
