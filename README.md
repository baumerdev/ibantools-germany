# IBANTools-Germany: Validator and Generator for German Bank Accounts

![CI: Lint, test and build](https://github.com/baumerdev/ibantools-germany/workflows/Lint,%20test%20and%20build/badge.svg?branch=main)

This TypeScript/JavaScript library validates German bank account numbers and
can be used as an enhancement of IBAN validators like [IBANTools](https://simplify.github.io/ibantools/).

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

If you just want the functions in your browser, you can include the following
pre-build file.

```html
<script src="https://cdn.jsdelivr.net/npm/ibantools-germany/dist/build/browser.js"></script>
```

## Usage

The npm package contains the code for ESM and CJS, so instead of `import`, as
shown in the usage examples below, you can use `require` as well.

### Validation

You can validate the bank account number and BLZ (Bankleitzahl = bank sort
code), or the BBAN part of an IBAN. Note: Even if IBAN is an international
standard, this library only validates data for Germany and will return false
for other countries.

```javascript
import { isValidAccountNumberBLZ, isValidBBAN, isValidBIC } from "ibantools-germany"

isValidAccountNumberBLZ("9290701", "10220500"); // true
isValidBBAN("102205000009290701"); // true
isValidIBAN("DE23102205000009290701"); // true

isValidBBAN("20041010050500013M02606"); // false (valid but not a German BBAN)
isValidIBAN("FR1420041010050500013M02606"); // false (valid but not a German IBAN)
```

### Generation

```javascript
import { generateBBAN } from "ibantools-germany"

generateBBAN("9290701", "10220500"); // 102205000009290701
generateBBAN("foo", "bar"); // null

generateIBAN("9290701", "10220500"); // DE23102205000009290701
generateIBAN("foo", "bar"); // null
```

### Browser / CDN

If you use the pre-build version, an object `ibantoolsGermany` is globally
defined on `window` containing the functions.

```javascript
ibantoolsGermany.generateBBAN("9290701", "10220500");
ibantoolsGermany.generateIBAN("9290701", "10220500");
ibantoolsGermany.isValidAccountNumberBLZ("9290701", "10220500");
ibantoolsGermany.isValidBBAN("102205000009290701");
ibantoolsGermany.isValidIBAN("DE23102205000009290701");
```

## Data Source

Sadly there is no algorithm to verify every German bank account number or BBAN.
Each bank has its own method(s) which can change from time to time. Therefore
[Deutsche Bundesbank](https://www.bundesbank.de/en/tasks/payment-systems/services/bank-sort-codes/download-bank-sort-codes-626218)
publishes updated data every quarter.

Updates can contain technical changes (modifications in check digit methods)
and content changes (BLZ, bank names, etc). It is also possible that there
are updates that do not contain any relevant changes for this library at
all.
