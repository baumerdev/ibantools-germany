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

import methodE4 from "../../../lib/methods/methodE4";

describe("method E4", () => {
  it("confirms 1501836 is valid (variation 1)", () => {
    expect(methodE4("1501836")).toEqual("VALID");
  });
  it("confirms 9290702 is valid (variation 1)", () => {
    expect(methodE4("9290702")).toEqual("VALID");
  });
  it("confirms 539290858 is valid (variation 1)", () => {
    expect(methodE4("539290858")).toEqual("VALID");
  });
  it("confirms 1501824 is valid (variation 2)", () => {
    expect(methodE4("1501824")).toEqual("VALID");
  });
  it("confirms 1501832 is valid (variation 2)", () => {
    expect(methodE4("1501832")).toEqual("VALID");
  });
  it("confirms 9290701 is valid (variation 2)", () => {
    expect(methodE4("9290701")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 12345007 is invalid", () => {
    expect(methodE4("12345007")).toEqual("INVALID");
  });
  it("confirms 87654005 is invalid", () => {
    expect(methodE4("87654005")).toEqual("INVALID");
  });
  it("confirms 12345007 is invalid", () => {
    expect(methodE4("12345007")).toEqual("INVALID");
  });
  it("confirms 87654005 is invalid", () => {
    expect(methodE4("87654005")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodE4("1234567890")).toEqual("INVALID");
  });
});
