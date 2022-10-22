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

import method68 from "../../../lib/methods/method68";

describe("method 68", () => {
  it("confirms 8889654328 is valid (10 digits)", () => {
    expect(method68("8889654328")).toEqual(Result.VALID);
  });
  it("confirms 987654324 is valid (9 digits, variation 1)", () => {
    expect(method68("987654324")).toEqual(Result.VALID);
  });
  it("confirms 987654328 is valid (9 digits, variation 2)", () => {
    expect(method68("987654328")).toEqual(Result.VALID);
  });
  it("confirms 900654328 is valid (9 digits, variation 2)", () => {
    expect(method68("900654328")).toEqual(Result.VALID);
  });
  it("confirms 654327 is valid (9 digits, variation 2)", () => {
    expect(method68("654327")).toEqual(Result.VALID);
  });
  it("confirms 99654327 is valid (9 digits, variation 2)", () => {
    expect(method68("99654327")).toEqual(Result.VALID);
  });
  it("has no check digit calculation for 400000000", () => {
    expect(method68("400000000")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 499999999", () => {
    expect(method68("499999999")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });

  //  Check for invalid result
  it("confirms 8889654338 is invalid", () => {
    expect(method68("8889654338")).toEqual(Result.INVALID);
  });
  it("confirms 987654424 is invalid", () => {
    expect(method68("987654424")).toEqual(Result.INVALID);
  });
  it("confirms 987655328 is invalid", () => {
    expect(method68("987655328")).toEqual(Result.INVALID);
  });
  it("confirms 59999 is invalid (too short)", () => {
    expect(method68("59999")).toEqual(Result.INVALID);
  });
  it("confirms 8880654327 is invalid (valid check digit but no 9 as fourth digit)", () => {
    expect(method68("8880654327")).toEqual(Result.INVALID);
  });
});
