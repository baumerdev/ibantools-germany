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

import method22 from "../../../lib/methods/method22";

describe("method 22", () => {
  it("confirms 1234567895 is valid", () => {
    expect(method22("1234567895")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 1233567890 is invalid", () => {
    expect(method22("1233567890")).toEqual("INVALID");
  });
});
