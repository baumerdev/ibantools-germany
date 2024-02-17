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

import method05 from "../../../lib/methods/method05";

describe("method 05", () => {
  it("confirms 1234567897 is valid", () => {
    expect(method05("1234567897")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1234667897 is invalid", () => {
    expect(method05("1234667897")).toEqual("INVALID");
  });
});
