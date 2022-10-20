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

import method99 from "../../../lib/methods/method99";

describe("method 99", () => {
  it("confirms 0068007003 is valid", () => {
    expect(method99("0068007003")).toEqual(Result.VALID);
  });
  it("confirms 0847321750 is valid", () => {
    expect(method99("0847321750")).toEqual(Result.VALID);
  });
  it("has no check digit calculation for 0396000000", () => {
    expect(method99("0396000000")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 0499999999", () => {
    expect(method99("0499999999")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });

  // Check for invalid result
  it("confirms 0068008003 is invalid", () => {
    expect(method99("0068008003")).toEqual(Result.INVALID);
  });
  it("confirms 0847221750 is invalid", () => {
    expect(method99("0847221750")).toEqual(Result.INVALID);
  });
  it("confirms 0395999999 is invalid", () => {
    expect(method99("0395999999")).toEqual(Result.INVALID);
  });
  it("confirms 500000000 is invalid", () => {
    expect(method99("500000000")).toEqual(Result.INVALID);
  });
});
