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

import method66 from "../../../lib/methods/method66";

describe("method 66", () => {
  it("confirms 100150502 is valid", () => {
    expect(method66("100150502")).toEqual("VALID");
  });
  it("confirms 100154508 is valid", () => {
    expect(method66("100154508")).toEqual("VALID");
  });
  it("confirms 101154508 is valid", () => {
    expect(method66("101154508")).toEqual("VALID");
  });
  it("confirms 100154516 is valid", () => {
    expect(method66("100154516")).toEqual("VALID");
  });
  it("confirms 101154516 is valid", () => {
    expect(method66("101154516")).toEqual("VALID");
  });
  it("has no check digit calculation for 983393104", () => {
    expect(method66("983393104")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 100150602 is invalid", () => {
    expect(method66("100150602")).toEqual("INVALID");
  });
  it("confirms 100154518 is invalid", () => {
    expect(method66("100154518")).toEqual("INVALID");
  });
  it("confirms 101454508 is invalid", () => {
    expect(method66("101454508")).toEqual("INVALID");
  });
  it("confirms 1100154516 is invalid", () => {
    expect(method66("1100154516")).toEqual("INVALID");
  });
  it("confirms 101155516 is invalid", () => {
    expect(method66("101155516")).toEqual("INVALID");
  });
});
