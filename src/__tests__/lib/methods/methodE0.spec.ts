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

import methodE0 from "../../../lib/methods/methodE0";

describe("method E0", () => {
  it("confirms 1234568013 is valid", () => {
    expect(methodE0("1234568013")).toEqual(Result.VALID);
  });
  it("confirms 1534568010 is valid", () => {
    expect(methodE0("1534568010")).toEqual(Result.VALID);
  });
  it("confirms 2610015 is valid", () => {
    expect(methodE0("2610015")).toEqual(Result.VALID);
  });
  it("confirms 8741013011 is valid", () => {
    expect(methodE0("8741013011")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1234769013 is invalid", () => {
    expect(methodE0("1234769013")).toEqual(Result.INVALID);
  });
  it("confirms 2710014 is invalid", () => {
    expect(methodE0("2710014")).toEqual(Result.INVALID);
  });
  it("confirms 9741015011 is invalid", () => {
    expect(methodE0("9741015011")).toEqual(Result.INVALID);
  });
});
