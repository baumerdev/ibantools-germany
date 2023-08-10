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

import methodB8 from "../../../lib/methods/methodB8";

describe("method B8", () => {
  it("confirms 0734192657 is valid (variation 1)", () => {
    expect(methodB8("0734192657")).toEqual("VALID");
  });
  it("confirms 6932875274 is valid (variation 1)", () => {
    expect(methodB8("6932875274")).toEqual("VALID");
  });
  it("confirms 3145863029 is valid (variation 2)", () => {
    expect(methodB8("3145863029")).toEqual("VALID");
  });
  it("confirms 2938692523 is valid (variation 2)", () => {
    expect(methodB8("2938692523")).toEqual("VALID");
  });
  it("has no check digit calculation for 5100000000", () => {
    expect(methodB8("5100000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 5999999998", () => {
    expect(methodB8("5999999998")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 9010000000", () => {
    expect(methodB8("9010000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 9109999999", () => {
    expect(methodB8("9109999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 0132572975 is invalid", () => {
    expect(methodB8("0132572975")).toEqual("INVALID");
  });
  it("confirms 9000412340 is invalid", () => {
    expect(methodB8("9000412340")).toEqual("INVALID");
  });
  it("confirms 9310305011 is invalid", () => {
    expect(methodB8("9310305011")).toEqual("INVALID");
  });
  it("confirms 0132572975 is invalid", () => {
    expect(methodB8("0132572975")).toEqual("INVALID");
  });
  it("confirms 9000412340 is invalid", () => {
    expect(methodB8("9000412340")).toEqual("INVALID");
  });
});
