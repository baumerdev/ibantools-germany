/*!
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

import currentBank from "../../data/current.bank.json";
import currentCheckDigit from "../../data/current.checkDigit.json";
import {
  bankDataByBLZ,
  Banks,
  CheckDigits,
  ibanDetails,
  methodForBLZ,
} from "../../lib/data";

describe("current.bank.json", () => {
  // Safeguard that there are enough converted entries.
  it("contains more than 3000 entries", () => {
    expect(Object.keys(currentBank as Banks).length).toBeGreaterThan(3500);
  });
});

describe("current.checkDigit.json", () => {
  // Safeguard that there are enough converted entries.
  it("contains more than 100 entries", () => {
    expect(
      Object.keys(currentCheckDigit as CheckDigits).length
    ).toBeGreaterThan(100);
  });
});

describe("methodForBLZ", () => {
  Object.keys(currentCheckDigit as CheckDigits).forEach((method) => {
    const firstBLZForMethod = (currentCheckDigit as CheckDigits)[method][0];
    it(`returns ${method} for BLZ ${firstBLZForMethod}`, () => {
      expect(methodForBLZ(String(firstBLZForMethod))).toEqual(method);
    });
  });

  it("returns null for unknown BLZ 00000000", () => {
    expect(methodForBLZ("00000000")).toEqual(null);
  });
});

describe("bankDataByBLZ", () => {
  Object.keys(currentBank as Banks).forEach((blz) => {
    const blzData = (currentBank as Banks)[blz];
    const blzObject = { bankName: blzData[0], bic: blzData[1] };
    it(`returns correct data for BLZ ${blz}`, () => {
      expect(bankDataByBLZ(String(blz))).toEqual(blzObject);
    });
  });

  it("returns null for unknown BLZ 12345678", () => {
    expect(bankDataByBLZ("12345678")).toEqual(null);
  });
  it("returns null for unknown BLZ 00000000", () => {
    expect(bankDataByBLZ("00000000")).toEqual(null);
  });
  it("returns null for BLZ 1234567 (not 8 digits)", () => {
    expect(bankDataByBLZ("1234567")).toEqual(null);
  });
  it("returns null for BLZ 123_5678 (invalid char)", () => {
    expect(bankDataByBLZ("123_5678")).toEqual(null);
  });
});

describe("ibanDetails", () => {
  it("returns data for BBAN null (not a string)", () => {
    expect(ibanDetails("100000000000000001")).toEqual({
      accountNumber: "0000000001",
      bankName: "Bundesbank",
      bic: "MARKDEF1100",
      blz: "10000000",
    });
  });
  it("returns null for BBAN null (not a string)", () => {
    expect(ibanDetails(null)).toEqual(null);
  });
  it("returns null for BBAN with invalid format", () => {
    expect(ibanDetails("0")).toEqual(null);
  });
  it("returns null for BBAN with invalid check digit", () => {
    expect(ibanDetails("100100100000000000")).toEqual(null);
  });
  it("returns null for BBAN with unknown BLZ", () => {
    expect(ibanDetails("123456780000000000", false)).toEqual(null);
  });
  it("returns null for BBAN with unknown BLZ", () => {
    expect(ibanDetails("000000000000000000")).toEqual(null);
  });
  it("returns data for BBAN with unknown BLZ but disabled validation", () => {
    expect(ibanDetails("100000000000000000", false)).not.toEqual(null);
  });
});
