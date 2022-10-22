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

import method36 from "../../../lib/methods/method36";

describe("method 36", () => {
  it("confirms 113178 is valid", () => {
    expect(method36("113178")).toEqual(Result.VALID);
  });
  it("confirms 146666 is valid", () => {
    expect(method36("146666")).toEqual(Result.VALID);
  });
  it("confirms 1234567897 is valid", () => {
    expect(method36("1234567897")).toEqual(Result.VALID);
  });
  it("confirms 67897 is valid", () => {
    expect(method36("67897")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 113278 is invalid", () => {
    expect(method36("113278")).toEqual(Result.INVALID);
  });
  it("confirms 147666 is invalid", () => {
    expect(method36("147666")).toEqual(Result.INVALID);
  });
  it("confirms 1234667887 is invalid", () => {
    expect(method36("1234667887")).toEqual(Result.INVALID);
  });
  it("confirms 67997 is invalid", () => {
    expect(method36("67997")).toEqual(Result.INVALID);
  });
});
