/*!
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
