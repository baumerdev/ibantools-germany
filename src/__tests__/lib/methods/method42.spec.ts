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

import method42 from "../../../lib/methods/method42";

describe("method 42", () => {
  it("confirms 59498 is valid", () => {
    expect(method42("59498")).toEqual(Result.VALID);
  });
  it("confirms 59510 is valid", () => {
    expect(method42("59510")).toEqual(Result.VALID);
  });
  it("confirms 1234567899 is valid", () => {
    expect(method42("1234567899")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 59598 is invalid", () => {
    expect(method42("59598")).toEqual(Result.INVALID);
  });
  it("confirms 59520 is invalid", () => {
    expect(method42("59520")).toEqual(Result.INVALID);
  });
  it("confirms 1234568899 is invalid", () => {
    expect(method42("1234568899")).toEqual(Result.INVALID);
  });
});
