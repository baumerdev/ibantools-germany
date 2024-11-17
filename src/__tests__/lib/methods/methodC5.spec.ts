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

import methodC5 from "../../../lib/methods/methodC5";

describe("method C5", () => {
  it("confirms 0000301168 is valid (variation 1, 6 digits)", () => {
    expect(methodC5("0000301168")).toEqual("VALID");
  });
  it("confirms 0000302554 is valid (variation 1, 6 digits)", () => {
    expect(methodC5("0000302554")).toEqual("VALID");
  });
  it("confirms 0300020050 is valid (variation 1, 9 digits)", () => {
    expect(methodC5("0300020050")).toEqual("VALID");
  });
  it("confirms 0300566000 is valid (variation 1, 9 digits)", () => {
    expect(methodC5("0300566000")).toEqual("VALID");
  });
  it("confirms 1000061378 is valid (variation 2)", () => {
    expect(methodC5("1000061378")).toEqual("VALID");
  });
  it("confirms 1000061412 is valid (variation 2)", () => {
    expect(methodC5("1000061412")).toEqual("VALID");
  });
  it("confirms 4450164064 is valid (variation 2)", () => {
    expect(methodC5("4450164064")).toEqual("VALID");
  });
  it("confirms 4863476104 is valid (variation 2)", () => {
    expect(methodC5("4863476104")).toEqual("VALID");
  });
  it("confirms 5000000028 is valid (variation 2)", () => {
    expect(methodC5("5000000028")).toEqual("VALID");
  });
  it("confirms 5000000391 is valid (variation 2)", () => {
    expect(methodC5("5000000391")).toEqual("VALID");
  });
  it("confirms 6450008149 is valid (variation 2)", () => {
    expect(methodC5("6450008149")).toEqual("VALID");
  });
  it("confirms 6800001016 is valid (variation 2)", () => {
    expect(methodC5("6800001016")).toEqual("VALID");
  });
  it("confirms 9000100012 is valid (variation 2)", () => {
    expect(methodC5("9000100012")).toEqual("VALID");
  });
  it("confirms 9000210017 is valid (variation 2)", () => {
    expect(methodC5("9000210017")).toEqual("VALID");
  });
  it("confirms 3060188103 is valid (variation 3)", () => {
    expect(methodC5("3060188103")).toEqual("VALID");
  });
  it("confirms 3070402023 is valid (variation 3)", () => {
    expect(methodC5("3070402023")).toEqual("VALID");
  });
  it("has no check digit calculation for 30000000 (variation 4)", () => {
    expect(methodC5("30000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 59999999 (variation 4)", () => {
    expect(methodC5("59999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 7000000000 (variation 4)", () => {
    expect(methodC5("7000000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 7099999999 (variation 4)", () => {
    expect(methodC5("7099999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 8500000000 (variation 4)", () => {
    expect(methodC5("8500000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 8599999999 (variation 4)", () => {
    expect(methodC5("8599999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 0000302589 is invalid (variation 1)", () => {
    expect(methodC5("0000302589")).toEqual("INVALID");
  });
  it("confirms 0000507336 is invalid (variation 1)", () => {
    expect(methodC5("0000507336")).toEqual("INVALID");
  });
  it("confirms 0302555000 is invalid (variation 1)", () => {
    expect(methodC5("0302555000")).toEqual("INVALID");
  });
  it("confirms 0302589000 is invalid (variation 1)", () => {
    expect(methodC5("0302589000")).toEqual("INVALID");
  });
  it("confirms 1000061457 is invalid (variation 2)", () => {
    expect(methodC5("1000061457")).toEqual("INVALID");
  });
  it("confirms 4864446015 is invalid (variation 2)", () => {
    expect(methodC5("4864446015")).toEqual("INVALID");
  });
  it("confirms 4865038012 is invalid (variation 2)", () => {
    expect(methodC5("4865038012")).toEqual("INVALID");
  });
  it("confirms 5000001028 is invalid (variation 2)", () => {
    expect(methodC5("5000001028")).toEqual("INVALID");
  });
  it("confirms 5000001075 is invalid (variation 2)", () => {
    expect(methodC5("5000001075")).toEqual("INVALID");
  });
  it("confirms 6450008150 is invalid (variation 2)", () => {
    expect(methodC5("6450008150")).toEqual("INVALID");
  });
  it("confirms 6542812818 is invalid (variation 2)", () => {
    expect(methodC5("6542812818")).toEqual("INVALID");
  });
  it("confirms 9000110012 is invalid (variation 2)", () => {
    expect(methodC5("9000110012")).toEqual("INVALID");
  });
  it("confirms 9000300310 is invalid (variation 2)", () => {
    expect(methodC5("9000300310")).toEqual("INVALID");
  });
  it("confirms 3081000783 is invalid (variation 3)", () => {
    expect(methodC5("3081000783")).toEqual("INVALID");
  });
  it("confirms 3081308871 is invalid (variation 3)", () => {
    expect(methodC5("3081308871")).toEqual("INVALID");
  });
  it("confirms 99999 is invalid", () => {
    expect(methodC5("99999")).toEqual("INVALID");
  });
});
