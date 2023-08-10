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

import methodA6 from "../../../lib/methods/methodA6";

describe("method A6", () => {
  it("confirms 800048548 is valid (variation 1)", () => {
    expect(methodA6("800048548")).toEqual("VALID");
  });
  it("confirms 0855000014 is valid (variation 1)", () => {
    expect(methodA6("0855000014")).toEqual("VALID");
  });
  it("confirms 17 is valid (variation 2)", () => {
    expect(methodA6("17")).toEqual("VALID");
  });
  it("confirms 55300030 is valid (variation 2)", () => {
    expect(methodA6("55300030")).toEqual("VALID");
  });
  it("confirms 150178033 is valid (variation 2)", () => {
    expect(methodA6("150178033")).toEqual("VALID");
  });
  it("confirms 600003555 is valid (variation 2)", () => {
    expect(methodA6("600003555")).toEqual("VALID");
  });
  it("confirms 900291823 is valid (variation 2)", () => {
    expect(methodA6("900291823")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 860000817 is invalid", () => {
    expect(methodA6("860000817")).toEqual("INVALID");
  });
  it("confirms 810033652 is invalid", () => {
    expect(methodA6("810033652")).toEqual("INVALID");
  });
  it("confirms 305888 is invalid", () => {
    expect(methodA6("305888")).toEqual("INVALID");
  });
  it("confirms 200071280 is invalid", () => {
    expect(methodA6("200071280")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodA6("1234567890")).toEqual("INVALID");
  });
});
