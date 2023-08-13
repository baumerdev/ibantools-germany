# Changelog

## 2023-08-11 [v1.2301.5]

* Internally removed TypeScript enums to improve compatibility with Angular ; see [#15](https://github.com/baumerdev/ibantools-germany/issues/15) and [#16](https://github.com/baumerdev/ibantools-germany/pull/16/)

## 2023-08-04 [v1.2301.4]

* Fixed method A4 ; [#14](https://github.com/baumerdev/ibantools-germany/issues/14)

## 2023-07-23 [v1.2301.3]

* Upgraded dependencies, including word-wrap and tough-cookie (CVE-2023-26136)

## 2023-05-23 [v1.2301.2]

* The Bundesbank informed that their data was inaccurate. Changes were made accordingly.

## 2023-05-14 [v1.2301.1]

* Fix valid-from date from 2023-05-06 to 2023-06-05

## 2023-05-13 [v1.2301.0]

* Additionally includes data valid from 2023-06-05, removes data valid before 2023-03-06

## 2023-05-13 [v1.2300.1]

* Upgraded dependencies, including yaml (CVE-2023-2251)

## 2023-02-14 [v1.2300.0]

* Additionally includes data valid from 2023-03-06, removes data valid before 2022-12-05

## 2023-02-14 [v1.2201.2]

* Upgraded dependencies, including http-cache-semantics (CVE-2022-25881) and cacheable-request (GHSA-8x6c-cv3v-vp6g)

## 2023-01-17 [v1.2201.1]

* Fixed failing test for current/next BLZs
* Upgraded dependencies, including (CVE-2022-46175)

## 2022-11-13 [v1.2201.0]

* Additionally includes data valid from 2022-12-05

## 2022-10-31 [v1.2200.6]

* Fixed methods C0 ; [#7](https://github.com/baumerdev/ibantools-germany/pull/7)
* Fixed methods 85 ; [#9](https://github.com/baumerdev/ibantools-germany/pull/9)
* Fixed methods 53 ; [#11](https://github.com/baumerdev/ibantools-germany/pull/11)
* Updated method 61: An inaccurate method definition in the Bundesbank document may have resulted in false negatives in specific cases ; [#13](https://github.com/baumerdev/ibantools-germany/pull/13)

## 2022-10-30 [v1.2200.2]

* Fixed method 84 ; [#3](https://github.com/baumerdev/ibantools-germany/pull/3)
* Fixed method 16 ; [#5](https://github.com/baumerdev/ibantools-germany/pull/5)

## 2022-10-29

* Fixed typo ; [#1](https://github.com/baumerdev/ibantools-germany/pull/1)

## 2022-10-26 [v1.2200.0]

* First release
