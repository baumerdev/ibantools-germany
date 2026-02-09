/*!
 * ibantools-germany
 * Copyright (c) 2022-2026 Markus Baumer <markus@baumer.dev>
 * SPDX-License-Identifier: MIT OR MPL-2.0
 */

import { generateBBAN, generateIBAN } from "./lib/generate";
import {
  isValidAccountNumberBLZ,
  isValidBBAN,
  isValidIBAN,
} from "./lib/validate";

declare global {
  interface Window {
    ibantoolsGermany: {
      // biome-ignore lint/complexity/noBannedTypes: Browser global, only need "callable", not a specific signature
      [name: string]: Function;
    };
  }
}

if (typeof window.ibantoolsGermany === "undefined") {
  window.ibantoolsGermany = {};
}

window.ibantoolsGermany.generateBBAN = generateBBAN;
window.ibantoolsGermany.generateIBAN = generateIBAN;
window.ibantoolsGermany.isValidAccountNumberBLZ = isValidAccountNumberBLZ;
window.ibantoolsGermany.isValidBBAN = isValidBBAN;
window.ibantoolsGermany.isValidIBAN = isValidIBAN;
