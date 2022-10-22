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

import method13 from "../../../lib/methods/method13";

describe("method 13", () => {
  it("confirms 12345676 is valid", () => {
    expect(method13("12345676")).toEqual(Result.VALID);
  });
  it("confirms 1234567600 is valid", () => {
    expect(method13("1234567600")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 12355676 is invalid", () => {
    expect(method13("12355676")).toEqual(Result.INVALID);
  });
  it("confirms 1244567600 is invalid", () => {
    expect(method13("1244567600")).toEqual(Result.INVALID);
  });
});
