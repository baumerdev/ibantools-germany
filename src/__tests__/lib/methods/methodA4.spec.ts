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

import { Result } from "../../../lib/types";

import methodA4 from "../../../lib/methods/methodA4";

describe("method A4", () => {
  it("confirms 0004711173 is valid (variation 1)", () => {
    expect(methodA4("0004711173")).toEqual(Result.VALID);
  });
  it("confirms 0007093330 is valid (variation 1)", () => {
    expect(methodA4("0007093330")).toEqual(Result.VALID);
  });
  it("confirms 0004711172 is valid (variation 2)", () => {
    expect(methodA4("0004711172")).toEqual(Result.VALID);
  });
  it("confirms 0007093335 is valid (variation 2)", () => {
    expect(methodA4("0007093335")).toEqual(Result.VALID);
  });
  it("confirms 1199503010 is valid (variation 3)", () => {
    expect(methodA4("1199503010")).toEqual(Result.VALID);
  });
  it("confirms 8499421235 is valid (variation 3)", () => {
    expect(methodA4("8499421235")).toEqual(Result.VALID);
  });
  it("confirms 0000862342 is valid (variation 4, modulo 7)", () => {
    expect(methodA4("0000862342")).toEqual(Result.VALID);
  });
  it("confirms 8997710000 is valid (variation 4, modulo 7)", () => {
    expect(methodA4("8997710000")).toEqual(Result.VALID);
  });
  it("confirms 0000905844 is valid (variation 4, modulo 11)", () => {
    expect(methodA4("0000905844")).toEqual(Result.VALID);
  });
  it("confirms 5030101099 is valid (variation 4, modulo 11)", () => {
    expect(methodA4("5030101099")).toEqual(Result.VALID);
  });
  it("confirms 0001123458 is valid (variation 4)", () => {
    expect(methodA4("0001123458")).toEqual(Result.VALID);
  });
  it("confirms 1299503117 is valid (variation 4)", () => {
    expect(methodA4("1299503117")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0004711173 is invalid", () => {
    expect(methodA4("0004711183")).toEqual(Result.INVALID);
  });
  it("confirms 0004811172 is invalid", () => {
    expect(methodA4("0004811172")).toEqual(Result.INVALID);
  });
  it("confirms 8499423235 is invalid", () => {
    expect(methodA4("8499423235")).toEqual(Result.INVALID);
  });
  it("confirms 0001223458 is invalid", () => {
    expect(methodA4("0001223458")).toEqual(Result.INVALID);
  });
});
