/**
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

import { getDigits, paddedAccountNumber } from "../helper";
import { Result } from "../types";

import { method06Core } from "./method06";
import { method33Core } from "./method33";
import { method51NominalAccount } from "./method51";

const methodA = (number: string): Result => {
  // This method came with it's own PASCAL code routine. For that reason almost
  // all of the the JavaScript code and variable naming in this function match
  // its PASCAL counterpart even though there are better approaches available
  // in modern-day JavaScript.

  let i; // temp var; control variable
  let c2; // temp var; odd or even digit
  let d2; // temp var
  let a5; // temp var; sum, can be negative
  let p; // temp var; keep check digit

  // ATTENTION:
  // According to the method documentation "konto(i)" means the value at unit
  // number i. So konto(1) is the first digit of the account number and
  // konto(10) the last. So we shift our account number by one with a
  // meaningless number -1
  const konto = [-1, ...getDigits(number)];

  // tables with check digits
  // ATTENTION:
  // Allthough konto(i) starts at index 1 these tables start at index 0
  const tab1 = [0, 4, 3, 2, 6]; // check digits table 1
  const tab2 = [7, 1, 5, 9, 8]; // check digits table 2

  // I kept most of the PASCAL code to help keeping track of the code

  // i : = 4;
  i = 4;

  // DO WHILE KONTO (i) = 0
  while (konto[i] === 0) {
    //  i : = i + 1;
    i = i + 1;
    // END;
  }

  // C2 : = i mod 2;
  c2 = i % 2;
  // D2 : = 0;
  d2 = 0;
  // A5 : = 0;
  a5 = 0;

  // DO WHILE i < 10
  while (i < 10) {
    //  CASE KONTO (i) OF
    switch (konto[i]) {
      //  0:
      case 0:
        //  KONTO (i) : = 5;
        konto[i] = 5;
        break;
      //  1:
      case 1:
        //  KONTO (i) : = 6;
        konto[i] = 6;
        break;
      //  5:
      case 5:
        //  KONTO (i) : = 10;
        konto[i] = 10;
        break;
      //  6:
      case 6:
        //  KONTO (i) : = 1;
        konto[i] = 1;
        break;
      //  END;
    }

    //  IF C2 = D2 THEN
    if (c2 === d2) {
      //  BEGIN
      //  IF KONTO (i) > 5 THEN
      if (konto[i] > 5) {
        //  BEGIN
        //  IF C2 = 0 AND D2 = 0 THEN
        if (c2 === 0 && d2 === 0) {
          //  BEGIN
          //  C2 : = 1;
          c2 = 1;
          //  D2 : = 1;
          d2 = 1;
          //  A5 : = A5 + 6 - (KONTO (i) - 6);
          a5 = a5 + 6 - (konto[i] - 6);
          //  END ELSE
        } else {
          //  BEGIN
          //  C2 : = 0;
          c2 = 0;
          //  D2 : = 0;
          d2 = 0;
          //  A5 : = A5 + KONTO (i);
          a5 = a5 + konto[i];
          //  END
        }
        //  END ELSE
      } else {
        //  BEGIN
        //  IF C2 = 0 AND D2 = 0 THEN
        if (c2 === 0 && d2 === 0) {
          //  BEGIN
          //  C2 : = 1;
          c2 = 1;
          //  A5 : = A5 + KONTO (i);
          a5 = a5 + konto[i];
          //  END ELSE
        } else {
          //  BEGIN
          //  C2 : = 0
          c2 = 0;
          //  A5 : = A5 + KONTO (i);
          a5 = a5 + konto[i];
          //  END
        }
        //  END;
      }
      //  END ELSE
    } else {
      //  BEGIN
      //  IF KONTO (i) > 5 THEN
      if (konto[i] > 5) {
        //  BEGIN
        //  IF C2 = 0 THEN
        if (c2 === 0) {
          //  BEGIN
          //  C2 : = 1;
          c2 = 1;
          //  D2 : = 0;
          d2 = 0;
          //  A5 : = A5 - 6 + (KONTO (i) - 6);
          a5 = a5 - 6 + (konto[i] - 6);
          //  END ELSE
        } else {
          //  BEGIN
          //  C2 : = 0;
          c2 = 0;
          //  D2 : = 1;
          d2 = 1;
          //  A5 : = A5 - KONTO (i);
          a5 = a5 - konto[i];
          //  END
        }
      } else {
        //  BEGIN
        //  IF C2 = 0 THEN
        if (c2 === 0) {
          //  BEGIN
          //  C2 : = 1;
          c2 = 1;
          //  A5 : = A5 - KONTO (i);
          a5 = a5 - konto[i];
          //  END ELSE
        } else {
          //  BEGIN
          //  C2 := 0;
          c2 = 0;
          //  A5 := A5 - KONTO (i);
          a5 = a5 - konto[i];
          //  END
        }
        //  END;
      }
      //  END;
    }
    //  i := i + 1;
    i = i + 1;
    // END
  }

  // DO WHILE A5 < 0 OR A5 > 4
  while (a5 < 0 || a5 > 4) {
    //  IF A5 > 4 THEN
    if (a5 > 4) {
      //  BEGIN
      //  A5 := A5 - 5;
      a5 = a5 - 5;
      //  END ELSE
    } else {
      //  BEGIN
      //  A5 := A5 + 5;
      a5 = a5 + 5;
      //  END
    }
    // END;
  }

  // IF D2 = 0 THEN
  if (d2 === 0) {
    // BEGIN
    //  P := TAB1 (A5);
    p = tab1[a5];
    // END ELSE
  } else {
    // BEGIN
    //  P := TAB2 (A5);
    p = tab2[a5];
    // END
  }

  // IF P = KONTO (10) THEN
  if (p === konto[10]) {
    // BEGIN
    //  Prüfziffer OK;
    return "VALID";
    // END ELSE
  } else {
    // BEGIN
    //  IF KONTO (4) = 0 THEN
    if (konto[4] === 0) {
      //  BEGIN
      //  IF P > 4 THEN
      if (p > 4) {
        //  BEGIN
        //  P := P - 5;
        p = p - 5;
        //  END ELSE
      } else {
        //  BEGIN
        //  P := P + 5;
        p = p + 5;
        //  END
      }
      //  IF P = KONTO (10) THEN
      if (p === konto[10]) {
        //  BEGIN
        //  Prüfziffer OK;
        return "VALID";
        //  END
      }
      //  END;
    }
    // END,
  }

  return "INVALID";
};

const methodB = (number: string): Result => {
  return method33Core(number, [2, 3, 4, 5, 6]);
};

const methodC = (number: string): Result => {
  return method33Core(number, [2, 3, 4, 5, 6], 7);
};

const methodD = (number: string): Result => {
  return method06Core(number, [2, 3, 4, 5, 6, 7]);
};

export default (number: string): Result => {
  const paddedNumber = paddedAccountNumber(number);

  // Exemption
  if (paddedNumber.slice(2, 3) === "9") {
    return method51NominalAccount(paddedNumber);
  }

  if (methodA(paddedNumber) === "VALID") {
    return "VALID";
  }

  if (methodB(paddedNumber.slice(4, 10)) === "VALID") {
    return "VALID";
  }

  if (methodC(paddedNumber.slice(4, 10)) === "VALID") {
    return "VALID";
  }

  if (methodD(paddedNumber.slice(3, 10)) === "VALID") {
    return "VALID";
  }

  return "INVALID";
};
