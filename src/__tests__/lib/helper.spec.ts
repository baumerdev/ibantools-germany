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

import {
  calculateCrossSum,
  calculateCrossSums,
  calculateSum,
  diffNextHalfDecade,
  getDigits,
  getUnitFromNumber,
  getUnitsFromNumbers,
  moduloDifference,
  paddedAccountNumber,
  weightDigits,
  weightDigitsRTL,
} from "../../lib/helper";

describe("paddedAccountNumber", () => {
  it("converts empty string to 0000000000", () => {
    expect(paddedAccountNumber("")).toEqual("0000000000");
  });
  it("converts 0000000000 to 0000000000", () => {
    expect(paddedAccountNumber("0000000000")).toEqual("0000000000");
  });
  it("converts 1 to 0000000001", () => {
    expect(paddedAccountNumber("1")).toEqual("0000000001");
  });
  it("converts 1111111111 to 1111111111", () => {
    expect(paddedAccountNumber("1111111111")).toEqual("1111111111");
  });
  it("should throw an error for account numbers > 10 digits", () => {
    expect(() => {
      paddedAccountNumber("12345678901");
    }).toThrow();
  });
});

describe("getDigits", () => {
  it("converts empty string to empty array", () => {
    expect(getDigits("")).toEqual([]);
  });
  it("converts number 0 to array with number 0", () => {
    expect(getDigits(0)).toEqual([0]);
  });
  it("converts string '0' to array with number 0", () => {
    expect(getDigits("0")).toEqual([0]);
  });
  it("converts number 1234 to array with numbers 1, 2, 3, 4", () => {
    expect(getDigits(1234)).toEqual([1, 2, 3, 4]);
  });
  it("converts string '1234' to array with numbers 1, 2, 3, 4", () => {
    expect(getDigits("1234")).toEqual([1, 2, 3, 4]);
  });
});

describe("calculateSum", () => {
  it("calculates empty array to sum 0", () => {
    expect(calculateSum([])).toEqual(0);
  });
  it("calculates array with numbers 1, 2, 3 to sum 6", () => {
    expect(calculateSum([1, 2, 3])).toEqual(6);
  });
});

describe("calculateCrossSum", () => {
  it("calculates 0 as cross sum for 0", () => {
    expect(calculateCrossSum(0)).toEqual(0);
  });
  it("calculates 9 as cross sum for 9", () => {
    expect(calculateCrossSum(9)).toEqual(9);
  });
  it("calculates 1 as cross sum for 10", () => {
    expect(calculateCrossSum(10)).toEqual(1);
  });
  it("calculates 18 as cross sum for 99", () => {
    expect(calculateCrossSum(99)).toEqual(18);
  });
});

describe("calculateSums", () => {
  it("returns empty array for empty array", () => {
    expect(calculateCrossSums([])).toEqual([]);
  });
  it("calculates array with numbers 17, 146 to sum array with cross sums 8, 11", () => {
    expect(calculateCrossSums([17, 146])).toEqual([8, 11]);
  });
});

describe("getUnitFromNumber", () => {
  it("returns unit 0 for 0", () => {
    expect(getUnitFromNumber(0)).toEqual(0);
  });
  it("returns unit 9 for 9", () => {
    expect(getUnitFromNumber(9)).toEqual(9);
  });
  it("returns unit 0 for 10", () => {
    expect(getUnitFromNumber(0)).toEqual(0);
  });
  it("returns unit 3 for 123", () => {
    expect(getUnitFromNumber(123)).toEqual(3);
  });
});

describe("getUnitsFromNumbers", () => {
  it("returns empty array for empty array", () => {
    expect(getUnitsFromNumbers([])).toEqual([]);
  });
  it("calculates array with units 4, 3, 1 for array with numbers 94, 83, 1", () => {
    expect(getUnitsFromNumbers([94, 83, 1])).toEqual([4, 3, 1]);
  });
});

describe("weightDigits", () => {
  it("returns empty array for empty array", () => {
    expect(weightDigits([], [])).toEqual([]);
  });

  it("returns array [1, 4, 3, 8] for numbers [1, 2, 3, 4] with weights [1, 2, 1, 2]", () => {
    expect(weightDigits([1, 2, 3, 4], [1, 2, 1, 2])).toEqual([1, 4, 3, 8]);
  });

  it("returns array [2, 6, 4, 10] for numbers [1, 2, 3, 4] with weights [1, 2, 1, 2]", () => {
    expect(weightDigits([1, 2, 3, 4], [1, 2, 1, 2], "MULTIPLY_ADD")).toEqual([
      2, 6, 4, 10,
    ]);
  });

  it("should throw an error if more digits than weights are given", () => {
    expect(() => {
      weightDigits([1], []);
    }).toThrow();
  });
});

describe("weightDigitsRTL", () => {
  it("returns empty array for empty array", () => {
    expect(weightDigitsRTL([], [])).toEqual([]);
  });

  it("returns array [4, 6, 2, 2] for numbers [1, 2, 3, 4] with weights [1, 2, 1, 2]", () => {
    expect(weightDigitsRTL([1, 2, 3, 4], [1, 2, 1, 2])).toEqual([4, 6, 2, 2]);
  });

  it("returns array [5, 8, 3, 4] for numbers [1, 2, 3, 4] with weights [1, 2, 1, 2]", () => {
    expect(weightDigitsRTL([1, 2, 3, 4], [1, 2, 1, 2], "MULTIPLY_ADD")).toEqual(
      [5, 8, 3, 4]
    );
  });
});

describe("moduloDifference", () => {
  it("returns 0 for minuend 0 and value 0", () => {
    expect(moduloDifference(0, 1, 0)).toEqual({ difference: 0, remainder: 0 });
  });

  it("returns 9 for divisor 10, minuend 11 and value 12", () => {
    expect(moduloDifference(12, 10, 11)).toEqual({
      difference: 9,
      remainder: 2,
    });
  });
});

describe("diffNextHalfDecade", () => {
  it("returns difference 5 to half-decade 5 for 0", () => {
    expect(diffNextHalfDecade(0)).toEqual(5);
  });
  it("returns difference 4 to half-decade 5 for 1", () => {
    expect(diffNextHalfDecade(1)).toEqual(4);
  });
  it("returns difference 1 to half-decade 5 for 4", () => {
    expect(diffNextHalfDecade(4)).toEqual(1);
  });
  it("returns difference 0 to half-decade 5 for 5", () => {
    expect(diffNextHalfDecade(5)).toEqual(0);
  });
  it("returns difference 9 to half-decade 15 for 6", () => {
    expect(diffNextHalfDecade(6)).toEqual(9);
  });
});
