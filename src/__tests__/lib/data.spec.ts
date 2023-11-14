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

import currentCheckDigits from "../../data/current.json";
import nextCheckDigits from "../../data/next.json";
import {
  checkDigitData,
  CheckDigits,
  combineCurrentNext,
  dateObject,
  methodForBLZ,
  NextCheckDigits,
} from "../../lib/data";

const nextValidDate = new Date((nextCheckDigits as NextCheckDigits).valid);

describe("current.json", () => {
  // Safeguard that there are enough converted entries.
  it("contains more than 90 entries", () => {
    expect(
      Object.keys(currentCheckDigits as CheckDigits).length
    ).toBeGreaterThan(90);
  });
});

describe("dateObject", () => {
  it("returns same date object as provided", () => {
    const testDate = new Date();
    expect(dateObject(testDate)).toBe(testDate);
  });
  it("creates correct date object from string", () => {
    expect(dateObject("2022-03-04T05:06:07+0800")).toEqual(
      new Date("2022-03-04T05:06:07+0800")
    );
  });
  it("creates current date object for undefined param", () => {
    expect(dateObject()).toEqual(new Date());
  });
});

describe("combineCurrentNext", () => {
  const exampleCurrent: CheckDigits = {
    AA: [1, 2, 3],
    BB: [4, 5, 6],
    CC: [7, 8, 9],
    DD: [2],
  };
  const exampleNextAdd: CheckDigits = {
    BB: [7],
    DD: [1],
  };
  const exampleNextRemove: CheckDigits = {
    CC: [7],
    DD: [2],
  };
  it("correctly builds combined data", () => {
    expect(
      combineCurrentNext(exampleCurrent, exampleNextAdd, exampleNextRemove)
    ).toEqual({
      AA: [1, 2, 3],
      BB: [4, 5, 6, 7],
      CC: [8, 9],
      DD: [1],
    });
  });
});

describe("checkDigitData", () => {
  it("returns current if valid-from date isn't reached", () => {
    expect(checkDigitData(new Date(0))).toEqual(currentCheckDigits);
  });
  it("returns modified data if valid date is reached", () => {
    expect(checkDigitData(nextValidDate)).not.toEqual(currentCheckDigits);
  });
});

describe("methodForBLZ without next", () => {
  Object.keys(currentCheckDigits as CheckDigits).forEach((method) => {
    const firstBLZForMethod = (currentCheckDigits as CheckDigits)[method][0];
    it(`returns ${method} for BLZ ${firstBLZForMethod}`, () => {
      expect(methodForBLZ(String(firstBLZForMethod), new Date(0))).toEqual(
        method
      );
    });
  });

  it("returns null for unknown BLZ 00000000", () => {
    expect(methodForBLZ("00000000")).toEqual(null);
  });
});

describe("methodForBLZ with next", () => {
  const combinedCheckDigits = combineCurrentNext(
    currentCheckDigits,
    (nextCheckDigits as NextCheckDigits).add,
    (nextCheckDigits as NextCheckDigits).remove
  );

  Object.keys(combinedCheckDigits).forEach((method) => {
    const firstBLZForMethod = combinedCheckDigits[method][0];
    it(`returns ${method} for BLZ ${firstBLZForMethod}`, () => {
      expect(
        methodForBLZ(String(firstBLZForMethod), new Date(nextValidDate))
      ).toEqual(method);
    });
  });

  it("returns null for unknown BLZ 00000000", () => {
    expect(methodForBLZ("00000000", new Date(nextValidDate))).toEqual(null);
  });
});

describe("Change 2023-12-04", () => {
  test("BLZ 10018000 is unknown before valid-from date", () => {
    expect(methodForBLZ("10018000", new Date(0))).toEqual(null);
  });
  test("BLZ 10018000 has method 00 at valid-from date", () => {
    expect(methodForBLZ("10018000", new Date(nextValidDate))).toEqual("09");
  });
  test("BLZ 77069746 has method 94 before valid-from date", () => {
    expect(methodForBLZ("77069746", new Date(0))).toEqual("88");
  });
  test("BLZ 77069746 is unknown at valid-from date", () => {
    expect(methodForBLZ("77069746", new Date(nextValidDate))).toEqual(null);
  });
});
