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

import method16 from "../../../lib/methods/method16";

describe("method 16", () => {
  it("confirms 1134567895 is valid", () => {
    expect(method16("1134567895")).toEqual("VALID");
  });
  it("confirms 1234563811 is valid (special, remainder 1)", () => {
    expect(method16("1234563811")).toEqual("VALID");
  });
  it("confirms 1234567841 is valid (default, remainder 1)", () => {
    expect(method16("1234567841")).toEqual("VALID");
  });
  it("confirms 1234568499 is valid (special, remainder 1)", () => {
    expect(method16("1234568499")).toEqual("VALID");
  });
  // Check for invalid result
  it("confirms 1135567895 is invalid", () => {
    expect(method16("1135567895")).toEqual("INVALID");
  });
  it("confirms 1234563821 is invalid", () => {
    expect(method16("1234563821")).toEqual("INVALID");
  });
  it("confirms 1235567841 is invalid", () => {
    expect(method16("1235567841")).toEqual("INVALID");
  });
});
