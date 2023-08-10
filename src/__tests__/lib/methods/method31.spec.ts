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

import method31 from "../../../lib/methods/method31";

describe("method 31", () => {
  it("confirms 1000000524 is valid", () => {
    expect(method31("1000000524")).toEqual("VALID");
  });
  it("confirms 1000000583 is valid", () => {
    expect(method31("1000000583")).toEqual("VALID");
  });
  it("confirms 12345679 is valid", () => {
    expect(method31("12345679")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1001000524 is invalid", () => {
    expect(method31("1001000524")).toEqual("INVALID");
  });
  it("confirms 1000000683 is invalid", () => {
    expect(method31("1000000683")).toEqual("INVALID");
  });
  it("confirms 12355679 is invalid", () => {
    expect(method31("12355679")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method31("1234567890")).toEqual("INVALID");
  });
});
