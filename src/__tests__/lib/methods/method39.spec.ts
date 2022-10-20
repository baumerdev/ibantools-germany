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

import method39 from "../../../lib/methods/method39";

describe("method 39", () => {
  it("confirms 200205 is valid", () => {
    expect(method39("200205")).toEqual(Result.VALID);
  });
  it("confirms 10019400 is valid", () => {
    expect(method39("10019400")).toEqual(Result.VALID);
  });
  it("confirms 1234567890 is valid", () => {
    expect(method39("1234567890")).toEqual(Result.VALID);
  });
  it("confirms 34567890 is valid", () => {
    expect(method39("34567890")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 210205 is invalid", () => {
    expect(method39("210205")).toEqual(Result.INVALID);
  });
  it("confirms 10018400 is invalid", () => {
    expect(method39("10018400")).toEqual(Result.INVALID);
  });
  it("confirms 1244567890 is invalid", () => {
    expect(method39("1244567890")).toEqual(Result.INVALID);
  });
  it("confirms 34577890 is invalid", () => {
    expect(method39("34577890")).toEqual(Result.INVALID);
  });
});
