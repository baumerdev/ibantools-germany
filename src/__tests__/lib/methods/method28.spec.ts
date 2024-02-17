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

import method28 from "../../../lib/methods/method28";

describe("method 28", () => {
  it("confirms 19999000 is valid (remainder 1)", () => {
    expect(method28("19999000")).toEqual("VALID");
  });
  it("confirms 1234561090 is valid (remainder 0)", () => {
    expect(method28("1234561090")).toEqual("VALID");
  });
  it("confirms 9130000201 is valid", () => {
    expect(method28("9130000201")).toEqual("VALID");
  });
  it("confirms 1234567990 is valid", () => {
    expect(method28("1234567990")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 19999000 is invalid (wrong remainder)", () => {
    expect(method28("19999101")).toEqual("INVALID");
  });
  it("confirms 1234561090 is invalid (wrong remainder)", () => {
    expect(method28("1234561190")).toEqual("INVALID");
  });
  it("confirms 9130100201 is invalid", () => {
    expect(method28("9130100201")).toEqual("INVALID");
  });
  it("confirms 1235567990 is invalid", () => {
    expect(method28("1235567990")).toEqual("INVALID");
  });
});
