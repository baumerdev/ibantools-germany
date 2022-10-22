/**
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

import currentCheckDigits from "../data/current.json";

export interface CheckDigits {
  [method: string]: number[];
}

/**
 * Get the check digit method assigned for a BLZ
 *
 * @param blz German BLZ with 8 digits
 * @returns Check digit method or null if invalid
 */
export const methodForBLZ = (blz: string): string | null => {
  if (!blz.match(/^[1-9]\d{7}$/)) {
    return null;
  }

  const numbericBlz = Number(blz);

  return (
    Object.keys(currentCheckDigits as CheckDigits).find((method) => {
      return (currentCheckDigits as CheckDigits)[method].includes(numbericBlz);
    }) ?? null
  );
};
