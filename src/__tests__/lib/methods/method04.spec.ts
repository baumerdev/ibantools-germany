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

import method04 from "../../../lib/methods/method04";

describe("method 04", () => {
  it("confirms 1234567892 is valid", () => {
    expect(method04("1234567892")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234577892 is invalid", () => {
    expect(method04("1234577892")).toEqual("INVALID");
  });
});
