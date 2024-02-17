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

import method14 from "../../../lib/methods/method14";

describe("method 14", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method14("1234567897")).toEqual("VALID");
  });
  it("confirms 9994567897 is valid", () => {
    expect(method14("9994567897")).toEqual("VALID");
  });
  it("confirms 4567897 is valid", () => {
    expect(method14("4567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1235567897 is invalid", () => {
    expect(method14("1235567897")).toEqual("INVALID");
  });
  it("confirms 9994667897 is invalid", () => {
    expect(method14("9994667897")).toEqual("INVALID");
  });
  it("confirms 4577897 is invalid", () => {
    expect(method14("4577897")).toEqual("INVALID");
  });
});
