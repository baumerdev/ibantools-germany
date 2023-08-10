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

import method98 from "../../../lib/methods/method98";

describe("method 98", () => {
  it("confirms 9619439213 is valid", () => {
    expect(method98("9619439213")).toEqual("VALID");
  });
  it("confirms 9619509976 is valid", () => {
    expect(method98("9619509976")).toEqual("VALID");
  });
  it("confirms 9619319999 is valid", () => {
    expect(method98("9619319999")).toEqual("VALID");
  });
  it("confirms 3009800016 is valid", () => {
    expect(method98("3009800016")).toEqual("VALID");
  });
  it("confirms 5989800173 is valid", () => {
    expect(method98("5989800173")).toEqual("VALID");
  });
  it("confirms 6719430018 is valid", () => {
    expect(method98("6719430018")).toEqual("VALID");
  });
  it("confirms 9141405 is valid (fallback method 32)", () => {
    expect(method98("9141405")).toEqual("VALID");
  });
  it("confirms 1709107983 is valid (fallback method 32)", () => {
    expect(method98("1709107983")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9619438213 is invalid", () => {
    expect(method98("9619438213")).toEqual("INVALID");
  });
  it("confirms 9619508976 is invalid", () => {
    expect(method98("9619508976")).toEqual("INVALID");
  });
  it("confirms 9619329999 is invalid", () => {
    expect(method98("9619329999")).toEqual("INVALID");
  });
  it("confirms 9141415 is invalid", () => {
    expect(method98("9141415")).toEqual("INVALID");
  });
  it("confirms 1708107983 is invalid", () => {
    expect(method98("1708107983")).toEqual("INVALID");
  });
});
