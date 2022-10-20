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

import method47 from "../../../lib/methods/method47";

describe("method 47", () => {
  it("confirms 1018000 is valid", () => {
    expect(method47("1018000")).toEqual(Result.VALID);
  });
  it("confirms 1003554450 is valid", () => {
    expect(method47("1003554450")).toEqual(Result.VALID);
  });
  it("confirms 1234567800 is valid", () => {
    expect(method47("1234567800")).toEqual(Result.VALID);
  });
  it("confirms 1234567809 is valid", () => {
    expect(method47("1234567809")).toEqual(Result.VALID);
  });
  it("confirms 4567800 is valid", () => {
    expect(method47("4567800")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1028000 is invalid", () => {
    expect(method47("1028000")).toEqual(Result.INVALID);
  });
  it("confirms 1003555450 is invalid", () => {
    expect(method47("1003555450")).toEqual(Result.INVALID);
  });
  it("confirms 1235567800 is invalid", () => {
    expect(method47("1235567800")).toEqual(Result.INVALID);
  });
  it("confirms 1234568809 is invalid", () => {
    expect(method47("1234568809")).toEqual(Result.INVALID);
  });
  it("confirms 4667800 is invalid", () => {
    expect(method47("4667800")).toEqual(Result.INVALID);
  });
});
