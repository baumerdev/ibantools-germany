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

import method60 from "../../../lib/methods/method60";

describe("method 60", () => {
  it("confirms 1234567891 is valid", () => {
    expect(method60("1234567891")).toEqual(Result.VALID);
  });
  it("confirms 34567891 is valid", () => {
    expect(method60("34567891")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1235567891 is invalid", () => {
    expect(method60("1235567891")).toEqual(Result.INVALID);
  });
  it("confirms 34567881 is invalid", () => {
    expect(method60("34567881")).toEqual(Result.INVALID);
  });
});
