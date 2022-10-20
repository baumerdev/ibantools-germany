/*!
 * @jest-environment jsdom
 *
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

import "../browser-bank-data";

/* eslint-disable @typescript-eslint/no-unsafe-call */
describe("browser-bank-data", () => {
  it("adds function ibantoolsGermany.bankDataByBLZ to window", () => {
    expect(typeof window.ibantoolsGermany.bankDataByBLZ).toBe("function");
  });
  it("adds function ibantoolsGermany.ibanDetails to window", () => {
    expect(typeof window.ibantoolsGermany.ibanDetails).toBe("function");
  });
  it("adds function ibantoolsGermany.isValidBIC to window", () => {
    expect(typeof window.ibantoolsGermany.isValidBIC).toBe("function");
  });
});
