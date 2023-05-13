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

import methodA2 from "../../../lib/methods/methodA2";

describe("method A2", () => {
  it("confirms 3456789019 is valid (variation 1)", () => {
    expect(methodA2("3456789019")).toEqual(Result.VALID);
  });
  it("confirms 5678901231 is valid (variation 1)", () => {
    expect(methodA2("5678901231")).toEqual(Result.VALID);
  });
  it("confirms 6789012348 is valid (variation 1)", () => {
    expect(methodA2("6789012348")).toEqual(Result.VALID);
  });
  it("confirms 3456789012 is valid (variation 2)", () => {
    expect(methodA2("3456789012")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1234567890 is invalid (variation 1)", () => {
    expect(methodA2("1234567890")).toEqual(Result.INVALID);
  });
  it("confirms 1234567890 is invalid (variation 2)", () => {
    expect(methodA2("1234567890")).toEqual(Result.INVALID);
  });
  it("confirms 0123456789 is invalid (variation 2)", () => {
    expect(methodA2("0123456789")).toEqual(Result.INVALID);
  });
});
