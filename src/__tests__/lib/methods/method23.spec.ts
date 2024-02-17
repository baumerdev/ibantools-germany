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

import method23 from "../../../lib/methods/method23";

describe("method 23", () => {
  it("confirms 1234560890 is valid", () => {
    expect(method23("1234560890")).toEqual("VALID");
  });
  it("confirms 1237551890 is valid (special, remainder 1)", () => {
    expect(method23("1237551890")).toEqual("VALID");
  });
  it("confirms 1234501890 is valid (default, remainder 1)", () => {
    expect(method23("1234501890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1334560890 is invalid", () => {
    expect(method23("1334560890")).toEqual("INVALID");
  });
  it("confirms 1247551890 is invalid", () => {
    expect(method23("1247551890")).toEqual("INVALID");
  });
  it("confirms 1235501890 is invalid", () => {
    expect(method23("1235501890")).toEqual("INVALID");
  });
});
