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

import { Result } from "../../../lib/types";

import method64 from "../../../lib/methods/method64";

describe("method 64", () => {
  it("confirms 1206473010 is valid", () => {
    expect(method64("1206473010")).toEqual(Result.VALID);
  });
  it("confirms 5016511020 is valid", () => {
    expect(method64("5016511020")).toEqual(Result.VALID);
  });
  it("confirms 1234562890 is valid", () => {
    expect(method64("1234562890")).toEqual(Result.VALID);
  });
  it("confirms 1234562000 is valid", () => {
    expect(method64("1234562000")).toEqual(Result.VALID);
  });

  // Check for invalid result
  it("confirms 1206483010 is invalid", () => {
    expect(method64("1206483010")).toEqual(Result.INVALID);
  });
  it("confirms 5015511020 is invalid", () => {
    expect(method64("5015511020")).toEqual(Result.INVALID);
  });
  it("confirms 1234563890 is invalid", () => {
    expect(method64("1234563890")).toEqual(Result.INVALID);
  });
  it("confirms 1134562000 is invalid", () => {
    expect(method64("1134562000")).toEqual(Result.INVALID);
  });
});
