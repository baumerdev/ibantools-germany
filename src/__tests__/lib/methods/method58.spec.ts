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

import method58 from "../../../lib/methods/method58";

describe("method 58", () => {
  it("confirms 1800881120 is valid", () => {
    expect(method58("1800881120")).toEqual(Result.VALID);
  });
  it("confirms 9200654108 is valid", () => {
    expect(method58("9200654108")).toEqual(Result.VALID);
  });
  it("confirms 1015222224 is valid", () => {
    expect(method58("1015222224")).toEqual(Result.VALID);
  });
  it("confirms 3703169668 is valid", () => {
    expect(method58("3703169668")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1800981120 is invalid", () => {
    expect(method58("1800981120")).toEqual(Result.INVALID);
  });
  it("confirms 9200654208 is invalid", () => {
    expect(method58("9200654208")).toEqual(Result.INVALID);
  });
  it("confirms 1015232224 is invalid", () => {
    expect(method58("1015232224")).toEqual(Result.INVALID);
  });
  it("confirms 3703169678 is invalid", () => {
    expect(method58("3703169678")).toEqual(Result.INVALID);
  });
});
