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

import methodD7 from "../../../lib/methods/methodD7";

describe("method D7", () => {
  it("confirms 0500018205 is valid", () => {
    expect(methodD7("0500018205")).toEqual(Result.VALID);
  });
  it("confirms 0230103715 is valid", () => {
    expect(methodD7("0230103715")).toEqual(Result.VALID);
  });
  it("confirms 0301000434 is valid", () => {
    expect(methodD7("0301000434")).toEqual(Result.VALID);
  });
  it("confirms 0330035104 is valid", () => {
    expect(methodD7("0330035104")).toEqual(Result.VALID);
  });
  it("confirms 0420001202 is valid", () => {
    expect(methodD7("0420001202")).toEqual(Result.VALID);
  });
  it("confirms 0134637709 is valid", () => {
    expect(methodD7("0134637709")).toEqual(Result.VALID);
  });
  it("confirms 0201005939 is valid", () => {
    expect(methodD7("0201005939")).toEqual(Result.VALID);
  });
  it("confirms 0602006999 is valid", () => {
    expect(methodD7("0602006999")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 0501006102 is invalid", () => {
    expect(methodD7("0501006102")).toEqual(Result.INVALID);
  });
  it("confirms 0231307867 is invalid", () => {
    expect(methodD7("0231307867")).toEqual(Result.INVALID);
  });
  it("confirms 0301005331 is invalid", () => {
    expect(methodD7("0301005331")).toEqual(Result.INVALID);
  });
  it("confirms 0330034104 is invalid", () => {
    expect(methodD7("0330034104")).toEqual(Result.INVALID);
  });
  it("confirms 0420001302 is invalid", () => {
    expect(methodD7("0420001302")).toEqual(Result.INVALID);
  });
  it("confirms 0135638809 is invalid", () => {
    expect(methodD7("0135638809")).toEqual(Result.INVALID);
  });
  it("confirms 0202005939 is invalid", () => {
    expect(methodD7("0202005939")).toEqual(Result.INVALID);
  });
  it("confirms 0601006977 is invalid", () => {
    expect(methodD7("0601006977")).toEqual(Result.INVALID);
  });
});
