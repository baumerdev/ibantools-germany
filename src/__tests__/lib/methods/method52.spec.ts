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

import method52 from "../../../lib/methods/method52";

describe("method 52", () => {
  it("confirms 43001500 with BLZ 13051172 is valid", () => {
    expect(method52("43001500", "13051172")).toEqual("VALID");
  });
  it("confirms 9876543218 is valid (method 20)", () => {
    expect(method52("9876543218", "00000000")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123456789 with BLZ 13051172 is invalid", () => {
    expect(method52("123456789", "13051172")).toEqual("INVALID");
  });
});
