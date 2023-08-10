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

import method30 from "../../../lib/methods/method30";

describe("method 30", () => {
  it("confirms 1234567892 is valid", () => {
    expect(method30("1234567892")).toEqual("VALID");
  });
  it("confirms 1230 is valid", () => {
    expect(method30("1230")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 2234567892 is invalid", () => {
    expect(method30("2234567892")).toEqual("INVALID");
  });
  it("confirms 1240 is invalid", () => {
    expect(method30("1240")).toEqual("INVALID");
  });
});
