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

import method29 from "../../../lib/methods/method29";

describe("method 29", () => {
  it("confirms 3145863029 is valid", () => {
    expect(method29("3145863029")).toEqual(Result.VALID);
  });
  it("confirms 1234567895 is valid", () => {
    expect(method29("1234567895")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 3145763029 is invalid", () => {
    expect(method29("3145763029")).toEqual(Result.INVALID);
  });
  it("confirms 1235567895 is invalid", () => {
    expect(method29("1235567895")).toEqual(Result.INVALID);
  });
});
