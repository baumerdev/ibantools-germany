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

import method48 from "../../../lib/methods/method48";

describe("method 48", () => {
  it("confirms 1234567810 is valid", () => {
    expect(method48("1234567810")).toEqual(Result.VALID);
  });
  it("confirms 1234567819 is valid", () => {
    expect(method48("1234567819")).toEqual(Result.VALID);
  });
  it("confirms 34567810 is valid", () => {
    expect(method48("34567810")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1235567810 is invalid", () => {
    expect(method48("1235567810")).toEqual(Result.INVALID);
  });
  it("confirms 1234667819 is invalid", () => {
    expect(method48("1234667819")).toEqual(Result.INVALID);
  });
  it("confirms 34577810 is invalid", () => {
    expect(method48("34577810")).toEqual(Result.INVALID);
  });
});
