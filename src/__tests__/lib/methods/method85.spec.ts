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

import method85 from "../../../lib/methods/method85";

describe("method 85", () => {
  it("confirms 0001156071 is valid (variation A)", () => {
    expect(method85("0001156071")).toEqual("VALID");
  });
  it("confirms 0001156136 is valid (variation A)", () => {
    expect(method85("0001156136")).toEqual("VALID");
  });
  it("confirms 1234564111 is valid (variation A)", () => {
    expect(method85("1234564111")).toEqual("VALID");
  });
  it("confirms 1234566268 is valid (variation B)", () => {
    expect(method85("1234566268")).toEqual("VALID");
  });
  it("confirms 1234569041 is valid (variation C)", () => {
    expect(method85("1234569041")).toEqual("VALID");
  });
  it("confirms 0000156078 is valid (variation B)", () => {
    expect(method85("0000156078")).toEqual("VALID");
  });
  it("confirms 94013341 is valid", () => {
    expect(method85("94013340")).toEqual("VALID");
  });
  it("confirms 0000156071 is valid (variation C)", () => {
    expect(method85("0000156071")).toEqual("VALID");
  });
  it("confirms 3199100002 is valid (exemption)", () => {
    expect(method85("3199100002")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0001156081 is invalid", () => {
    expect(method85("0001156081")).toEqual("INVALID");
  });
  it("confirms 0000256078 is invalid", () => {
    expect(method85("0000256078")).toEqual("INVALID");
  });
  it("confirms 0000157071 is invalid", () => {
    expect(method85("0000157071")).toEqual("INVALID");
  });
  it("confirms 3199200002 is invalid", () => {
    expect(method85("3199200002")).toEqual("INVALID");
  });
});
