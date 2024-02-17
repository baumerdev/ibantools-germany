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

import methodB7 from "../../../lib/methods/methodB7";

describe("method B7", () => {
  it("confirms 0700001529 is valid", () => {
    expect(methodB7("0700001529")).toEqual("VALID");
  });
  it("confirms 0730000019 is valid", () => {
    expect(methodB7("0730000019")).toEqual("VALID");
  });
  it("confirms 0001001008 is valid", () => {
    expect(methodB7("0001001008")).toEqual("VALID");
  });
  it("confirms 0001057887 is valid", () => {
    expect(methodB7("0001057887")).toEqual("VALID");
  });
  it("confirms 0001007222 is valid", () => {
    expect(methodB7("0001007222")).toEqual("VALID");
  });
  it("confirms 0810011825 is valid", () => {
    expect(methodB7("0810011825")).toEqual("VALID");
  });
  it("confirms 0800107653 is valid", () => {
    expect(methodB7("0800107653")).toEqual("VALID");
  });
  it("confirms 0005922372 is valid", () => {
    expect(methodB7("0005922372")).toEqual("VALID");
  });
  it("has no check digit calculation for 0000999999", () => {
    expect(methodB7("0000999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0006000000", () => {
    expect(methodB7("0006000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0699999999", () => {
    expect(methodB7("0699999999")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });
  it("has no check digit calculation for 0900000000", () => {
    expect(methodB7("0900000000")).toEqual("NO_CHECK_DIGIT_CALCULATION");
  });

  // Check for invalid result
  it("confirms 0001057886 is invalid", () => {
    expect(methodB7("0001057886")).toEqual("INVALID");
  });
  it("confirms 0003815570 is invalid", () => {
    expect(methodB7("0003815570")).toEqual("INVALID");
  });
  it("confirms 0005620516 is invalid", () => {
    expect(methodB7("0005620516")).toEqual("INVALID");
  });
  it("confirms 0740912243 is invalid", () => {
    expect(methodB7("0740912243")).toEqual("INVALID");
  });
  it("confirms 0893524479 is invalid", () => {
    expect(methodB7("0893524479")).toEqual("INVALID");
  });
});
