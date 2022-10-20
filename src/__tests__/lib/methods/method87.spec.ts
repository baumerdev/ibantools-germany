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

import method87 from "../../../lib/methods/method87";

describe("method 87", () => {
  it("confirms 3199500501 is valid (variation Excemtion)", () => {
    expect(method87("3199500501")).toEqual(Result.VALID);
  });
  it("confirms 0000000406 is valid (variation A)", () => {
    expect(method87("0000000406")).toEqual(Result.VALID);
  });
  it("confirms 0000051768 is valid (variation A)", () => {
    expect(method87("0000051768")).toEqual(Result.VALID);
  });
  it("confirms 0010701590 is valid (variation A)", () => {
    expect(method87("0010701590")).toEqual(Result.VALID);
  });
  it("confirms 0010720185 is valid (variation A)", () => {
    expect(method87("0010720185")).toEqual(Result.VALID);
  });
  it("confirms 0000100005 is valid (variation B)", () => {
    expect(method87("0000100005")).toEqual(Result.VALID);
  });
  it("confirms 0000393814 is valid (variation B)", () => {
    expect(method87("0000393814")).toEqual(Result.VALID);
  });
  it("confirms 0000950360 is valid (variation B)", () => {
    expect(method87("0000950360")).toEqual(Result.VALID);
  });
  it("confirms 0000950365 is valid (variation C)", () => {
    expect(method87("0000950365")).toEqual(Result.VALID);
  });
  it("confirms 0001975641 is valid (variation D)", () => {
    expect(method87("0001975641")).toEqual(Result.VALID);
  });
  it("confirms 0001988654 is valid (variation D)", () => {
    expect(method87("0001988654")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 3199501501 is invalid", () => {
    expect(method87("3199501501")).toEqual(Result.INVALID);
  });
  it("confirms 0000000407 is invalid", () => {
    expect(method87("0000000407")).toEqual(Result.INVALID);
  });
  it("confirms 0000051868 is invalid", () => {
    expect(method87("0000051868")).toEqual(Result.INVALID);
  });
  it("confirms 0010720285 is invalid", () => {
    expect(method87("0010720285")).toEqual(Result.INVALID);
  });
  it("confirms 0000110005 is invalid", () => {
    expect(method87("0000110005")).toEqual(Result.INVALID);
  });
  it("confirms 0000383814 is invalid", () => {
    expect(method87("0000383814")).toEqual(Result.INVALID);
  });
  it("confirms 0002988654 is invalid", () => {
    expect(method87("0002988654")).toEqual(Result.INVALID);
  });
});
