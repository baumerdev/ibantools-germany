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

import method08 from "../../../lib/methods/method08";

describe("method 08", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method08("1234567897")).toEqual(Result.VALID);
  });

  // Check for no check digit
  it("has no check digit calculation for 59999", () => {
    expect(method08("59999")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });

  // Check for invalid result
  it("confirms 1235567897 is invalid", () => {
    expect(method08("1235567897")).toEqual(Result.INVALID);
  });
});
