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
  isValidBIC,
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

describe("isValidBIC", () => {
  it("returns true for BIC MARKDEF1100", () => {
    expect(isValidBIC("MARKDEF1100")).toEqual(true);
  });
  it("returns true for BIC PBNKDEFFXXX", () => {
    expect(isValidBIC("PBNKDEFFXXX")).toEqual(true);
  });
  it("returns true for BIC PBNKDEFF", () => {
    expect(isValidBIC("PBNKDEFF")).toEqual(true);
  });

  it("returns false for null", () => {
    expect(isValidBIC(null)).toEqual(false);
  });
  it("returns false for invalid BIC format", () => {
    expect(isValidBIC("1")).toEqual(false);
  });
  it("returns false for unknown BIC AAAADE00000", () => {
    expect(isValidBIC("AAAADE00000")).toEqual(false);
  });
});
