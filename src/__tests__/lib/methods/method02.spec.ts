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

import method02 from "../../../lib/methods/method02";

describe("method 02", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method02("1234567897")).toEqual(Result.VALID);
  });
  it("confirms 5834567890 is valid", () => {
    expect(method02("5834567890")).toEqual(Result.VALID);
  });

  // Check for invalid results
  it("confirms 5234567890 is invalid (two digit check digit)", () => {
    expect(method02("5234567890")).toEqual(Result.INVALID);
  });
  it("confirms 1234667897 is invalid", () => {
    expect(method02("1234667897")).toEqual(Result.INVALID);
  });
});
