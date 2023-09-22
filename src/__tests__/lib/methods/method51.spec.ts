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

import method51 from "../../../lib/methods/method51";

describe("method 51", () => {
  it("confirms 0001156071 is valid (method A)", () => {
    expect(method51("0001156071")).toEqual("VALID");
  });
  it("confirms 0001156136 is valid (method A)", () => {
    expect(method51("0001156136")).toEqual("VALID");
  });
  it("confirms 0001156078 is valid (method B)", () => {
    expect(method51("0001156078")).toEqual("VALID");
  });
  it("confirms 0001234567 is valid (method B)", () => {
    expect(method51("0001234567")).toEqual("VALID");
  });
  it("confirms 340968 is valid (method C)", () => {
    expect(method51("340968")).toEqual("VALID");
  });
  it("confirms 201178 is valid (method C)", () => {
    expect(method51("201178")).toEqual("VALID");
  });
  it("confirms 1009588 is valid (method C)", () => {
    expect(method51("1009588")).toEqual("VALID");
  });
  it("confirms 0000156071 is valid (method D)", () => {
    expect(method51("0000156071")).toEqual("VALID");
  });
  it("confirms 101356073 is valid (method D)", () => {
    expect(method51("101356073")).toEqual("VALID");
  });
  it("confirms 1234567870 is valid (method D)", () => {
    expect(method51("1234567870")).toEqual("VALID");
  });
  it("confirms 0199100002 is valid (method D, variation 1)", () => {
    expect(method51("0199100002")).toEqual("VALID");
  });
  it("confirms 0099100010 is valid (method D, variation 1)", () => {
    expect(method51("0099100010")).toEqual("VALID");
  });
  it("confirms 2599100002 is valid (method D, variation 1)", () => {
    expect(method51("2599100002")).toEqual("VALID");
  });
  it("confirms 0199100004 is valid (method D, variation 2)", () => {
    expect(method51("0199100004")).toEqual("VALID");
  });
  it("confirms 2599100003 is valid (method D, variation 2)", () => {
    expect(method51("2599100003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0000156079 is invalid (method A)", () => {
    expect(method51("0000156079")).toEqual("INVALID");
  });
  it("confirms 0012345678 is invalid (method B)", () => {
    expect(method51("0012345678")).toEqual("INVALID");
  });
  it("confirms 0023456783 is invalid (method C)", () => {
    expect(method51("0023456783")).toEqual("INVALID");
  });
  it("confirms 0076543211 is invalid (method C)", () => {
    expect(method51("0076543211")).toEqual("INVALID");
  });
  it("confirms 0000000007 is invalid (method A-D failed, 7-9 as 10th digit)", () => {
    expect(method51("0000000007")).toEqual("INVALID");
  });
  it("confirms 0099345678 is invalid (method D, variation 1, 2)", () => {
    expect(method51("0099345606")).toEqual("INVALID");
  });
});
