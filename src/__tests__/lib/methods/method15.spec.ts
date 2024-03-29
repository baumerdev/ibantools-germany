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

import method15 from "../../../lib/methods/method15";

describe("method 15", () => {
  it("confirms 1234567890 is valid", () => {
    expect(method15("1234567890")).toEqual("VALID");
  });
  it("confirms 1234567830 is valid", () => {
    expect(method15("1234567830")).toEqual("VALID");
  });
  it("confirms 1234567881 is valid", () => {
    expect(method15("1234567881")).toEqual("VALID");
  });
  it("confirms 67890 is valid", () => {
    expect(method15("67890")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234577890 is invalid", () => {
    expect(method15("1234577890")).toEqual("INVALID");
  });
  it("confirms 1234568830 is invalid", () => {
    expect(method15("1234568830")).toEqual("INVALID");
  });
  it("confirms 1234567981 is invalid", () => {
    expect(method15("1234567981")).toEqual("INVALID");
  });
  it("confirms 66890 is invalid", () => {
    expect(method15("66890")).toEqual("INVALID");
  });
});
