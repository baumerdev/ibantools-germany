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

import method78 from "../../../lib/methods/method78";

describe("method 78", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method78("1234567897")).toEqual("VALID");
  });
  it("confirms 7581499 is valid", () => {
    expect(method78("7581499")).toEqual("VALID");
  });
  it("confirms 9999999981 is valid", () => {
    expect(method78("9999999981")).toEqual("VALID");
  });

  // Check for no check digit
  it("has no check digit calculation for 10000000", () => {
    expect(method78("10000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0010000000", () => {
    expect(method78("0010000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 99999999", () => {
    expect(method78("99999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0099999999", () => {
    expect(method78("0099999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 1235567897 is invalid", () => {
    expect(method78("1235567897")).toEqual("INVALID");
  });
  it("confirms 7581599 is invalid", () => {
    expect(method78("7581599")).toEqual("INVALID");
  });
  it("confirms 9998999981 is invalid", () => {
    expect(method78("9998999981")).toEqual("INVALID");
  });
});
