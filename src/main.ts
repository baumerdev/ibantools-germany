/*!
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { generateBBAN, generateIBAN } from "./lib/generate";
import {
  AccountNumberBLZ,
  BankNameBIC,
  IBANDetails,
  ProbablyString,
} from "./lib/types";
import {
  isValidAccountNumberBLZ,
  isValidBBAN,
  isValidIBAN,
} from "./lib/validate";

export {
  AccountNumberBLZ,
  BankNameBIC,
  generateBBAN,
  generateIBAN,
  IBANDetails,
  isValidAccountNumberBLZ,
  isValidBBAN,
  isValidIBAN,
  ProbablyString,
};
