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

import method63 from "../../../lib/methods/method63";

describe("method 63", () => {
  it("confirms 123456600 is valid", () => {
    expect(method63("123456600")).toEqual("VALID");
  });
  it("confirms 1234566 is valid", () => {
    expect(method63("1234566")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123466600 is invalid", () => {
    expect(method63("123466600")).toEqual("INVALID");
  });
  it("confirms 1244566 is invalid", () => {
    expect(method63("1244566")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method63("1234567890")).toEqual("INVALID");
  });
});
