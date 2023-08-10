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

import method00 from "../../../lib/methods/method00";

describe("method 00", () => {
  it("confirms 9290701 is valid", () => {
    expect(method00("9290701")).toEqual("VALID");
  });
  it("confirms 539290858 is valid", () => {
    expect(method00("539290858")).toEqual("VALID");
  });
  it("confirms 1501824 is valid", () => {
    expect(method00("1501824")).toEqual("VALID");
  });
  it("confirms 1501832 is valid", () => {
    expect(method00("1501832")).toEqual("VALID");
  });
  it("confirms 1234567897 is valid", () => {
    expect(method00("1234567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9290801 is invalid", () => {
    expect(method00("9290801")).toEqual("INVALID");
  });
  it("confirms 539190858 is invalid", () => {
    expect(method00("539190858")).toEqual("INVALID");
  });
  it("confirms 1601824 is invalid", () => {
    expect(method00("1601824")).toEqual("INVALID");
  });
  it("confirms 1501842 is invalid", () => {
    expect(method00("1501842")).toEqual("INVALID");
  });
  it("confirms 1234667897 is invalid", () => {
    expect(method00("1234667897")).toEqual("INVALID");
  });
});
