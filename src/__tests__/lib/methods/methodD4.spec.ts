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

import methodD4 from "../../../lib/methods/methodD4";

describe("method D4", () => {
  it("confirms 1112048219 is valid", () => {
    expect(methodD4("1112048219")).toEqual("VALID");
  });
  it("confirms 2024601814 is valid", () => {
    expect(methodD4("2024601814")).toEqual("VALID");
  });
  it("confirms 3000005012 is valid", () => {
    expect(methodD4("3000005012")).toEqual("VALID");
  });
  it("confirms 4143406984 is valid", () => {
    expect(methodD4("4143406984")).toEqual("VALID");
  });
  it("confirms 5926485111 is valid", () => {
    expect(methodD4("5926485111")).toEqual("VALID");
  });
  it("confirms 6286304975 is valid", () => {
    expect(methodD4("6286304975")).toEqual("VALID");
  });
  it("confirms 7900256617 is valid", () => {
    expect(methodD4("7900256617")).toEqual("VALID");
  });
  it("confirms 8102228628 is valid", () => {
    expect(methodD4("8102228628")).toEqual("VALID");
  });
  it("confirms 9002364588 is valid", () => {
    expect(methodD4("9002364588")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0359432843 is invalid", () => {
    expect(methodD4("0359432843")).toEqual("INVALID");
  });
  it("confirms 1000062023 is invalid", () => {
    expect(methodD4("1000062023")).toEqual("INVALID");
  });
  it("confirms 2204271250 is invalid", () => {
    expect(methodD4("2204271250")).toEqual("INVALID");
  });
  it("confirms 3051681017 is invalid", () => {
    expect(methodD4("3051681017")).toEqual("INVALID");
  });
  it("confirms 4000123456 is invalid", () => {
    expect(methodD4("4000123456")).toEqual("INVALID");
  });
  it("confirms 5212744564 is invalid", () => {
    expect(methodD4("5212744564")).toEqual("INVALID");
  });
  it("confirms 6286420010 is invalid", () => {
    expect(methodD4("6286420010")).toEqual("INVALID");
  });
  it("confirms 7859103459 is invalid", () => {
    expect(methodD4("7859103459")).toEqual("INVALID");
  });
  it("confirms 8003306026 is invalid", () => {
    expect(methodD4("8003306026")).toEqual("INVALID");
  });
  it("confirms 9916524534 is invalid", () => {
    expect(methodD4("9916524534")).toEqual("INVALID");
  });
});
