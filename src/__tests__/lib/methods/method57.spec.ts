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

import method57 from "../../../lib/methods/method57";

describe("method 57", () => {
  it("confirms 7500021766 is valid (variation 1)", () => {
    expect(method57("7500021766")).toEqual("VALID");
  });
  it("confirms 9400001734 is valid (variation 1)", () => {
    expect(method57("9400001734")).toEqual("VALID");
  });
  it("confirms 7800028282 is valid (variation 1)", () => {
    expect(method57("7800028282")).toEqual("VALID");
  });
  it("confirms 8100244186 is valid (variation 1)", () => {
    expect(method57("8100244186")).toEqual("VALID");
  });
  it("confirms 7400060823 is valid (variation 1)", () => {
    expect(method57("7400060823")).toEqual("VALID");
  });
  it("confirms 3251080371 is valid (variation 2)", () => {
    expect(method57("3251080371")).toEqual("VALID");
  });
  it("confirms 3891234567 is valid (variation 2)", () => {
    expect(method57("3891234567")).toEqual("VALID");
  });
  it("confirms 9322111030 is valid (variation 2)", () => {
    expect(method57("9322111030")).toEqual("VALID");
  });
  it("confirms 5622111037 is valid (variation 2)", () => {
    expect(method57("5622111037")).toEqual("VALID");
  });
  it("confirms 8322111031 is valid (variation 2)", () => {
    expect(method57("8322111031")).toEqual("VALID");
  });
  it("confirms 7777778800 is valid (variation 1, exception beginning with 777777)", () => {
    expect(method57("7777778800")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("confirms 8888887700 is valid (variation 1, exception beginning with 888888)", () => {
    expect(method57("8888887700")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("confirms 5001050352 is valid (variation 3, no calculation)", () => {
    expect(method57("5001050352")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("confirms 5045090090 is valid(variation 3, no calculation)", () => {
    expect(method57("5045090090")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("confirms 1909700805 is valid (variation 4)", () => {
    expect(method57("1909700805")).toEqual("VALID");
  });
  it("confirms 0185125434 is valid (variation 4, hardcoded exception, maybe debug by bank)", () => {
    expect(method57("0185125434")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 5302707782 is invalid", () => {
    expect(method57("5302707782")).toEqual("INVALID");
  });
  it("confirms 6412121212 is invalid", () => {
    expect(method57("6412121212")).toEqual("INVALID");
  });
  it("confirms 1813499124 is invalid", () => {
    expect(method57("1813499124")).toEqual("INVALID");
  });
  it("confirms 2206735010 is invalid", () => {
    expect(method57("2206735010")).toEqual("INVALID");
  });
  it("confirms 12345678 is invalid", () => {
    expect(method57("12345678")).toEqual("INVALID");
  });
});
