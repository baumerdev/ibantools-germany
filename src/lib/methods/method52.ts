/**
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { calculateSum, getDigits, weightDigits } from "../helper";
import type { Result } from "../types";

import method20 from "./method20";

const eser8 = (number: string, blz: string): string | null => {
  if (number.length !== 8) {
    return null;
  }

  const blz58 = blz.slice(4, 8);
  const number12 = number.slice(0, 2);
  const number3Rest = number.slice(2, 8).replace(/^0+/, "");

  return `${blz58}${number12}${number3Rest}`;
};

export const eserValidate = (eserAccount: string): Result => {
  const digits = getDigits(eserAccount);
  const givenCheckDigit = digits.slice(5, 6)[0]; // Check digit is last digit

  const weigths = [2, 4, 8, 5, 10, 9, 7, 3, 6, 1, 2, 4].slice(0, digits.length);
  weigths.reverse();
  const checkDigitWeight = weigths.splice(5, 1, 0)[0];
  const weightedDigits = weightDigits(digits, weigths);
  const sum = calculateSum(weightedDigits);

  const modulo11 = sum % 11;
  for (let i = 0; i < 10; i++) {
    const modulo = (modulo11 + i * checkDigitWeight) % 11;
    if (modulo === 10) {
      if (givenCheckDigit === i) {
        return "VALID";
      }
      break;
    }
  }

  return "INVALID";
};

export default (number: string, blz: string): Result => {
  if (number.length === 10 && number.match(/^9/)) {
    return method20(number);
  }

  if (blz.length !== 8 || !blz.match(/^\d{3}5/)) {
    return "INVALID";
  }

  const eserAccount = eser8(number, blz);
  if (!eserAccount) {
    return "INVALID";
  }

  return eserValidate(eserAccount);
};
