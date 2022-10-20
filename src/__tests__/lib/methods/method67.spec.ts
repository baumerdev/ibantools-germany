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

import method67 from "../../../lib/methods/method67";

describe("method 67", () => {
  it("confirms 1234567490 is valid", () => {
    expect(method67("1234567490")).toEqual(Result.VALID);
  });
  it("confirms 1234567400 is valid", () => {
    expect(method67("1234567400")).toEqual(Result.VALID);
  });

  //  Check for invalid result
  it("confirms 1235567490 is invalid", () => {
    expect(method67("1235567490")).toEqual(Result.INVALID);
  });
  it("confirms 1334567400 is invalid", () => {
    expect(method67("1334567400")).toEqual(Result.INVALID);
  });
});
