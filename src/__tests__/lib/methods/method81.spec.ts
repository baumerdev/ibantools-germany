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

import method81 from "../../../lib/methods/method81";

describe("method 81", () => {
  it("confirms 0646440 is valid", () => {
    expect(method81("0646440")).toEqual("VALID");
  });
  it("confirms 1359100 is valid", () => {
    expect(method81("1359100")).toEqual("VALID");
  });
  it("confirms 0199100002 is valid (nominal account, variation 1)", () => {
    expect(method81("0199100002")).toEqual("VALID");
  });
  it("confirms 0099100010 is valid (nominal account, variation 1)", () => {
    expect(method81("0099100010")).toEqual("VALID");
  });
  it("confirms 2599100002 is valid (nominal account, variation 1)", () => {
    expect(method81("2599100002")).toEqual("VALID");
  });
  it("confirms 0199100004 is valid (nominal account, variation 2)", () => {
    expect(method81("0199100004")).toEqual("VALID");
  });
  it("confirms 2599100003 is valid (nominal account, variation 2)", () => {
    expect(method81("2599100003")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0647440 is invalid", () => {
    expect(method81("0647440")).toEqual("INVALID");
  });
  it("confirms 1259100 is invalid", () => {
    expect(method81("1259100")).toEqual("INVALID");
  });
});
