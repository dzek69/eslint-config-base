All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
(nothing yet)

## [2.1.1] - 2022-06-29
### Changed
- `spaced-comment` rule to accept `///` (useful for TS and more) and force space before closing block comment `*/`

## [2.1.0] - 2021-08-18
### Added
- `no-unsafe-optional-chaining` rule
### Changed
- `no-implicit-coercion` explicitly set default config value
- `no-sequences` are allowed in parentheses
- `no-unused-expressions` now works with JSX
### Dev
- deps upgrade, removed jsdoc

## [2.0.0] - 2020-11-26
### Added
- `reportUnusedDisableDirectives` config option
- `no-dupe-else-if` rule
- `no-import-assign` rule
- `no-loss-of-precision` rule
- `no-promise-executor-return` rule
- `no-setter-return` rule
- `no-unreachable-loop` rule
- `no-useless-backreference` rule
- `default-case-last` rule
- `default-param-last` rule
- `grouped-accessor-pairs` rule
- `no-constructor-return` rule
- `no-nonoctal-decimal-escape` rule
- `prefer-regex-literals` rule
- `prefer-exponentiation-operator` rule (disabled)
- `no-restricted-exports` rule (disabled)
### Changed
- upgraded minimal eslint version
- `no-extra-boolean-cast` tweaks
- `no-unsafe-negation` tweaks
- `use-isnan` tweaks
- `no-implicit-globals` tweaks
- `no-magic-numbers` tweaks
- `no-void` tweaks
- `camelcase` tweaks
- `computed-property-spacing` tweaks
- `no-useless-computed-key` tweaks

## [1.1.0] - 2019-08-30
### Added
- new `function-call-argument-newline` rule, but disabled
### Changed
- upgraded minimal eslint version
### Fixed
- more audit issues with dev dependencies

## [1.0.1] - 2019-07-14 - not released to npm
### Fixed
- security issue with dev dependency by upgrading jsdoc

## [1.0.0] - 2019-07-14
### Added
- `no-useless-catch` rule
- unneeded new rules in disabled state into config file
### Changed
- `eslint` (peer)dependency upgraded into newest version (this is breaking change for some rules)

## [0.0.3] - 2018-12-13
### Changed
- yarn lockfile cleaned up

## [0.0.2] - 2018-12-13
### Changed
- `init-declarations` rule is now disabled

## [0.0.1] - 2018-10-03
### Added
- first version
