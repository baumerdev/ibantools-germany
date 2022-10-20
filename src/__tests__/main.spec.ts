/*!
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

import * as main from "../main";

/* eslint-disable @typescript-eslint/no-unsafe-call */
describe("main", () => {
  it("exports function named bankDataByBLZ", () => {
    expect(typeof main.bankDataByBLZ).toBe("function");
  });
  it("exports function named generateBBAN", () => {
    expect(typeof main.generateBBAN).toBe("function");
  });
  it("exports function named ibanDetails", () => {
    expect(typeof main.ibanDetails).toBe("function");
  });
  it("exports function named isValidAccountNumberBLZ", () => {
    expect(typeof main.isValidAccountNumberBLZ).toBe("function");
  });
  it("exports function named isValidBBAN", () => {
    expect(typeof main.isValidBBAN).toBe("function");
  });
});
