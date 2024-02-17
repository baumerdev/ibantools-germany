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

import methodD8 from "../../../lib/methods/methodD8";

describe("method D8", () => {
  it("confirms 1403414848 is valid (variation 1)", () => {
    expect(methodD8("1403414848")).toEqual("VALID");
  });
  it("confirms 6800000439 is valid (variation 1)", () => {
    expect(methodD8("6800000439")).toEqual("VALID");
  });
  it("confirms 6899999954 is valid (variation 1)", () => {
    expect(methodD8("6899999954")).toEqual("VALID");
  });
  it("has no check digit calculation for 0010000000", () => {
    expect(methodD8("0010000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0099999999", () => {
    expect(methodD8("0099999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 3012084101 is invalid", () => {
    expect(methodD8("3012084101")).toEqual("INVALID");
  });
  it("confirms 1062813622 is invalid", () => {
    expect(methodD8("1062813622")).toEqual("INVALID");
  });
  it("confirms 0000260986 is invalid", () => {
    expect(methodD8("0000260986")).toEqual("INVALID");
  });
  it("confirms 0009999999 is invalid", () => {
    expect(methodD8("0009999999")).toEqual("INVALID");
  });
  it("confirms 0100000000 is invalid", () => {
    expect(methodD8("0100000000")).toEqual("INVALID");
  });
  it("confirms 0009999999 is invalid", () => {
    expect(methodD8("0009999999")).toEqual("INVALID");
  });
  it("confirms 0999999999 is invalid", () => {
    expect(methodD8("0999999999")).toEqual("INVALID");
  });
});
