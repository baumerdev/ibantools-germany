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

import * as methods from "./methods";
import { Result } from "./types";

/**
 * Validate account number with given check digit method.
 *
 * Some few banks use a legacy method from GDR/Soviet times that requires the
 * BLZ for validation as well.
 *
 * @param accountNumber Account number for validation
 * @param blz German BLZ for validation
 * @param method Two-char method identifier (00-E4)
 * @returns Validation Result
 */
export const methodDispatch = (
  accountNumber: string,
  blz: string,
  method: string
): Result => {
  switch (method) {
    case "00":
      return methods.method00(accountNumber);
    case "01":
      return methods.method01(accountNumber);
    case "02":
      return methods.method02(accountNumber);
    case "03":
      return methods.method03(accountNumber);
    case "04":
      return methods.method04(accountNumber);
    case "05":
      return methods.method05(accountNumber);
    case "06":
      return methods.method06(accountNumber);
    case "07":
      return methods.method07(accountNumber);
    case "08":
      return methods.method08(accountNumber);
    case "09":
      return methods.method09(accountNumber);
    case "10":
      return methods.method10(accountNumber);
    case "11":
      return methods.method11(accountNumber);
    case "12":
      return methods.method12(accountNumber);
    case "13":
      return methods.method13(accountNumber);
    case "14":
      return methods.method14(accountNumber);
    case "15":
      return methods.method15(accountNumber);
    case "16":
      return methods.method16(accountNumber);
    case "17":
      return methods.method17(accountNumber);
    case "18":
      return methods.method18(accountNumber);
    case "19":
      return methods.method19(accountNumber);
    case "20":
      return methods.method20(accountNumber);
    case "21":
      return methods.method21(accountNumber);
    case "22":
      return methods.method22(accountNumber);
    case "23":
      return methods.method23(accountNumber);
    case "24":
      return methods.method24(accountNumber);
    case "25":
      return methods.method25(accountNumber);
    case "26":
      return methods.method26(accountNumber);
    case "27":
      return methods.method27(accountNumber);
    case "28":
      return methods.method28(accountNumber);
    case "29":
      return methods.method29(accountNumber);
    case "30":
      return methods.method30(accountNumber);
    case "31":
      return methods.method31(accountNumber);
    case "32":
      return methods.method32(accountNumber);
    case "33":
      return methods.method33(accountNumber);
    case "34":
      return methods.method34(accountNumber);
    case "35":
      return methods.method35(accountNumber);
    case "36":
      return methods.method36(accountNumber);
    case "37":
      return methods.method37(accountNumber);
    case "38":
      return methods.method38(accountNumber);
    case "39":
      return methods.method39(accountNumber);
    case "40":
      return methods.method40(accountNumber);
    case "41":
      return methods.method41(accountNumber);
    case "42":
      return methods.method42(accountNumber);
    case "43":
      return methods.method43(accountNumber);
    case "44":
      return methods.method44(accountNumber);
    case "45":
      return methods.method45(accountNumber);
    case "46":
      return methods.method46(accountNumber);
    case "47":
      return methods.method47(accountNumber);
    case "48":
      return methods.method48(accountNumber);
    case "49":
      return methods.method49(accountNumber);
    case "50":
      return methods.method50(accountNumber);
    case "51":
      return methods.method51(accountNumber);
    case "52":
      return methods.method52(accountNumber, blz);
    case "53":
      return methods.method53(accountNumber, blz);
    case "54":
      return methods.method54(accountNumber);
    case "55":
      return methods.method55(accountNumber);
    case "56":
      return methods.method56(accountNumber);
    case "57":
      return methods.method57(accountNumber);
    case "58":
      return methods.method58(accountNumber);
    case "59":
      return methods.method59(accountNumber);
    case "60":
      return methods.method60(accountNumber);
    case "61":
      return methods.method61(accountNumber);
    case "62":
      return methods.method62(accountNumber);
    case "63":
      return methods.method63(accountNumber);
    case "64":
      return methods.method64(accountNumber);
    case "65":
      return methods.method65(accountNumber);
    case "66":
      return methods.method66(accountNumber);
    case "67":
      return methods.method67(accountNumber);
    case "68":
      return methods.method68(accountNumber);
    case "69":
      return methods.method69(accountNumber);
    case "70":
      return methods.method70(accountNumber);
    case "71":
      return methods.method71(accountNumber);
    case "72":
      return methods.method72(accountNumber);
    case "73":
      return methods.method73(accountNumber);
    case "74":
      return methods.method74(accountNumber);
    case "75":
      return methods.method75(accountNumber);
    case "76":
      return methods.method76(accountNumber);
    case "77":
      return methods.method77(accountNumber);
    case "78":
      return methods.method78(accountNumber);
    case "79":
      return methods.method79(accountNumber);
    case "80":
      return methods.method80(accountNumber);
    case "81":
      return methods.method81(accountNumber);
    case "82":
      return methods.method82(accountNumber);
    case "83":
      return methods.method83(accountNumber);
    case "84":
      return methods.method84(accountNumber);
    case "85":
      return methods.method85(accountNumber);
    case "86":
      return methods.method86(accountNumber);
    case "87":
      return methods.method87(accountNumber);
    case "88":
      return methods.method88(accountNumber);
    case "89":
      return methods.method89(accountNumber);
    case "90":
      return methods.method90(accountNumber);
    case "91":
      return methods.method91(accountNumber);
    case "92":
      return methods.method92(accountNumber);
    case "93":
      return methods.method93(accountNumber);
    case "94":
      return methods.method94(accountNumber);
    case "95":
      return methods.method95(accountNumber);
    case "96":
      return methods.method96(accountNumber);
    case "97":
      return methods.method97(accountNumber);
    case "98":
      return methods.method98(accountNumber);
    case "99":
      return methods.method99(accountNumber);
    case "A0":
      return methods.methodA0(accountNumber);
    case "A1":
      return methods.methodA1(accountNumber);
    case "A2":
      return methods.methodA2(accountNumber);
    case "A3":
      return methods.methodA3(accountNumber);
    case "A4":
      return methods.methodA4(accountNumber);
    case "A5":
      return methods.methodA5(accountNumber);
    case "A6":
      return methods.methodA6(accountNumber);
    case "A7":
      return methods.methodA7(accountNumber);
    case "A8":
      return methods.methodA8(accountNumber);
    case "A9":
      return methods.methodA9(accountNumber);
    case "B0":
      return methods.methodB0(accountNumber);
    case "B1":
      return methods.methodB1(accountNumber);
    case "B2":
      return methods.methodB2(accountNumber);
    case "B3":
      return methods.methodB3(accountNumber);
    case "B4":
      return methods.methodB4(accountNumber);
    case "B5":
      return methods.methodB5(accountNumber);
    case "B6":
      return methods.methodB6(accountNumber, blz);
    case "B7":
      return methods.methodB7(accountNumber);
    case "B8":
      return methods.methodB8(accountNumber);
    case "B9":
      return methods.methodB9(accountNumber);
    case "C0":
      return methods.methodC0(accountNumber, blz);
    case "C1":
      return methods.methodC1(accountNumber);
    case "C2":
      return methods.methodC2(accountNumber);
    case "C3":
      return methods.methodC3(accountNumber);
    case "C4":
      return methods.methodC4(accountNumber);
    case "C5":
      return methods.methodC5(accountNumber);
    case "C6":
      return methods.methodC6(accountNumber);
    case "C7":
      return methods.methodC7(accountNumber);
    case "C8":
      return methods.methodC8(accountNumber);
    case "C9":
      return methods.methodC9(accountNumber);
    case "D0":
      return methods.methodD0(accountNumber);
    case "D1":
      return methods.methodD1(accountNumber);
    case "D2":
      return methods.methodD2(accountNumber);
    case "D3":
      return methods.methodD3(accountNumber);
    case "D4":
      return methods.methodD4(accountNumber);
    case "D5":
      return methods.methodD5(accountNumber);
    case "D6":
      return methods.methodD6(accountNumber);
    case "D7":
      return methods.methodD7(accountNumber);
    case "D8":
      return methods.methodD8(accountNumber);
    case "D9":
      return methods.methodD9(accountNumber);
    case "E0":
      return methods.methodE0(accountNumber);
    case "E1":
      return methods.methodE1(accountNumber);
    case "E2":
      return methods.methodE2(accountNumber);
    case "E3":
      return methods.methodE3(accountNumber);
    case "E4":
      return methods.methodE4(accountNumber);
    default:
      return Result.UNKOWN_CHECK_DIGIT_CALCULATION_METHOD;
  }
};
