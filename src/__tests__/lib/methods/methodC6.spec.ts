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

import methodC6 from "../../../lib/methods/methodC6";

describe("method C6", () => {
  it("confirms 0000065516 is valid", () => {
    expect(methodC6("0000065516")).toEqual("VALID");
  });
  it("confirms 0203178249 is valid", () => {
    expect(methodC6("0203178249")).toEqual("VALID");
  });
  it("confirms 1031405209 is valid", () => {
    expect(methodC6("1031405209")).toEqual("VALID");
  });
  it("confirms 1082012201 is valid", () => {
    expect(methodC6("1082012201")).toEqual("VALID");
  });
  it("confirms 2003455189 is valid", () => {
    expect(methodC6("2003455189")).toEqual("VALID");
  });
  it("confirms 2004001016 is valid", () => {
    expect(methodC6("2004001016")).toEqual("VALID");
  });
  it("confirms 3110150986 is valid", () => {
    expect(methodC6("3110150986")).toEqual("VALID");
  });
  it("confirms 3068459207 is valid", () => {
    expect(methodC6("3068459207")).toEqual("VALID");
  });
  it("confirms 5035105948 is valid", () => {
    expect(methodC6("5035105948")).toEqual("VALID");
  });
  it("confirms 5286102149 is valid", () => {
    expect(methodC6("5286102149")).toEqual("VALID");
  });
  it("confirms 4012660028 is valid", () => {
    expect(methodC6("4012660028")).toEqual("VALID");
  });
  it("confirms 4100235626 is valid", () => {
    expect(methodC6("4100235626")).toEqual("VALID");
  });
  it("confirms 6028426119 is valid", () => {
    expect(methodC6("6028426119")).toEqual("VALID");
  });
  it("confirms 6861001755 is valid", () => {
    expect(methodC6("6861001755")).toEqual("VALID");
  });
  it("confirms 7008199027 is valid", () => {
    expect(methodC6("7008199027")).toEqual("VALID");
  });
  it("confirms 7002000023 is valid", () => {
    expect(methodC6("7002000023")).toEqual("VALID");
  });
  it("confirms 8526080015 is valid", () => {
    expect(methodC6("8526080015")).toEqual("VALID");
  });
  it("confirms 8711072264 is valid", () => {
    expect(methodC6("8711072264")).toEqual("VALID");
  });
  it("confirms 9000430223 is valid", () => {
    expect(methodC6("9000430223")).toEqual("VALID");
  });
  it("confirms 9000781153 is valid", () => {
    expect(methodC6("9000781153")).toEqual("VALID");
  });

  // Check for invalid result
  it("confirms 0525111212 is invalid", () => {
    expect(methodC6("0525111212")).toEqual("INVALID");
  });
  it("confirms 0091423614 is invalid", () => {
    expect(methodC6("0091423614")).toEqual("INVALID");
  });
  it("confirms 1082311275 is invalid", () => {
    expect(methodC6("1082311275")).toEqual("INVALID");
  });
  it("confirms 1000118821 is invalid", () => {
    expect(methodC6("1000118821")).toEqual("INVALID");
  });
  it("confirms 2004306518 is invalid", () => {
    expect(methodC6("2004306518")).toEqual("INVALID");
  });
  it("confirms 2016001206 is invalid", () => {
    expect(methodC6("2016001206")).toEqual("INVALID");
  });
  it("confirms 3462816371 is invalid", () => {
    expect(methodC6("3462816371")).toEqual("INVALID");
  });
  it("confirms 3622548632 is invalid", () => {
    expect(methodC6("3622548632")).toEqual("INVALID");
  });
  it("confirms 4232300158 is invalid", () => {
    expect(methodC6("4232300158")).toEqual("INVALID");
  });
  it("confirms 4000456126 is invalid", () => {
    expect(methodC6("4000456126")).toEqual("INVALID");
  });
  it("confirms 5002684526 is invalid", () => {
    expect(methodC6("5002684526")).toEqual("INVALID");
  });
  it("confirms 5564123850 is invalid", () => {
    expect(methodC6("5564123850")).toEqual("INVALID");
  });
  it("confirms 6295473774 is invalid", () => {
    expect(methodC6("6295473774")).toEqual("INVALID");
  });
  it("confirms 6640806317 is invalid", () => {
    expect(methodC6("6640806317")).toEqual("INVALID");
  });
  it("confirms 7000062022 is invalid", () => {
    expect(methodC6("7000062022")).toEqual("INVALID");
  });
  it("confirms 7006003027 is invalid", () => {
    expect(methodC6("7006003027")).toEqual("INVALID");
  });
  it("confirms 8348300002 is invalid", () => {
    expect(methodC6("8348300002")).toEqual("INVALID");
  });
  it("confirms 8654216984 is invalid", () => {
    expect(methodC6("8654216984")).toEqual("INVALID");
  });
  it("confirms 9000641509 is invalid", () => {
    expect(methodC6("9000641509")).toEqual("INVALID");
  });
  it("confirms 9000260986 is invalid", () => {
    expect(methodC6("9000260986")).toEqual("INVALID");
  });
  it("confirms x123456789 is invalid", () => {
    expect(methodC6("x123456789")).toEqual("INVALID");
  });
});
