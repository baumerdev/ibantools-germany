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

import method19 from "../../../lib/methods/method19";

describe("method 19", () => {
  it("confirms 0240334000 is valid", () => {
    expect(method19("0240334000")).toEqual(Result.VALID);
  });
  it("confirms 0200520016 is valid", () => {
    expect(method19("0200520016")).toEqual(Result.VALID);
  });
  it("confirms 1234567898 is valid", () => {
    expect(method19("1234567898")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0240434000 is invalid", () => {
    expect(method19("0240434000")).toEqual(Result.INVALID);
  });
  it("confirms 0200620016 is invalid", () => {
    expect(method19("0200620016")).toEqual(Result.INVALID);
  });
  it("confirms 1234577898 is invalid", () => {
    expect(method19("1234577898")).toEqual(Result.INVALID);
  });
});
