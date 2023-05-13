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

import methodE2 from "../../../lib/methods/methodE2";

describe("method E2", () => {
  it("confirms 0003831745 is valid", () => {
    expect(methodE2("0003831745")).toEqual(Result.VALID);
  });
  it("confirms 0051330335 is valid", () => {
    expect(methodE2("0051330335")).toEqual(Result.VALID);
  });
  it("confirms 1730773457 is valid", () => {
    expect(methodE2("1730773457")).toEqual(Result.VALID);
  });
  it("confirms 1987654327 is valid", () => {
    expect(methodE2("1987654327")).toEqual(Result.VALID);
  });
  it("confirms 2012345675 is valid", () => {
    expect(methodE2("2012345675")).toEqual(Result.VALID);
  });
  it("confirms 2220467998 is valid", () => {
    expect(methodE2("2220467998")).toEqual(Result.VALID);
  });
  it("confirms 3190519693 is valid", () => {
    expect(methodE2("3190519693")).toEqual(Result.VALID);
  });
  it("confirms 3011219713 is valid", () => {
    expect(methodE2("3011219713")).toEqual(Result.VALID);
  });
  it("confirms 4131220086 is valid", () => {
    expect(methodE2("4131220086")).toEqual(Result.VALID);
  });
  it("confirms 4110919419 is valid", () => {
    expect(methodE2("4110919419")).toEqual(Result.VALID);
  });
  it("confirms 5000083836 is valid", () => {
    expect(methodE2("5000083836")).toEqual(Result.VALID);
  });
  it("confirms 5069696965 is valid", () => {
    expect(methodE2("5069696965")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0121314151 is invalid", () => {
    expect(methodE2("0121314151")).toEqual(Result.INVALID);
  });
  it("confirms 0036958466 is invalid", () => {
    expect(methodE2("0036958466")).toEqual(Result.INVALID);
  });
  it("confirms 1000174716 is invalid", () => {
    expect(methodE2("1000174716")).toEqual(Result.INVALID);
  });
  it("confirms 1975312468 is invalid", () => {
    expect(methodE2("1975312468")).toEqual(Result.INVALID);
  });
  it("confirms 2260519349 is invalid", () => {
    expect(methodE2("2260519349")).toEqual(Result.INVALID);
  });
  it("confirms 2004002175 is invalid", () => {
    expect(methodE2("2004002175")).toEqual(Result.INVALID);
  });
  it("confirms 3780024149 is invalid", () => {
    expect(methodE2("3780024149")).toEqual(Result.INVALID);
  });
  it("confirms 3015024274 is invalid", () => {
    expect(methodE2("3015024274")).toEqual(Result.INVALID);
  });
  it("confirms 4968745438 is invalid", () => {
    expect(methodE2("4968745438")).toEqual(Result.INVALID);
  });
  it("confirms 4005012150 is invalid", () => {
    expect(methodE2("4005012150")).toEqual(Result.INVALID);
  });
  it("confirms 5000137454 is invalid", () => {
    expect(methodE2("5000137454")).toEqual(Result.INVALID);
  });
  it("confirms 5221398871 is invalid", () => {
    expect(methodE2("5221398871")).toEqual(Result.INVALID);
  });
  it("confirms 6221398879 is invalid", () => {
    expect(methodE2("6221398879")).toEqual(Result.INVALID);
  });
  it("confirms 6742185327 is invalid", () => {
    expect(methodE2("6742185327")).toEqual(Result.INVALID);
  });
  it("confirms 7793867322 is invalid", () => {
    expect(methodE2("7793867322")).toEqual(Result.INVALID);
  });
  it("confirms 7900695413 is invalid", () => {
    expect(methodE2("7900695413")).toEqual(Result.INVALID);
  });
  it("confirms 8001256238 is invalid", () => {
    expect(methodE2("8001256238")).toEqual(Result.INVALID);
  });
  it("confirms 8303808900 is invalid", () => {
    expect(methodE2("8303808900")).toEqual(Result.INVALID);
  });
  it("confirms 9703805111 is invalid", () => {
    expect(methodE2("9703805111")).toEqual(Result.INVALID);
  });
  it("confirms 9006126433 is invalid", () => {
    expect(methodE2("9006126433")).toEqual(Result.INVALID);
  });
});
