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

import { Result } from "../../../lib/types";

import method21 from "../../../lib/methods/method21";

describe("method 21", () => {
  it("confirms 1234567893 is valid", () => {
    expect(method21("1234567893")).toEqual(Result.VALID);
  });
  it("confirms 9290708 is valid", () => {
    expect(method21("9290708")).toEqual(Result.VALID);
  });
  it("confirms 2345678909 is valid", () => {
    expect(method21("2345678909")).toEqual(Result.VALID);
  });
  it("confirms 5678901237 is valid", () => {
    expect(method21("5678901237")).toEqual(Result.VALID);
  });

  // // Check for invalid result
  it("confirms 1234467893 is invalid", () => {
    expect(method21("1234467893")).toEqual(Result.INVALID);
  });
});
