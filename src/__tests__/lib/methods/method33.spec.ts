/*!
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

import method33 from "../../../lib/methods/method33";

describe("method 33", () => {
  it("confirms 48658 is valid", () => {
    expect(method33("48658")).toEqual(Result.VALID);
  });
  it("confirms 84956 is valid", () => {
    expect(method33("84956")).toEqual(Result.VALID);
  });
  it("confirms 1234567892 is valid", () => {
    expect(method33("1234567892")).toEqual(Result.VALID);
  });
  it("confirms 0000567892 is valid", () => {
    expect(method33("0000567892")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 48758 is invalid", () => {
    expect(method33("48758")).toEqual(Result.INVALID);
  });
  it("confirms 94956 is invalid", () => {
    expect(method33("94956")).toEqual(Result.INVALID);
  });
  it("confirms 1234568892 is invalid", () => {
    expect(method33("1234568892")).toEqual(Result.INVALID);
  });
  it("confirms 0000566892 is invalid", () => {
    expect(method33("0000566892")).toEqual(Result.INVALID);
  });
});
