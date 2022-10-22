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

import method71 from "../../../lib/methods/method71";

describe("method 71", () => {
  it("confirms 7101234007 is valid", () => {
    expect(method71("7101234007")).toEqual(Result.VALID);
  });
  it("confirms 0246786040 is valid (no remainder)", () => {
    expect(method71("0246786040")).toEqual(Result.VALID);
  });
  it("confirms 0446786041 is valid (remainder 1)", () => {
    expect(method71("0446786041")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 7101235007 is invalid", () => {
    expect(method71("7101235007")).toEqual(Result.INVALID);
  });
  it("confirms 0246886040 is invalid", () => {
    expect(method71("0246886040")).toEqual(Result.INVALID);
  });
  it("confirms 0346786041 is invalid", () => {
    expect(method71("0346786041")).toEqual(Result.INVALID);
  });
});
