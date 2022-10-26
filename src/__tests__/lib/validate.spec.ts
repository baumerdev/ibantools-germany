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

import {
  isValidAccountNumberBLZ,
  isValidBBAN,
  isValidIBAN,
} from "../../lib/validate";

describe("validateBankAccount", () => {
  it("confirms account number 9290701, BLZ 10220500 is valid (valid check digit)", () => {
    expect(isValidAccountNumberBLZ("9290701", "10220500")).toEqual(true);
  });
  it("confirms account number 1, BLZ 10000000 is valid (no check digit calculation)", () => {
    expect(isValidAccountNumberBLZ("1", "10000000")).toEqual(true);
  });

  it("confirms BLZ 12345678 is invalid (BLZ valid structure but unknown)", () => {
    expect(isValidAccountNumberBLZ("1", "12345678")).toEqual(false);
  });
  it("confirms BLZ 0 is invalid (BLZ unknown)", () => {
    expect(isValidAccountNumberBLZ("1", "0")).toEqual(false);
  });
  it("confirms BLZ null is invalid (not a string)", () => {
    expect(isValidAccountNumberBLZ("1", null)).toEqual(false);
  });
  it("confirms account number null is invalid (not a string)", () => {
    expect(isValidAccountNumberBLZ(null, "1")).toEqual(false);
  });
});

describe("isValidBBAN", () => {
  it("confirms BBAN 102205000009290701 is valid (valid check digit)", () => {
    expect(isValidBBAN("102205000009290701")).toEqual(true);
  });
  it("confirms BBAN 100000000000000001 is valid (no check digit calculation)", () => {
    expect(isValidBBAN("100000000000000001")).toEqual(true);
  });

  it("confirms BBAN 000000000000000001 invalid (BLZ unknown)", () => {
    expect(isValidBBAN("000000000000000001")).toEqual(false);
  });
  it("confirms BBAN null is invalid (not a string)", () => {
    expect(isValidBBAN(null)).toEqual(false);
  });
});

describe("isValidIBAN", () => {
  it("confirms DE02300209000106531065 is valid", () => {
    expect(isValidIBAN("DE02300209000106531065")).toEqual(true);
  });
  it("confirms DE02300209000106531065 is valid  (onlyGerman)", () => {
    expect(isValidIBAN("DE02300209000106531065", true)).toEqual(true);
  });

  it("confirms DE00300209000106531065 is invalid (wrong checksum)", () => {
    expect(isValidIBAN("DE00300209000106531065")).toEqual(false);
  });
  it("confirms FR1420041010050500013M02606 is valid", () => {
    expect(isValidIBAN("FR1420041010050500013M02606")).toEqual(true);
  });
  it("confirms FR1420041010050500013M02606 is invalid (onlyGerman, wrong country)", () => {
    expect(isValidIBAN("FR1420041010050500013M02606", true)).toEqual(false);
  });

  it("confirms null is invalid (not a string)", () => {
    expect(isValidIBAN(null)).toEqual(false);
  });
  it("confirms 1234 is invalid (too short)", () => {
    expect(isValidIBAN("1234")).toEqual(false);
  });
});
