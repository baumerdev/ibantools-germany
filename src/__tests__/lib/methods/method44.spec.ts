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

import method44 from "../../../lib/methods/method44";

describe("method 44", () => {
  it("confirms 889006 is valid", () => {
    expect(method44("889006")).toEqual(Result.VALID);
  });
  it("confirms 2618040504 is valid", () => {
    expect(method44("2618040504")).toEqual(Result.VALID);
  });
  it("confirms 1234567891 is valid", () => {
    expect(method44("1234567891")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 889106 is invalid", () => {
    expect(method44("889106")).toEqual(Result.INVALID);
  });
  it("confirms 2618040514 is invalid", () => {
    expect(method44("2618040514")).toEqual(Result.INVALID);
  });
  it("confirms 1234566891 is invalid", () => {
    expect(method44("1234566891")).toEqual(Result.INVALID);
  });
});
