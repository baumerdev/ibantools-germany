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

import method93 from "../../../lib/methods/method93";

describe("method 93", () => {
  it("confirms 6714790000 is valid (modulo 11)", () => {
    expect(method93("6714790000")).toEqual(Result.VALID);
  });
  it("confirms 0000671479 is valid (modulo 11)", () => {
    expect(method93("0000671479")).toEqual(Result.VALID);
  });
  it("confirms 1277830000 is valid (modulo 7)", () => {
    expect(method93("1277830000")).toEqual(Result.VALID);
  });
  it("confirms 0000127783 is valid (modulo 7)", () => {
    expect(method93("0000127783")).toEqual(Result.VALID);
  });
  it("confirms 1277910000 is valid (modulo 7)", () => {
    expect(method93("1277910000")).toEqual(Result.VALID);
  });
  it("confirms 0000127791 is valid (modulo 7)", () => {
    expect(method93("0000127791")).toEqual(Result.VALID);
  });
  it("confirms 3067540000 is valid (modulo 7 and 11)", () => {
    expect(method93("3067540000")).toEqual(Result.VALID);
  });
  it("confirms 0000306754 is valid (modulo 7 and 11)", () => {
    expect(method93("0000306754")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 6714790010 is invalid", () => {
    expect(method93("671479010")).toEqual(Result.INVALID);
  });
  it("confirms 0000671579 is invalid", () => {
    expect(method93("0000671579")).toEqual(Result.INVALID);
  });
  it("confirms 1277840000 is invalid", () => {
    expect(method93("1277840000")).toEqual(Result.INVALID);
  });
  it("confirms 0100127783 is invalid", () => {
    expect(method93("0100127783")).toEqual(Result.INVALID);
  });
});
