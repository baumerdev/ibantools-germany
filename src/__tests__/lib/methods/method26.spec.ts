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

import method26 from "../../../lib/methods/method26";

describe("method 26", () => {
  it("confirms 0520309001 is valid", () => {
    expect(method26("0520309001")).toEqual("VALID");
  });
  it("confirms 1111118111 is valid", () => {
    expect(method26("1111118111")).toEqual("VALID");
  });
  it("confirms 0005501024 is valid", () => {
    expect(method26("0005501024")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0520319001 is invalid", () => {
    expect(method26("0520319001")).toEqual("INVALID");
  });
  it("confirms 1121118111 is invalid", () => {
    expect(method26("1121118111")).toEqual("INVALID");
  });
  it("confirms 1005501024 is invalid", () => {
    expect(method26("1005501024")).toEqual("INVALID");
  });
});
