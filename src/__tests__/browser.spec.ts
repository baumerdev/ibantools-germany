/*!
 * @jest-environment jsdom
 *
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

import "../browser";

/* eslint-disable @typescript-eslint/no-unsafe-call */
describe("browser", () => {
  it("adds function ibantoolsGermany.generateBBAN to window", () => {
    expect(typeof window.ibantoolsGermany.generateBBAN).toBe("function");
  });
  it("adds function ibantoolsGermany.generateIBAN to window", () => {
    expect(typeof window.ibantoolsGermany.generateIBAN).toBe("function");
  });
  it("adds function ibantoolsGermany.isValidAccountNumberBLZ to window", () => {
    expect(typeof window.ibantoolsGermany.isValidAccountNumberBLZ).toBe(
      "function"
    );
  });
  it("adds function ibantoolsGermany.isValidBBAN to window", () => {
    expect(typeof window.ibantoolsGermany.isValidBBAN).toBe("function");
  });
  it("adds function ibantoolsGermany.isValidIBAN to window", () => {
    expect(typeof window.ibantoolsGermany.isValidIBAN).toBe("function");
  });
});
