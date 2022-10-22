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

import method50 from "../../../lib/methods/method50";

describe("method 50", () => {
  it("confirms 4000005001 is valid", () => {
    expect(method50("4000005001")).toEqual(Result.VALID);
  });
  it("confirms 4444442001 is valid", () => {
    expect(method50("4444442001")).toEqual(Result.VALID);
  });
  it("confirms 1234560000 is valid", () => {
    expect(method50("1234560000")).toEqual(Result.VALID);
  });
  it("confirms 1234560 is valid (omitted subaccount)", () => {
    expect(method50("1234560")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 4001005001 is invalid", () => {
    expect(method50("4001005001")).toEqual(Result.INVALID);
  });
  it("confirms 4444452001 is invalid", () => {
    expect(method50("4444452001")).toEqual(Result.INVALID);
  });
  it("confirms 1234570000 is invalid", () => {
    expect(method50("1234570000")).toEqual(Result.INVALID);
  });
  it("confirms 1334560 is invalid", () => {
    expect(method50("1334560")).toEqual(Result.INVALID);
  });
});
