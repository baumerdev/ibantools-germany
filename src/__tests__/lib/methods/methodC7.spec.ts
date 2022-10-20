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

import methodC7 from "../../../lib/methods/methodC7";

describe("method C7", () => {
  it("confirms 3500022 is valid (variation 1)", () => {
    expect(methodC7("3500022")).toEqual(Result.VALID);
  });
  it("confirms 38150900 is valid (variation 1)", () => {
    expect(methodC7("38150900")).toEqual(Result.VALID);
  });
  it("confirms 600103660 is valid (variation 1)", () => {
    expect(methodC7("600103660")).toEqual(Result.VALID);
  });
  it("confirms 39101181 is valid (variation 1)", () => {
    expect(methodC7("39101181")).toEqual(Result.VALID);
  });
  it("confirms 94012341 is valid (variation 2)", () => {
    expect(methodC7("94012341")).toEqual(Result.VALID);
  });
  it("confirms 5073321010 is valid (variation 2)", () => {
    expect(methodC7("5073321010")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 3500042 is invalid", () => {
    expect(methodC7("3500042")).toEqual(Result.INVALID);
  });
  it("confirms 1234517892 is invalid", () => {
    expect(methodC7("1234517892")).toEqual(Result.INVALID);
  });
  it("confirms 987614325 is invalid", () => {
    expect(methodC7("987614325")).toEqual(Result.INVALID);
  });
});
