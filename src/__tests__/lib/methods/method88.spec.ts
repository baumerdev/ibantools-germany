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

import method88 from "../../../lib/methods/method88";

describe("method 88", () => {
  it("confirms 2525259 is valid", () => {
    expect(method88("2525259")).toEqual("VALID");
  });
  it("confirms 1000500 is valid", () => {
    expect(method88("1000500")).toEqual("VALID");
  });
  it("confirms 90013000 is valid (exemption)", () => {
    expect(method88("90013000")).toEqual("VALID");
  });
  it("confirms 92525253 is valid (exemption)", () => {
    expect(method88("92525253")).toEqual("VALID");
  });
  it("confirms 99913003 is valid (exemption)", () => {
    expect(method88("99913003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 2535259 is invalid", () => {
    expect(method88("2535259")).toEqual("INVALID");
  });
  it("confirms 1000600 is invalid", () => {
    expect(method88("1000600")).toEqual("INVALID");
  });
  it("confirms 90013100 is invalid", () => {
    expect(method88("90013100")).toEqual("INVALID");
  });
  it("confirms 93525253 is invalid", () => {
    expect(method88("93525253")).toEqual("INVALID");
  });
  it("confirms 99913013 is invalid", () => {
    expect(method88("99913013")).toEqual("INVALID");
  });
  it("confirms 1234567890 is invalid", () => {
    expect(method88("1234567890")).toEqual("INVALID");
  });
});
