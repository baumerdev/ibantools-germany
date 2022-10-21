# IBANTools-Germany: validator, tools and data for German bank accounts.

![CI: Lint, test and build](https://github.com/baumerdev/ibantools-germany/workflows/Lint,%20test%20and%20build/badge.svg?branch=main)

This TypeScript/JavaScript library validates German bank account numbers and
can be used as an enhancement of IBAN validators like [IBANTools](https://simplify.github.io/ibantools/).
In addition, this library also contains general data such as bank names and
BIC/Swift Codes.

* [Installation](#installation)
* [Usage](#usage)
* [Data Source](#data-source)

## Installation

### Package Manager

Add it to your project with your package manager like npm or yarn. You should
explicitly install the latest version since the bank data may change multiple
times a year.

```sh
$ npm install --save ibantools-germany@latest
# or
$ yarn add ibantools-germany@latest
```

### Browser / CDN

If you just want the functions in your browser, you can include one or both of
the following pre-build files.

```html
<!-- available functions: generateBBAN, isValidAccountNumberBLZ, isValidBBAN -->
<script src="https://cdn.jsdelivr.net/npm/ibantools-germany/dist/build/browser.js"></script>

<!-- available functions: bankDataByBLZ, ibanDetails, isValidBIC -->
<script src="https://cdn.jsdelivr.net/npm/ibantools-germany/dist/build/browser-bank-data.js"></script>
```

## Usage

The npm package contains the code for ESM and CJS, so instead of `import`, as
shown in the usage examples below, you can use `require` as well.

### Validation

You can validate the bank account number and BLZ (Bankleitzahl = bank sort
code), BBAN part of IBAN and BIC/Swift Codes. But even if those formats are
international standards this library only validates data for Germany and will
return false for all other countries.

```javascript
import { isValidAccountNumberBLZ, isValidBBAN, isValidBIC } from "ibantools-germany"

// These functions rely on the smaller current.checkDigit.json ; see below
isValidAccountNumberBLZ("9290701", "10220500"); // true
isValidBBAN("102205000009290701"); // true
isValidBBAN("20041010050500013M02606"); // false (corrent but not a German BBAN)

// This function relies on the larger current.bank.json ; see below
isValidBIC("MARKDEFF"); // true
isValidBIC("MARKDEFFXXX"); // true
isValidBIC("foobar"); // false (invalid format)
isValidBIC("BNPAFRPH"); // false (corrent but not a German BIC)
```

### Generation

```javascript
import { generateBBAN } from "ibantools-germany"

generateBBAN("9290701", "10220500"); // 102205000009290701
generateBBAN("foo", "bar"); // null
```

### IBAN / Bank Details

You can get detailed information for the BBAN like the extracted bank account
number and BLZ as well as the bank name and BIC (if assigned).

```javascript
// These functions rely on the larger current.bank.json ; see below
import { bankDataByBLZ, ibanDetails } from "ibantools-germany"

ibanDetails("100100100000138301");
// {
//   accountNumber: "0000138301",
//   blz: "10010010",
//   bankName: "Postbank Ndl der Deutsche Bank",
//   bic: "PBNKDEFFXXX"
// }

bankDataByBLZ("10010010");
// {
//   bankName: "Postbank Ndl der Deutsche Bank",
//   bic: "PBNKDEFFXXX"
// }
```

### Browser / CDN

If you use the pre-build version, an object `ibantoolsGermany` is globally
defined on `window` containing the functions.

```javascript
// browser.js
ibantoolsGermany.generateBBAN("9290701", "10220500");
ibantoolsGermany.isValidAccountNumberBLZ("9290701", "10220500");
ibantoolsGermany.isValidBBAN("102205000009290701");
// browser-bank-data.js
ibantoolsGermany.bankDataByBLZ("10010010");
ibantoolsGermany.ibanDetails("100100100000138301");
ibantoolsGermany.isValidBIC("MARKDEFF");
```

## Data Source

Sadly there is no algorithm to verify every German bank account number, BBAN
or BIC. Each bank has its own method(s) which can change from time to time.
Therefore [Deutsche Bundesbank](https://www.bundesbank.de/en/tasks/payment-systems/services/bank-sort-codes/download-bank-sort-codes-626218)
publishes updated data every quarter.

These updates can contain technical changes (modifications in check digit
methods) and content changes (BLZ, bank names, etc). It is also possible that
there are updates that do not contain any relevant changes for this library at
all.

### Bundle Size

The Deutsche Bundesbank data file is very large and currently contains over
15,000 lines. The import script creates two JSON files based on the raw data
file, only containing the data we really need.

- **current.checkDigit.json** (~35 kb) Requirement for the validation of bank
  accounts, BLZ and BBAN
- **current.bank.json** (~200 kb) Requirement for everything to do with bank
  data details and BIC

The above usage examples always state which file is used. You should use a
webtool that supports tree-shaking and only use the functions you really
need. Due to the significant size of the larger file, you should consider
using the functions based on this file rather in the backend.

If you use the pre-build Browser / CDN files:
* browser.js includes current.checkDigit.json
* browser-bank-data.js includes all of current.bank.json

