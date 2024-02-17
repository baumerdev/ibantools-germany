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

import methodA3 from "../../../lib/methods/methodA3";

describe("method A3", () => {
  it("confirms 1234567897 is valid (variation 1)", () => {
    expect(methodA3("1234567897")).toEqual("VALID");
  });
  it("confirms 0123456782 is valid (variation 1)", () => {
    expect(methodA3("0123456782")).toEqual("VALID");
  });
  it("confirms 9876543210 is valid (variation 1)", () => {
    expect(methodA3("9876543210")).toEqual("VALID");
  });
  it("confirms 1234567890 is valid (variation 2)", () => {
    expect(methodA3("1234567890")).toEqual("VALID");
  });
  it("confirms 0123456789 is valid (variation 2)", () => {
    expect(methodA3("0123456789")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 6543217890 is invalid (variation 1)", () => {
    expect(methodA3("6543217890")).toEqual("INVALID");
  });
  it("confirms 0543216789 is invalid (variation 1)", () => {
    expect(methodA3("0543216789")).toEqual("INVALID");
  });
  it("confirms 6543217890 is invalid (variation 2)", () => {
    expect(methodA3("6543217890")).toEqual("INVALID");
  });
  it("confirms 0543216789 is invalid (variation 2)", () => {
    expect(methodA3("0543216789")).toEqual("INVALID");
  });
});
