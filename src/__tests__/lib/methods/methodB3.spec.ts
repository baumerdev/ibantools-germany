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

import methodB3 from "../../../lib/methods/methodB3";

describe("method B3", () => {
  it("confirms 1000000060 is valid (variation 1)", () => {
    expect(methodB3("1000000060")).toEqual("VALID");
  });
  it("confirms 0000000140 is valid (variation 1)", () => {
    expect(methodB3("0000000140")).toEqual("VALID");
  });
  it("confirms 0000000019 is valid (variation 1)", () => {
    expect(methodB3("0000000019")).toEqual("VALID");
  });
  it("confirms 1002798417 is valid (variation 1)", () => {
    expect(methodB3("1002798417")).toEqual("VALID");
  });
  it("confirms 8409915001 is valid (variation 1)", () => {
    expect(methodB3("8409915001")).toEqual("VALID");
  });
  it("confirms 9635000101 is valid (variation 2)", () => {
    expect(methodB3("9635000101")).toEqual("VALID");
  });
  it("confirms 9730200100 is valid (variation 2)", () => {
    expect(methodB3("9730200100")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0002799899 is invalid", () => {
    expect(methodB3("0002799899")).toEqual("INVALID");
  });
  it("confirms 1000000111 is invalid", () => {
    expect(methodB3("1000000111")).toEqual("INVALID");
  });
  it("confirms 9635100101 is invalid", () => {
    expect(methodB3("9635100101")).toEqual("INVALID");
  });
  it("confirms 9730300100 is invalid", () => {
    expect(methodB3("9730300100")).toEqual("INVALID");
  });
});
