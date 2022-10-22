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

import methodD0 from "../../../lib/methods/methodD0";

describe("method D0", () => {
  it("confirms 6100272324 is valid (variation 1)", () => {
    expect(methodD0("6100272324")).toEqual(Result.VALID);
  });
  it("confirms 6100273479 is valid (variation 1)", () => {
    expect(methodD0("6100273479")).toEqual(Result.VALID);
  });
  it("has no check digit calculation for 5700000000", () => {
    expect(methodD0("5700000000")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });
  it("has no check digit calculation for 5799999999", () => {
    expect(methodD0("5799999999")).toEqual(Result.NO_CHECK_DIGIT_CALCULATION);
  });

  // Check for invalid result
  it("confirms 6100272885 is invalid", () => {
    expect(methodD0("6100272885")).toEqual(Result.INVALID);
  });
  it("confirms 6100273377 is invalid", () => {
    expect(methodD0("6100273377")).toEqual(Result.INVALID);
  });
  it("confirms 6100274012 is invalid", () => {
    expect(methodD0("6100274012")).toEqual(Result.INVALID);
  });
  it("confirms 5699999999 is invalid", () => {
    expect(methodD0("5699999999")).toEqual(Result.INVALID);
  });
  it("confirms 5800000000 is invalid", () => {
    expect(methodD0("5800000000")).toEqual(Result.INVALID);
  });
});
