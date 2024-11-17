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

/**
 * Fill the account number with zeros from the left to get a 10 digits string
 */
export const paddedAccountNumber = (number: string): string => {
  if (number.length > 10) {
    throw new Error("Account number must not be longer than 10 digits.");
  }

  return number.padStart(10, "0");
};

/**
 * Get an array of digits for a number or string
 *
 * Example: 0118999 will return [0, 1, 1, 8, 9 ,9 ,9]
 */
export const getDigits = (numberOrString: number | string): number[] => {
  const string =
    typeof numberOrString === "string"
      ? numberOrString
      : numberOrString.toString();
  return string.split("").map((digitString) => Number(digitString));
};

/**
 * Get the sum of all numbers
 *
 * Example: [1,2,3] will return 6
 */
export const calculateSum = (numbers: number[]): number =>
  numbers.reduce((accumulated, number) => accumulated + number, 0);

/**
 * Get cross sum of number
 *
 * Example: 17 will return 8, 146 will return 11
 */
export const calculateCrossSum = (number: number): number =>
  calculateSum(getDigits(number));

/**
 * Get cross sum of each number
 *
 * Example: [17, 146] will return [8, 11]
 */
export const calculateCrossSums = (numbers: number[]): number[] =>
  numbers.map((number) => calculateCrossSum(number));

/**
 * Get unit column of number
 *
 * Example: 94 will return 4, 236 will return 6
 */
export const getUnitFromNumber = (number: number): number =>
  getDigits(number).slice(-1)[0];

/**
 * Get unit column of numbers
 *
 * Example: [94, 83] will return [4, 3]
 */
export const getUnitsFromNumbers = (numbers: number[]): number[] =>
  numbers.map((number) => getUnitFromNumber(number));

export type WeightType = "MULTIPLY" | "MULTIPLY_ADD";

/**
 * Return an array of digits weighted. This can either be by
 * multiplying the digits with the weight (default) or adding
 * the weight to the digits or by multiplying and then adding
 * the weight.
 *
 * Example: digits [1, 2 , 3 , 4] with weights [1, 2, 1, 2]
 * will return
 *   [1, 4, 3, 8] with type MULTIPLY
 *   [2, 6, 4, 10] with type MULTIPLY_ADD
 */
export const weightDigits = (
  digits: number[],
  weights: number[],
  weightType: WeightType = "MULTIPLY",
): number[] => {
  if (weights.length < digits.length) {
    throw new Error(
      "Number of weights must be greater or equal the number of digits.",
    );
  }

  return digits.map((digit, index) => {
    if (weightType === "MULTIPLY_ADD") {
      return digit * weights[index] + weights[index];
    }
    return digit * weights[index];
  });
};

/**
 * Does the same as weightDigits() but uses the weight (left to right)
 * on the digits (right to left)
 */
export const weightDigitsRTL = (
  digits: number[],
  weights: number[],
  weightType: WeightType = "MULTIPLY",
): number[] => weightDigits([...digits].reverse(), weights, weightType);

/**
 * Calculates the modulo (remainder of division) and subtracts it from
 * the minuend, returns difference and remainder.
 *
 * Example: Value 12 with divisor 10 and minuend 11 will return 9 (remainder of 12/10 = 2; 11-2 = 9)
 */
export const moduloDifference = (
  value: number,
  divisor: number,
  minuend: number,
): { difference: number; remainder: number } => {
  const remainder = value % divisor;
  return { difference: minuend - remainder, remainder };
};

/**
 * Get the difference to next half decade (5, 15, 25...).
 *
 * Example: Value 12 result is 3, value 6 is 9
 */
export const diffNextHalfDecade = (value: number): number => {
  if (value % 10 <= 5) {
    return 5 - (value % 10);
  }
  return 10 - ((value % 10) % 5);
};

/**
 * Checksum calculation method for IBAN
 */
export const modulo97 = (value: string) => {
  let checksum = Number(value.slice(0, 2));
  let fragment: string;
  for (let offset = 2; offset < value.length; offset += 7) {
    fragment = `${checksum}${value.substring(offset, offset + 7)}`;
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
};

/**
 * Convert letters to digits (ASCII code minus 55)
 */
export const lettersToDigits = (string: string): string =>
  string.replace(/[a-z]/gi, (letter) => String(letter.charCodeAt(0) - 55));
