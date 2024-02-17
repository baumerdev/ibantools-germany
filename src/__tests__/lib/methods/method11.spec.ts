/**
 * ibantools-germany
 * Copyright (C) 2022-2024 Markus Baumer <markus@baumer.dev>
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

import method11 from "../../../lib/methods/method11";

describe("method 11", () => {
  it("confirms 3234567891 is valid", () => {
    expect(method11("3234567891")).toEqual("VALID");
  });
  it("confirms 2234567890 is valid", () => {
    expect(method11("2234567890")).toEqual("VALID");
  });
  it("confirms 1234567899 is valid", () => {
    expect(method11("1234567899")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3234667891 is invalid", () => {
    expect(method11("3234667891")).toEqual("INVALID");
  });
  it("confirms 2235567890 is invalid", () => {
    expect(method11("2235567890")).toEqual("INVALID");
  });
  it("confirms 1244567899 is invalid", () => {
    expect(method11("1244567899")).toEqual("INVALID");
  });
});
