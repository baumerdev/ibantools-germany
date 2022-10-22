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

import method18 from "../../../lib/methods/method18";

describe("method 18", () => {
  it("confirms 1234567899 is valid", () => {
    expect(method18("1234567899")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1234557899 is invalid", () => {
    expect(method18("1234557899")).toEqual(Result.INVALID);
  });
});
