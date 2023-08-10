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

import methodC0 from "../../../lib/methods/methodC0";

describe("method C0", () => {
  it("confirms 43001500 is valid (variation 1)", () => {
    expect(methodC0("43001500", "13051172")).toEqual("VALID");
  });
  it("confirms 48726458 is valid (variation 1)", () => {
    expect(methodC0("48726458", "13051172")).toEqual("VALID");
  });
  it("confirms 0012341097 is valid (variation 1)", () => {
    expect(methodC0("0012341097", "13051172")).toEqual("VALID");
  });
  it("confirms 0082335729 is valid (variation 2)", () => {
    expect(methodC0("0082335729", "00000000")).toEqual("VALID");
  });
  it("confirms 0734192657 is valid (variation 2)", () => {
    expect(methodC0("0734192657", "00000000")).toEqual("VALID");
  });
  it("confirms 6932875274 is valid (variation 2)", () => {
    expect(methodC0("6932875274", "00000000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 29837521 with BLZ 13051172 is invalid (variation 1)", () => {
    expect(methodC0("29837521", "13051172")).toEqual("INVALID");
  });
  it("confirms 0132572975 is invalid (variation 2)", () => {
    expect(methodC0("0132572975", "00000000")).toEqual("INVALID");
  });
  it("confirms 3038752371 is invalid (variation 2)", () => {
    expect(methodC0("3038752371", "00000000")).toEqual("INVALID");
  });
});
