/**
 * ibantools-germany
 * Copyright (C) 2022-2024 Markus Baumer <markus@baumer.dev>
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

import method37 from "../../../lib/methods/method37";

describe("method 37", () => {
  it("confirms 624315 is valid", () => {
    expect(method37("624315")).toEqual("VALID");
  });
  it("confirms 632500 is valid", () => {
    expect(method37("632500")).toEqual("VALID");
  });
  it("confirms 1234567891 is valid", () => {
    expect(method37("1234567891")).toEqual("VALID");
  });
  it("confirms 567891 is valid", () => {
    expect(method37("567891")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 123278 is invalid", () => {
    expect(method37("123278")).toEqual("INVALID");
  });
  it("confirms 632600 is invalid", () => {
    expect(method37("632600")).toEqual("INVALID");
  });
  it("confirms 1234567991 is invalid", () => {
    expect(method37("1234567991")).toEqual("INVALID");
  });
  it("confirms 568891 is invalid", () => {
    expect(method37("568891")).toEqual("INVALID");
  });
});
