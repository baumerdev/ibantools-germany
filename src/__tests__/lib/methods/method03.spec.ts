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

import method03 from "../../../lib/methods/method03";

describe("method 03", () => {
  it("confirms 1234567890 is valid", () => {
    expect(method03("1234567890")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1235567890 is invalid", () => {
    expect(method03("1235567890")).toEqual(Result.INVALID);
  });
});
