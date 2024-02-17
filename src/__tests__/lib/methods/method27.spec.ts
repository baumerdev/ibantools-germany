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

import method27 from "../../../lib/methods/method27";

describe("method 27", () => {
  it("confirms 9290701 is valid (like 00)", () => {
    expect(method27("9290701")).toEqual("VALID");
  });
  it("confirms 2847169488 is valid (M10H)", () => {
    expect(method27("2847169488")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9291701 is invalid", () => {
    expect(method27("9291701")).toEqual("INVALID");
  });
  it("confirms 2837169488 is invalid", () => {
    expect(method27("2837169488")).toEqual("INVALID");
  });
});
