/**
 * ibantools-germany
 * Copyright (C) 2022-2024 Markus Baumer <markus@baumer.dev>
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

import method74 from "../../../lib/methods/method74";

describe("method 74", () => {
  it("confirms 1016 is valid (variation 1)", () => {
    expect(method74("1016")).toEqual("VALID");
  });
  it("confirms 26260 is valid (variation 1)", () => {
    expect(method74("26260")).toEqual("VALID");
  });
  it("confirms 242248 is valid (variation 1)", () => {
    expect(method74("242248")).toEqual("VALID");
  });
  it("confirms 18002113 is valid (variation 1)", () => {
    expect(method74("18002113")).toEqual("VALID");
  });
  it("confirms 1821200043 is valid (variation 1)", () => {
    expect(method74("1821200043")).toEqual("VALID");
  });
  it("confirms 242243 is valid (variation 1, exemption)", () => {
    expect(method74("242243")).toEqual("VALID");
  });
  it("confirms 239314 is valid (variation 1, exemption)", () => {
    expect(method74("239314")).toEqual("VALID");
  });
  it("confirms 1015 is valid (variation 2)", () => {
    expect(method74("1015")).toEqual("VALID");
  });
  it("confirms 26263 is valid (variation 2)", () => {
    expect(method74("26263")).toEqual("VALID");
  });
  it("confirms 242241 is valid (variation 2)", () => {
    expect(method74("242241")).toEqual("VALID");
  });
  it("confirms 18002116 is valid (variation 2)", () => {
    expect(method74("18002116")).toEqual("VALID");
  });
  it("confirms 1821200047 is valid (variation 2)", () => {
    expect(method74("1821200047")).toEqual("VALID");
  });
  it("confirms 3456789012 is valid (variation 2)", () => {
    expect(method74("3456789012")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1011 is invalid (wrong digit, variation 1)", () => {
    expect(method74("1011")).toEqual("INVALID");
  });
  it("confirms 26265 is invalid (wrong digit, variation 1)", () => {
    expect(method74("26265")).toEqual("INVALID");
  });
  it("confirms 18002118 is invalid (wrong digit, variation 1)", () => {
    expect(method74("18002118")).toEqual("INVALID");
  });
  it("confirms 6160000024 is invalid (wrong digit, variation 1)", () => {
    expect(method74("6160000024")).toEqual("INVALID");
  });
  it("confirms 242249 is invalid (wrong digit, variation 2)", () => {
    expect(method74("242249")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid (wrong digit, variation 2)", () => {
    expect(method74("1234567890")).toEqual("INVALID");
  });
});
