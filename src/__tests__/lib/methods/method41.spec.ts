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

import method41 from "../../../lib/methods/method41";

describe("method 41", () => {
  it("confirms 4013410024 is valid", () => {
    expect(method41("4013410024")).toEqual(Result.VALID);
  });
  it("confirms 4016660195 is valid", () => {
    expect(method41("4016660195")).toEqual(Result.VALID);
  });
  it("confirms 0166805317 is valid", () => {
    expect(method41("0166805317")).toEqual(Result.VALID);
  });
  it("confirms 1234567897 is valid", () => {
    expect(method41("1234567897")).toEqual(Result.VALID);
  });
  it("confirms 4019310079 is valid (ignore digits 1-3)", () => {
    expect(method41("4019310079")).toEqual(Result.VALID);
  });
  it("confirms 4019340829 is valid (ignore digits 1-3)", () => {
    expect(method41("4019340829")).toEqual(Result.VALID);
  });
  it("confirms 4019151002 is valid (ignore digits 1-3)", () => {
    expect(method41("4019151002")).toEqual(Result.VALID);
  });
  it("confirms 1239567892 is valid (ignore digits 1-3)", () => {
    expect(method41("1239567892")).toEqual(Result.VALID);
  });
  it("confirms 9999567892 is valid (ignore digits 1-3)", () => {
    expect(method41("9999567892")).toEqual(Result.VALID);
  });

  // // Check for invalid result
  it("confirms 4014410024 is invalid", () => {
    expect(method41("4014410024")).toEqual(Result.INVALID);
  });
  it("confirms 4026660195 is invalid", () => {
    expect(method41("4026660195")).toEqual(Result.INVALID);
  });
  it("confirms 0166815317 is invalid", () => {
    expect(method41("0166815317")).toEqual(Result.INVALID);
  });
  it("confirms 1244567897 is invalid", () => {
    expect(method41("1244567897")).toEqual(Result.INVALID);
  });
  it("confirms 4019310179 is invalid", () => {
    expect(method41("4019310179")).toEqual(Result.INVALID);
  });
  it("confirms 4019350829 is invalid", () => {
    expect(method41("4019350829")).toEqual(Result.INVALID);
  });
  it("confirms 4019251002 is invalid", () => {
    expect(method41("4019251002")).toEqual(Result.INVALID);
  });
  it("confirms 1239577892 is invalid", () => {
    expect(method41("1239577892")).toEqual(Result.INVALID);
  });
  it("confirms 9999567802 is invalid", () => {
    expect(method41("9999567802")).toEqual(Result.INVALID);
  });
});
