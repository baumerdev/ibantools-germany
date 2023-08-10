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

import methodB6 from "../../../lib/methods/methodB6";

describe("method B6", () => {
  it("confirms 9110000000 is valid (variation 1)", () => {
    expect(methodB6("9110000000", "00000000")).toEqual("VALID");
  });
  it("confirms 0269876545 is valid (variation 1)", () => {
    expect(methodB6("0269876545", "00000000")).toEqual("VALID");
  });
  it("confirms 487310018 with BLZ 80053782 is valid (variation 2)", () => {
    expect(methodB6("487310018", "80053782")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 9111000000 is invalid (variation 1)", () => {
    expect(methodB6("9111000000", "00000000")).toEqual("INVALID");
  });
  it("confirms 0269456780 is invalid (variation 1)", () => {
    expect(methodB6("0269456780", "00000000")).toEqual("INVALID");
  });
  it("confirms 467310018 with BLZ 80053762 is invalid (variation 2)", () => {
    expect(methodB6("467310018", "80053762")).toEqual("INVALID");
  });
  it("confirms 477310018 with BLZ 80053772 is invalid (variation 2)", () => {
    expect(methodB6("477310018", "80053772")).toEqual("INVALID");
  });
});
