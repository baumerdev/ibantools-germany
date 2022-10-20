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

import methodA7 from "../../../lib/methods/methodA7";

describe("method A7", () => {
  it("confirms 19010008 is valid (variation 1)", () => {
    expect(methodA7("19010008")).toEqual(Result.VALID);
  });
  it("confirms 19010438 is valid (variation 1)", () => {
    expect(methodA7("19010438")).toEqual(Result.VALID);
  });
  it("confirms 19010660 is valid (variation 2)", () => {
    expect(methodA7("19010660")).toEqual(Result.VALID);
  });
  it("confirms 19010876 is valid (variation 2)", () => {
    expect(methodA7("19010876")).toEqual(Result.VALID);
  });
  it("confirms 209010892 is valid (variation 2)", () => {
    expect(methodA7("209010892")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 209010893 is invalid", () => {
    expect(methodA7("209010893")).toEqual(Result.INVALID);
  });
  it("confirms 209010893 is invalid", () => {
    expect(methodA7("209010893")).toEqual(Result.INVALID);
  });
});
