# IBANTools-Germany: Validator and Generator for German Bank Accounts

![CI: Lint, test and build](https://github.com/baumerdev/ibantools-germany/workflows/Lint,%20test%20and%20build/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/baumerdev/ibantools-germany/badge.svg?branch=main)](https://coveralls.io/github/baumerdev/ibantools-germany?branch=main)

This TypeScript/JavaScript library validates IBAN and German bank account
numbers. It can be used standalone or as an enhancement of IBAN validators, like
[IBANTools](https://simplify.github.io/ibantools/).

If you need German bank data in your project, e.g., to auto-fill forms when a
user enters an IBAN, take a look at the side project [BankData-Germany](https://baumerdev.github.io/bankdata-germany/).

> _Version 1.2302.* includes data from 2023-06-05 to 2023-09-03, as well as from 2023-09-04 to 2023-12-03. Validation will be based on the data that is valid according to your system time (data changes at midnight CET on 2023-09-04)._

* [Installation](#installation)
* [Usage](#usage)
* [Data Source](#data-source)
* [Package Version](#package-version)

## Installation

### Package Manager

Add it to your project using a package manager like npm or yarn. You should
explicitly install the latest version, as the bank data may change multiple
times a year.

```sh
$ npm install --save ibantools-germany@latest
# or
$ yarn add ibantools-germany@latest
```

### Browser / CDN

If you only want the functions in your browser, you can include the following
pre-built file.

```html
<script src="https://cdn.jsdelivr.net/npm/ibantools-germany/dist/build/browser.js"></script>
```

## Usage

The npm package contains the code for both ESM and CJS. Therefore, in addition
to using `import` as shown in the usage examples below, you can also utilize
`require`.

### Validation

You can validate the bank account number and BLZ (Bankleitzahl = bank sort
code), a BBAN, or an IBAN. Additionally, you have the option to restrict IBAN
validation to only allow German IBANs.

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

When using the pre-built version, the `ibantoolsGermany` object is globally
defined on the `window`, containing the functions.

```javascript
ibantoolsGermany.generateBBAN("9290701", "10220500");
ibantoolsGermany.generateIBAN("9290701", "10220500");
ibantoolsGermany.isValidAccountNumberBLZ("9290701", "10220500");
ibantoolsGermany.isValidBBAN("102205000009290701");
ibantoolsGermany.isValidIBAN("DE23102205000009290701");
```

## Data Source

Unfortunately, there isn't a single algorithm to verify all German bank account
numbers or BBANs, as each bank employs its own method(s) which can change
periodically.To address this,
[Deutsche Bundesbank](https://www.bundesbank.de/en/tasks/payment-systems/services/bank-sort-codes/download-bank-sort-codes-626218)
publishes updated data every quarter.

These updates can encompass both technical changes, such as modifications in
check digit methods, as well as content changes like alterations to BLZ, bank
names, and more. Some updates might not contain any relevant changes for this
library at all.

## Package Version

The version numbers are based on [Semantic Versioning](https://semver.org/)
with some modifications.

> 1.2205.3

The first number represents the Major version. If this number increases, there
may be updates that are not backward compatible, requiring adjustments to your
code. In the above version string, the major version is **1**.

The first two digits of the second number indicate the year of the included data
and check digit methods. The third and fourth digits increase either with minor
version changes that maintain backward compatibility or when new data is
included. In the provided version string, the year is 20**22**, with a few minor
updates, possibly including data updates for spring and summer.

The last number is reserved for patches and bug fixes.

Considering that the data could change up to four times a year, it's advisable
to use an appropriate version string in your package.json. As breaking changes
occur only when the first number changes, specifying something like `"1.x"`
should suffice.
