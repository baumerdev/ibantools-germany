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

import method06 from "../../../lib/methods/method06";

describe("method 06", () => {
  it("confirms 94012341 is valid", () => {
    expect(method06("94012341")).toEqual("VALID");
  });
  it("confirms 5073321010 is valid", () => {
    expect(method06("5073321010")).toEqual("VALID");
  });
  it("confirms 1234567892 is valid", () => {
    expect(method06("1234567892")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 94013341 is invalid", () => {
    expect(method06("94013341")).toEqual("INVALID");
  });
  it("confirms 5073331010 is invalid", () => {
    expect(method06("5073331010")).toEqual("INVALID");
  });
  it("confirms 1234667892 is invalid", () => {
    expect(method06("1234667892")).toEqual("INVALID");
  });
});
