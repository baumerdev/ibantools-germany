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

import methodE3 from "../../../lib/methods/methodE3";

describe("method E3", () => {
  it("confirms 9290701 is valid (variation 1)", () => {
    expect(methodE3("9290701")).toEqual(Result.VALID);
  });
  it("confirms 539290858 is valid (variation 1)", () => {
    expect(methodE3("539290858")).toEqual(Result.VALID);
  });
  it("confirms 1501824 is valid (variation 1)", () => {
    expect(methodE3("1501824")).toEqual(Result.VALID);
  });
  it("confirms 1501832 is valid (variation 1)", () => {
    expect(methodE3("1501832")).toEqual(Result.VALID);
  });
  it("confirms 9290708 is valid (variation 2)", () => {
    expect(methodE3("9290708")).toEqual(Result.VALID);
  });
  it("confirms 539290854 is valid (variation 2)", () => {
    expect(methodE3("539290854")).toEqual(Result.VALID);
  });
  it("confirms 1501823 is valid (variation 2)", () => {
    expect(methodE3("1501823")).toEqual(Result.VALID);
  });
  it("confirms 1501831 is valid (variation 2)", () => {
    expect(methodE3("1501831")).toEqual(Result.VALID);
  });
  it("confirms 2345678909 is valid (variation 2)", () => {
    expect(methodE3("2345678909")).toEqual(Result.VALID);
  });
  it("confirms 5678901237 is valid (variation 2)", () => {
    expect(methodE3("5678901237")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 7414398260 is invalid", () => {
    expect(methodE3("7414398260")).toEqual(Result.INVALID);
  });
  it("confirms 0123456789 is invalid", () => {
    expect(methodE3("0123456789")).toEqual(Result.INVALID);
  });
  it("confirms 2345678901 is invalid", () => {
    expect(methodE3("2345678901")).toEqual(Result.INVALID);
  });
  it("confirms 5678901234 is invalid", () => {
    expect(methodE3("5678901234")).toEqual(Result.INVALID);
  });
  it("confirms 7414398260 is invalid", () => {
    expect(methodE3("7414398260")).toEqual(Result.INVALID);
  });
});
