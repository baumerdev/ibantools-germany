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

import method40 from "../../../lib/methods/method40";

describe("method 40", () => {
  it("confirms 1258345 is valid", () => {
    expect(method40("1258345")).toEqual(Result.VALID);
  });
  it("confirms 3231963 is valid", () => {
    expect(method40("3231963")).toEqual(Result.VALID);
  });
  it("confirms 1234567899 is valid", () => {
    expect(method40("1234567899")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1358345 is invalid", () => {
    expect(method40("1358345")).toEqual(Result.INVALID);
  });
  it("confirms 3232963 is invalid", () => {
    expect(method40("3232963")).toEqual(Result.INVALID);
  });
  it("confirms 1234568899 is invalid", () => {
    expect(method40("1234568899")).toEqual(Result.INVALID);
  });
});
