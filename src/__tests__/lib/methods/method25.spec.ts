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

import method25 from "../../../lib/methods/method25";

describe("method 25", () => {
  it("confirms 521382181 is valid", () => {
    expect(method25("521382181")).toEqual("VALID");
  });
  it("confirms 123456789 is valid", () => {
    expect(method25("123456789")).toEqual("VALID");
  });
  it("confirms 123456770 is valid (remainder 0)", () => {
    expect(method25("123456770")).toEqual("VALID");
  });
  it("confirms 823456480 is valid (remainder 1)", () => {
    expect(method25("823456480")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 521482181 is invalid", () => {
    expect(method25("521482181")).toEqual("INVALID");
  });
  it("confirms 124456789 is invalid", () => {
    expect(method25("124456789")).toEqual("INVALID");
  });
  it("confirms 123556770 is invalid", () => {
    expect(method25("123556770")).toEqual("INVALID");
  });
  it("confirms 823466480 is invalid", () => {
    expect(method25("823466480")).toEqual("INVALID");
  });
  it("confirms 1234567881 is invalid", () => {
    expect(method25("1234567881")).toEqual("INVALID");
  });
  it("confirms 123456720 is invalid (wrong working number)", () => {
    expect(method25("123456720")).toEqual("INVALID");
  });
});
