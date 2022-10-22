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

import method17 from "../../../lib/methods/method17";

describe("method 17", () => {
  it("confirms 1234563811 is valid", () => {
    expect(method17("1234567990")).toEqual(Result.VALID);
  });
  it("confirms 0446786040 is valid (remainder 0)", () => {
    expect(method17("0446786040")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1235563811 is invalid", () => {
    expect(method17("1235567990")).toEqual(Result.INVALID);
  });
  it("confirms 0446886040 is invalid", () => {
    expect(method17("0446886040")).toEqual(Result.INVALID);
  });
});
