/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import currentCheckDigits from "../../data/current.json";
import nextCheckDigits from "../../data/next.json";
import {
  type CheckDigits,
  checkDigitData,
  combineCurrentNext,
  dateObject,
  methodForBLZ,
  type NextCheckDigits,
} from "../../lib/data";

const nextValidDate = new Date((nextCheckDigits as NextCheckDigits).valid);

describe("current.json", () => {
  // Safeguard that there are enough converted entries.
  it("contains more than 90 entries", () => {
    expect(
      Object.keys(currentCheckDigits as CheckDigits).length,
    ).toBeGreaterThan(90);
  });
});

describe("dateObject", () => {
  it("returns same date object as provided", () => {
    const testDate = new Date();
    expect(dateObject(testDate)).toBe(testDate);
  });
  it("creates correct date object from string", () => {
    expect(dateObject("2022-03-04T05:06:07.000+0800")).toEqual(
      new Date("2022-03-04T05:06:07.000+0800"),
    );
  });
  it("creates current date object for undefined param", () => {
    const before = Date.now();
    const result = dateObject().getTime();
    expect(result).toBeGreaterThanOrEqual(before);
    expect(result).toBeLessThanOrEqual(Date.now());
  });
});

describe("combineCurrentNext", () => {
  const exampleCurrent: CheckDigits = {
    AA: [1, 2, 3],
    BB: [4, 5, 6],
    CC: [7, 8, 9],
    DD: [2],
    EE: [9],
  };
  const exampleNextAdd: CheckDigits = {
    BB: [7],
    DD: [1],
    FF: [10],
  };
  const exampleNextRemove: CheckDigits = {
    CC: [7],
    DD: [2],
    EE: [9],
  };
  it("correctly builds combined data", () => {
    expect(
      combineCurrentNext(exampleCurrent, exampleNextAdd, exampleNextRemove),
    ).toEqual({
      AA: [1, 2, 3],
      BB: [4, 5, 6, 7],
      CC: [8, 9],
      DD: [1],
      FF: [10],
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
  for (const method of Object.keys(currentCheckDigits as CheckDigits)) {
    const firstBLZForMethod = (currentCheckDigits as CheckDigits)[method][0];
    it(`returns ${method} for BLZ ${firstBLZForMethod}`, () => {
      expect(methodForBLZ(String(firstBLZForMethod), new Date(0))).toEqual(
        method,
      );
    });
  }

  it("returns null for unknown BLZ 00000000", () => {
    expect(methodForBLZ("00000000")).toEqual(null);
  });
});

describe("methodForBLZ with next", () => {
  const combinedCheckDigits = combineCurrentNext(
    currentCheckDigits,
    (nextCheckDigits as NextCheckDigits).add,
    (nextCheckDigits as NextCheckDigits).remove,
  );

  for (const method of Object.keys(combinedCheckDigits)) {
    const firstBLZForMethod = combinedCheckDigits[method][0];
    it(`returns ${method} for BLZ ${firstBLZForMethod}`, () => {
      expect(
        methodForBLZ(String(firstBLZForMethod), new Date(nextValidDate)),
      ).toEqual(method);
    });
  }

  it("returns null for unknown BLZ 00000000", () => {
    expect(methodForBLZ("00000000", new Date(nextValidDate))).toEqual(null);
  });
});

describe("Change 2026-09-07", () => {
  test("BLZ 50120801 is unknown before valid-from date", () => {
    expect(methodForBLZ("50120801", new Date(0))).toEqual(null);
  });
  test("BLZ 50120801 has method 00 at valid-from date", () => {
    expect(methodForBLZ("50120801", new Date(nextValidDate))).toEqual("00");
  });
  test("BLZ 65461878 has method 10 before valid-from date", () => {
    expect(methodForBLZ("65461878", new Date(0))).toEqual("10");
  });
  test("BLZ 65461878 is unknown at valid-from date", () => {
    expect(methodForBLZ("65461878", new Date(nextValidDate))).toEqual(null);
  });
  test("BLZ 50120383 has method D9 before valid-from date", () => {
    expect(methodForBLZ("50120383", new Date(0))).toEqual("D9");
  });
  test("BLZ 50120383 has method 09 at valid-from date", () => {
    expect(methodForBLZ("50120383", new Date(nextValidDate))).toEqual("09");
  });
});
