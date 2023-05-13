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

import method89 from "../../../lib/methods/method89";

describe("method 89", () => {
  it("confirms 599999 is valid (no check digit for 6 or less digits)", () => {
    expect(method89("599999")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("confirms 1000000000 is valid (no check digit for 10 digits)", () => {
    expect(method89("1000000000")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("confirms 1098506 is valid (7 digit numbers)", () => {
    expect(method89("1098506")).toEqual(Result.VALID);
  });
  it("confirms 32028008 is valid (8-9 digit numbers)", () => {
    expect(method89("32028008")).toEqual(Result.VALID);
  });
  it("confirms 218433000 is valid (8-9 digit numbers)", () => {
    expect(method89("218433000")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1097506 is invalid", () => {
    expect(method89("1097506")).toEqual(Result.INVALID);
  });
  it("confirms 32028018 is invalid", () => {
    expect(method89("32028018")).toEqual(Result.INVALID);
  });
  it("confirms 219433000 is invalid", () => {
    expect(method89("219433000")).toEqual(Result.INVALID);
  });
});
