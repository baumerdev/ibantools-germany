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

import method34 from "../../../lib/methods/method34";

describe("method 34", () => {
  it("confirms 9913000700 is valid", () => {
    expect(method34("9913000700")).toEqual(Result.VALID);
  });
  it("confirms 9914001000 is valid", () => {
    expect(method34("9914001000")).toEqual(Result.VALID);
  });
  it("confirms 1234567190 is valid", () => {
    expect(method34("1234567190")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 9914000700 is invalid", () => {
    expect(method34("9914000700")).toEqual(Result.INVALID);
  });
  it("confirms 9914002000 is invalid", () => {
    expect(method34("9914002000")).toEqual(Result.INVALID);
  });
  it("confirms 1234667190 is invalid", () => {
    expect(method34("1234667190")).toEqual(Result.INVALID);
  });
});
