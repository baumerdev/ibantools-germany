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

import method96 from "../../../lib/methods/method96";

describe("method 96", () => {
  it("confirms 0000254100 is valid (variation 1)", () => {
    expect(method96("0000254100")).toEqual("VALID");
  });
  it("confirms 9421000009 is valid (variation 1)", () => {
    expect(method96("9421000009")).toEqual("VALID");
  });
  it("confirms 0000000208 is valid (variation 2)", () => {
    expect(method96("0000000208")).toEqual("VALID");
  });
  it("confirms 0101115152 is valid (variation 2)", () => {
    expect(method96("0101115152")).toEqual("VALID");
  });
  it("confirms 0301204301 is valid (variation 2)", () => {
    expect(method96("0301204301")).toEqual("VALID");
  });
  it("confirms 0001300000 is valid (variation 3)", () => {
    expect(method96("0001300000")).toEqual("VALID");
  });
  it("confirms 0001300000 is valid (variation 3)", () => {
    expect(method96("0099399999")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0000254200 is invalid", () => {
    expect(method96("0000254200")).toEqual("INVALID");
  });
  it("confirms 9421000109 is invalid", () => {
    expect(method96("9421000109")).toEqual("INVALID");
  });
  it("confirms 0000000408 is invalid", () => {
    expect(method96("0000000408")).toEqual("INVALID");
  });
  it("confirms 0101315152 is invalid", () => {
    expect(method96("0101315152")).toEqual("INVALID");
  });
  it("confirms 0301224301 is invalid", () => {
    expect(method96("0301224301")).toEqual("INVALID");
  });
});
