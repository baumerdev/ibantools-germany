/*!
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

import methodD1 from "../../../lib/methods/methodD1";

describe("method D1", () => {
  it("confirms 0082012203 is valid", () => {
    expect(methodD1("0082012203")).toEqual(Result.VALID);
  });
  it("confirms 1452683581 is valid", () => {
    expect(methodD1("1452683581")).toEqual(Result.VALID);
  });
  it("confirms 2129642505 is valid", () => {
    expect(methodD1("2129642505")).toEqual(Result.VALID);
  });
  it("confirms 3002000027 is valid", () => {
    expect(methodD1("3002000027")).toEqual(Result.VALID);
  });
  it("confirms 4230001407 is valid", () => {
    expect(methodD1("4230001407")).toEqual(Result.VALID);
  });
  it("confirms 5000065514 is valid", () => {
    expect(methodD1("5000065514")).toEqual(Result.VALID);
  });
  it("confirms 6001526215 is valid", () => {
    expect(methodD1("6001526215")).toEqual(Result.VALID);
  });
  it("confirms 7126502149 is valid", () => {
    expect(methodD1("7126502149")).toEqual(Result.VALID);
  });
  it("confirms 9000430223 is valid", () => {
    expect(methodD1("9000430223")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0000260986 is invalid", () => {
    expect(methodD1("0000260986")).toEqual(Result.INVALID);
  });
  it("confirms 1062813622 is invalid", () => {
    expect(methodD1("1062813622")).toEqual(Result.INVALID);
  });
  it("confirms 2256412314 is invalid", () => {
    expect(methodD1("2256412314")).toEqual(Result.INVALID);
  });
  it("confirms 3012084101 is invalid", () => {
    expect(methodD1("3012084101")).toEqual(Result.INVALID);
  });
  it("confirms 4006003027 is invalid", () => {
    expect(methodD1("4006003027")).toEqual(Result.INVALID);
  });
  it("confirms 5814500990 is invalid", () => {
    expect(methodD1("5814500990")).toEqual(Result.INVALID);
  });
  it("confirms 6128462594 is invalid", () => {
    expect(methodD1("6128462594")).toEqual(Result.INVALID);
  });
  it("confirms 7000062035 is invalid", () => {
    expect(methodD1("7000062035")).toEqual(Result.INVALID);
  });
  it("confirms 8003306026 is invalid", () => {
    expect(methodD1("8003306026")).toEqual(Result.INVALID);
  });
  it("confirms 9000641509 is invalid", () => {
    expect(methodD1("9000641509")).toEqual(Result.INVALID);
  });
});
