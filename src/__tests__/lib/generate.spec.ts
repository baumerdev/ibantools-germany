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

import { generateBBAN, generateIBAN } from "../../lib/generate";

describe("generateBBAN", () => {
  it("generates BBAN 102205000009290701 from account number 9290701, BLZ 10220500", () => {
    expect(generateBBAN("9290701", "10220500")).toEqual("102205000009290701");
  });

  it("cannot generate BBAN for account number null", () => {
    expect(generateBBAN(null, "XX")).toEqual(null);
  });
  it("cannot generate BBAN for account number ''", () => {
    expect(generateBBAN("", "XX")).toEqual(null);
  });
  it("cannot generate BBAN for account number 01234567890", () => {
    expect(generateBBAN("01234567890", "XX")).toEqual(null);
  });
  it("cannot generate BBAN for BLZ null", () => {
    expect(generateBBAN("1", null)).toEqual(null);
  });
  it("cannot generate BBAN for BLZ '1234567'", () => {
    expect(generateBBAN("1", "1234567")).toEqual(null);
  });
  it("cannot generate BBAN for BLZ '123456789'", () => {
    expect(generateBBAN("1", "123456789")).toEqual(null);
  });
  it("cannot generate BBAN with wrong pattern", () => {
    expect(generateBBAN("x", "12345678")).toEqual(null);
  });
});

describe("generateIBAN", () => {
  it("generates IBAN DE23102205000009290701 from account number 9290701, BLZ 10220500", () => {
    expect(generateIBAN("9290701", "10220500")).toEqual(
      "DE23102205000009290701"
    );
  });
  it("generates IBAN DE06400000000000000000 from account number 0000000001, BLZ 10000000", () => {
    expect(generateIBAN("0000000000", "40000000")).toEqual(
      "DE06400000000000000000"
    );
  });

  it("cannot generate IBAN for account number null", () => {
    expect(generateIBAN(null, "XX")).toEqual(null);
  });
  it("cannot generate IBAN for account number ''", () => {
    expect(generateIBAN("", "XX")).toEqual(null);
  });
  it("cannot generate IBAN for account number 01234567890", () => {
    expect(generateIBAN("01234567890", "XX")).toEqual(null);
  });
  it("cannot generate IBAN for BLZ null", () => {
    expect(generateIBAN("1", null)).toEqual(null);
  });
  it("cannot generate IBAN for BLZ '1234567'", () => {
    expect(generateIBAN("1", "1234567")).toEqual(null);
  });
  it("cannot generate IBAN for BLZ '123456789'", () => {
    expect(generateIBAN("1", "123456789")).toEqual(null);
  });
  it("cannot generate IBAN with wrong pattern", () => {
    expect(generateIBAN("x", "12345678")).toEqual(null);
  });
});
