# IBANTools-Germany: Validator and Generator for German Bank Accounts

![CI: Lint, test and build](https://github.com/baumerdev/ibantools-germany/workflows/Lint,%20test%20and%20build/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/baumerdev/ibantools-germany/badge.svg?branch=main)](https://coveralls.io/github/baumerdev/ibantools-germany?branch=main)

This TypeScript/JavaScript library validates IBAN and German bank account
numbers. It can be used as an enhancement of IBAN validators like [IBANTools](https://simplify.github.io/ibantools/).

If you need German bank data in your project e.g. to auto-fill forms when a
user enters an IBAN, take a look the side project  [BankData-Germany](https://baumerdev.github.io/bankdata-germany/).

> _Version 1.2301.* includes the data from 2023-03-06 until 2023-06-04 and from 2023-06-05 until 2023-09-03 and validation will be performed according to the data that is valid at your system time (data will change at 2023-06-05 midnight CET)._

* [Installation](#installation)
* [Usage](#usage)
* [Data Source](#data-source)
* [Package Version](#package-version)

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
code), a BBAN or an IBAN. You can optionally restrict IBAN validation
to only allow German IBAN.

```javascript
import { isValidAccountNumberBLZ, isValidBBAN } from "ibantools-germany"

isValidAccountNumberBLZ("9290701", "10220500"); // true

isValidBBAN("102205000009290701"); // true
isValidBBAN("20041010050500013M02606"); // false (valid but not a German BBAN)

isValidIBAN("DE23102205000009290701"); // true
isValidIBAN("FR1420041010050500013M02606"); // true
isValidIBAN("FR1420041010050500013M02606", false); // false (only allow German IBAN)
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

## Package Version

The version numbers are based on [Semantic Versioning](https://semver.org/)
with modifications.

> 1.2205.3

The first number representes the Major version. If this number increases there
are updates that may not be backward compatible and you have to adjust your
code. That means the above version string is from major version **1**.

The first two digits of the second number stand for the year of the included
data and check digit methods. The third and fourth digit increase when there
are either minor version changes that are backward compatible or when new data
is included. That means the above version string is from year 20**22** and
has had a few minor updates, perhaps data updates for spring and summer.

The last number is for patches and bug fixes.

Since the data may change up to four times a year you should use a suitable
version string in your package.json. Since there will be only breaking changes
when the first number changes, you should be good with e.g. `"1.x"`
