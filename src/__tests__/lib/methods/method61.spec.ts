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

import method61 from "../../../lib/methods/method61";

describe("method 61", () => {
  it("confirms 2063099200 is valid", () => {
    expect(method61("2063099200")).toEqual("VALID");
  });
  it("confirms 2063099299 is valid", () => {
    expect(method61("2063099299")).toEqual("VALID");
  });
  it("confirms 0260760481 is valid", () => {
    expect(method61("0260760481")).toEqual("VALID");
  });
  it("confirms 1234526000 is valid", () => {
    expect(method61("1234526000")).toEqual("VALID");
  });
  it("confirms 1234551080 is valid (special case 8)", () => {
    expect(method61("1234551080")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 2063098200 is invalid", () => {
    expect(method61("2063098200")).toEqual("INVALID");
  });
  it("confirms 2063099288 is invalid", () => {
    expect(method61("2063099288")).toEqual("INVALID");
  });
  it("confirms 0260860481 is invalid", () => {
    expect(method61("0260860481")).toEqual("INVALID");
  });
});
