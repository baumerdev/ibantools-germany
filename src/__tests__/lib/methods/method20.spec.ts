/**
 * ibantools-germany
 * Copyright (C) 2022 Markus Baumer <markus@baumer.dev>
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

import { Result } from "../../../lib/types";

import method20 from "../../../lib/methods/method20";

describe("method 20", () => {
  it("confirms 1234567890 is valid", () => {
    expect(method20("1234567896")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1244567890 is invalid", () => {
    expect(method20("1244567890")).toEqual(Result.INVALID);
  });
});
