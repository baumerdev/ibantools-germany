/**
 * ibantools-germany
 * Copyright (C) 2022 Markus Baumer <markus@baumer.dev>
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

import { Result } from "../../../lib/types";

import method45 from "../../../lib/methods/method45";

describe("method 45", () => {
  it("confirms 3545343232 is valid", () => {
    expect(method45("3545343232")).toEqual(Result.VALID);
  });
  it("confirms 4013410024 is valid", () => {
    expect(method45("4013410024")).toEqual(Result.VALID);
  });
  it("confirms 1234567897 is valid", () => {
    expect(method45("1234567897")).toEqual(Result.VALID);
  });
  it("has no check digit calculation for 0994681254 (first digit 0)", () => {
    expect(method45("0994681254")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 0000012340 (first digit 0)", () => {
    expect(method45("0000012340")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 1000199999 (fifth digit 1)", () => {
    expect(method45("1000199999")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 0100114240 (fifth digit 1)", () => {
    expect(method45("0100114240")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 4890001112 (digit 1-2 = 48)", () => {
    expect(method45("4890001112")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });

  // Check for invalid result
  it("confirms 3555343232 is invalid", () => {
    expect(method45("3555343232")).toEqual(Result.INVALID);
  });
  it("confirms 4013420024 is invalid", () => {
    expect(method45("4013420024")).toEqual(Result.INVALID);
  });
  it("confirms 1234567997 is invalid", () => {
    expect(method45("1234567997")).toEqual(Result.INVALID);
  });
});
