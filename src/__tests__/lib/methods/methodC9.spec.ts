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

import methodC9 from "../../../lib/methods/methodC9";

describe("method C9", () => {
  it("confirms 3456789019 is valid (variation 1)", () => {
    expect(methodC9("3456789019")).toEqual("VALID");
  });
  it("confirms 5678901231 is valid (variation 1)", () => {
    expect(methodC9("5678901231")).toEqual("VALID");
  });
  it("confirms 0123456789 is valid (variation 2)", () => {
    expect(methodC9("0123456789")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 3456789012 is invalid", () => {
    expect(methodC9("3456789012")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(methodC9("1234567890")).toEqual("INVALID");
  });
  it("confirms 9012345678 is invalid", () => {
    expect(methodC9("9012345678")).toEqual("INVALID");
  });
});
