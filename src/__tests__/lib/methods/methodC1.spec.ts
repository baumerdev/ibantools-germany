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

import methodC1 from "../../../lib/methods/methodC1";

describe("method C1", () => {
  it("confirms 0446786040 is valid (variation 1)", () => {
    expect(methodC1("0446786040")).toEqual(Result.VALID);
  });
  it("confirms 0478046940 is valid (variation 1)", () => {
    expect(methodC1("0478046940")).toEqual(Result.VALID);
  });
  it("confirms 0701625830 is valid (variation 1)", () => {
    expect(methodC1("0701625830")).toEqual(Result.VALID);
  });
  it("confirms 0701625840 is valid (variation 1)", () => {
    expect(methodC1("0701625840")).toEqual(Result.VALID);
  });
  it("confirms 0882095630 is valid (variation 1)", () => {
    expect(methodC1("0882095630")).toEqual(Result.VALID);
  });
  it("confirms 5432112349 is valid (variation 2)", () => {
    expect(methodC1("5432112349")).toEqual(Result.VALID);
  });
  it("confirms 5543223456 is valid (variation 2)", () => {
    expect(methodC1("5543223456")).toEqual(Result.VALID);
  });
  it("confirms 5654334563 is valid (variation 2)", () => {
    expect(methodC1("5654334563")).toEqual(Result.VALID);
  });
  it("confirms 5765445670 is valid (variation 2)", () => {
    expect(methodC1("5765445670")).toEqual(Result.VALID);
  });
  it("confirms 5876556788 is valid (variation 2)", () => {
    expect(methodC1("5876556788")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1000000111 is invalid", () => {
    expect(methodC1("1000000111")).toEqual(Result.INVALID);
  });
  it("confirms 9635100101 is invalid", () => {
    expect(methodC1("9635100101")).toEqual(Result.INVALID);
  });
  it("confirms 9730300100 is invalid", () => {
    expect(methodC1("9730300100")).toEqual(Result.INVALID);
  });
  it("confirms 5876556789 is invalid", () => {
    expect(methodC1("5876556789")).toEqual(Result.INVALID);
  });
});
