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

import method10 from "../../../lib/methods/method10";

describe("method 10", () => {
  it("confirms 12345008 is valid", () => {
    expect(method10("12345008")).toEqual(Result.VALID);
  });
  it("confirms 87654008 is valid", () => {
    expect(method10("87654008")).toEqual(Result.VALID);
  });
  it("confirms 1234567890 is valid", () => {
    expect(method10("1234567890")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 12346008 is invalid", () => {
    expect(method10("12346008")).toEqual(Result.INVALID);
  });
  it("confirms 87656008 is invalid", () => {
    expect(method10("87656008")).toEqual(Result.INVALID);
  });
  it("confirms 1234577890 is invalid", () => {
    expect(method10("1234577890")).toEqual(Result.INVALID);
  });
});
