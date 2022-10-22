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

import method75 from "../../../lib/methods/method75";

describe("method 75", () => {
  it("confirms 123455 is valid (6 digits)", () => {
    expect(method75("123455")).toEqual(Result.VALID);
  });
  it("confirms 1234567 is valid (7 digits)", () => {
    expect(method75("1234567")).toEqual(Result.VALID);
  });
  it("confirms 912345578 is valid (9 digits, starting with 9)", () => {
    expect(method75("912345578")).toEqual(Result.VALID);
  });
  it("confirms 912345500 is valid (9 digits, starting with 9)", () => {
    expect(method75("912345500")).toEqual(Result.VALID);
  });
  it("confirms 123455789 is valid (9 digits)", () => {
    expect(method75("123455789")).toEqual(Result.VALID);
  });
  it("confirms 123455000 is valid (9 digits)", () => {
    expect(method75("123455000")).toEqual(Result.VALID);
  });
  it("confirms 1234567890 is valid (10 digits)", () => {
    expect(method75("1234567890")).toEqual(Result.VALID);
  });
  it("confirms 1234567000 is valid (10 digits)", () => {
    expect(method75("1234567000")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 123555 is invalid", () => {
    expect(method75("123555")).toEqual(Result.INVALID);
  });
  it("confirms 1334567 is invalid", () => {
    expect(method75("1334567")).toEqual(Result.INVALID);
  });
  it("confirms 912346578 is invalid", () => {
    expect(method75("912346578")).toEqual(Result.INVALID);
  });
  it("confirms 912346500 is invalid", () => {
    expect(method75("912346500")).toEqual(Result.INVALID);
  });
  it("confirms 223455789 is invalid", () => {
    expect(method75("223455789")).toEqual(Result.INVALID);
  });
  it("confirms 223455000 is invalid", () => {
    expect(method75("223455000")).toEqual(Result.INVALID);
  });
  it("confirms 1234577890 is invalid", () => {
    expect(method75("1234577890")).toEqual(Result.INVALID);
  });
  it("confirms 1234577000 is invalid", () => {
    expect(method75("1234577000")).toEqual(Result.INVALID);
  });
});
