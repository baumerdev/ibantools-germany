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

import method38 from "../../../lib/methods/method38";

describe("method 38", () => {
  it("confirms 191919 is valid", () => {
    expect(method38("191919")).toEqual(Result.VALID);
  });
  it("confirms 1100660 is valid", () => {
    expect(method38("1100660")).toEqual(Result.VALID);
  });
  it("confirms 1234567899 is valid", () => {
    expect(method38("1234567899")).toEqual(Result.VALID);
  });
  it("confirms 4567899 is valid", () => {
    expect(method38("4567899")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 192919 is invalid", () => {
    expect(method38("192919")).toEqual(Result.INVALID);
  });
  it("confirms 1101660 is invalid", () => {
    expect(method38("1101660")).toEqual(Result.INVALID);
  });
  it("confirms 1234568899 is invalid", () => {
    expect(method38("1234568899")).toEqual(Result.INVALID);
  });
  it("confirms 5567899 is invalid", () => {
    expect(method38("5567899")).toEqual(Result.INVALID);
  });
});
