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

import { extractAccountNumberBLZFromBBAN } from "../../lib/extract";

describe("extractAccountNumberBLZFromBBAN", () => {
  it("extracts account number 9290701, BLZ 10220500 from BBAN 102205000009290701", () => {
    expect(extractAccountNumberBLZFromBBAN("102205000009290701")).toEqual({
      accountNumber: "0009290701",
      blz: "10220500",
    });
  });

  it("cannot extract data from invalid BBAN (wrong format)", () => {
    expect(extractAccountNumberBLZFromBBAN("1022050000092907021")).toEqual(
      null
    );
  });

  it("cannot extract data from invalid BBAN format (wrong length)", () => {
    expect(extractAccountNumberBLZFromBBAN("10220500000929070")).toEqual(null);
  });
});
