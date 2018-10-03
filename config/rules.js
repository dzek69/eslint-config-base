/* eslint-disable max-lines, no-magic-numbers */

"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

module.exports = {
    rules: {
        // Possible errors
        "for-direction": ERROR,
        "getter-return": [ERROR, { allowImplicit: true }],
        "no-async-promise-executor": ERROR,
        "no-await-in-loop": OFF,
        "no-compare-neg-zero": ERROR,
        "no-cond-assign": [ERROR, "except-parens"],
        // should allow logging while disallowing debug stuff:
        "no-console": [ERROR, { allow: ["error", "info", "warn"] }],
        "no-constant-condition": [ERROR, { checkLoops: true }],
        "no-control-regex": OFF,
        "no-debugger": ERROR,
        "no-dupe-args": ERROR,
        "no-dupe-keys": ERROR,
        "no-duplicate-case": ERROR,
        "no-empty": [WARN, { allowEmptyCatch: true }],
        "no-empty-character-class": ERROR,
        "no-ex-assign": ERROR,
        "no-extra-boolean-cast": ERROR,
        "no-extra-parens": OFF,
        "no-extra-semi": ERROR,
        "no-func-assign": ERROR,
        "no-inner-declarations": [ERROR, "both"],
        "no-invalid-regexp": [ERROR, { allowConstructorFlags: [] }],
        "no-irregular-whitespace": [ERROR, {
            skipStrings: true,
            skipComments: false,
            skipRegExps: true,
            skipTemplates: true,
        }],
        "no-misleading-character-class": ERROR,
        "no-obj-calls": ERROR,
        "no-prototype-builtins": OFF,
        "no-regex-spaces": ERROR,
        "no-sparse-arrays": WARN,
        "no-template-curly-in-string": WARN,
        "no-unexpected-multiline": WARN,
        "no-unreachable": ERROR,
        "no-unsafe-finally": ERROR,
        "no-unsafe-negation": ERROR,
        "require-atomic-updates": ERROR,
        "use-isnan": ERROR,
        "valid-jsdoc": [ERROR, { // it doesn't require jsdoc, but if present it should be valid
            prefer: {
                return: "returns",
                arg: "param",
                argument: "param",
            },
            preferType: {
                array: "Array",
                Boolean: "boolean",
                Function: "function",
                Number: "number",
                object: "Object",
                String: "string",
            },
            requireReturn: false,
            requireReturnType: true,
            // matchDescription: undefined,
            requireParamDescription: false,
            requireReturnDescription: false,
            requireParamType: true,
        }],
        "valid-typeof": [ERROR, { requireStringLiterals: true }],

        // Best practices
        "accessor-pairs": OFF,
        "array-callback-return": [ERROR, { allowImplicit: true }],
        "block-scoped-var": OFF,
        "class-methods-use-this": OFF,
        "complexity": OFF,
        "consistent-return": OFF,
        "curly": [ERROR, "all"],
        "default-case": OFF,
        "dot-location": [ERROR, "property"],
        "dot-notation": [ERROR, { allowKeywords: true, allowPattern: undefined }],
        "eqeqeq": [ERROR, "always", { null: "ignore" }],
        "guard-for-in": WARN,
        "max-classes-per-file": OFF,
        "no-alert": OFF,
        "no-caller": ERROR,
        "no-case-declarations": OFF,
        "no-div-regex": OFF,
        "no-else-return": [ERROR, { allowElseIf: false }],
        "no-empty-function": [ERROR, { allow: [] }],
        "no-empty-pattern": ERROR,
        "no-eq-null": OFF, // eqeqeq takes care of that anyway
        "no-eval": [ERROR, { allowIndirect: false }],
        "no-extend-native": [ERROR, { exceptions: [] }],
        "no-extra-bind": ERROR,
        "no-extra-label": ERROR,
        "no-fallthrough": WARN,
        "no-floating-decimal": ERROR,
        "no-global-assign": [ERROR, { exceptions: [] }],
        "no-implicit-coercion": [ERROR, { boolean: true, string: true, number: true, allow: [] }],
        "no-implicit-globals": ERROR,
        "no-implied-eval": ERROR,
        "no-invalid-this": ERROR,
        "no-iterator": ERROR,
        "no-labels": OFF,
        "no-lone-blocks": OFF,
        "no-loop-func": ERROR,
        "no-magic-numbers": [ERROR, {
            ignore: [0, 1],
            ignoreArrayIndexes: true,
            detectObjects: false,
        }],
        "no-multi-spaces": [ERROR, {
            ignoreEOLComments: false,
            exceptions: {
                Property: true,
            },
        }],
        "no-multi-str": WARN,
        "no-new": ERROR,
        "no-new-func": ERROR,
        "no-new-wrappers": ERROR,
        "no-octal": ERROR,
        "no-octal-escape": ERROR,
        "no-param-reassign": [ERROR, { props: true, ignorePropertyModificationsFor: [] }],
        "no-proto": ERROR,
        "no-redeclare": [ERROR, { builtinGlobals: true }],
        "no-restricted-properties": OFF,
        "no-return-assign": [ERROR, "except-parens"],
        "no-return-await": ERROR,
        "no-script-url": OFF,
        "no-self-assign": [ERROR, { props: true }],
        "no-self-compare": ERROR,
        "no-sequences": WARN,
        "no-throw-literal": ERROR,
        "no-unmodified-loop-condition": ERROR,
        "no-unused-expressions": [ERROR, {
            allowShortCircuit: true,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],
        "no-unused-labels": ERROR, // @TODO put on a list to disable in tests
        "no-useless-call": OFF,
        "no-useless-concat": ERROR,
        "no-useless-escape": ERROR,
        "no-useless-return": ERROR,
        "no-void": ERROR,
        "no-warning-comments": [ERROR, {
            terms: ["FIXME", "@fixme"],
            location: "anywhere",
        }],
        "no-with": ERROR,
        "prefer-promise-reject-errors": [ERROR, { allowEmptyReject: false }],
        "radix": [ERROR, "always"],
        "require-await": WARN,
        "require-unicode-regexp": OFF, // @TODO enable someday, when IE will be destroyed
        // ^ transpiling unicode regexpes has too many traps to be worth to relying on this

        "vars-on-top": ERROR,
        "wrap-iife": [ERROR, "inside", {
            functionPrototypeMethods: true,
        }],
        "yoda": [ERROR, "never"],

        // Strict mode
        "strict": [ERROR, "safe"],

        // Variables
        "init-declarations": [ERROR, "never", { ignoreForLoopInit: true }],
        "no-delete-var": ERROR,
        "no-label-var": ERROR,
        "no-restricted-globals": OFF, // @TODO we can use this to prevent fdescribe or stuff, verify
        "no-shadow": [ERROR, {
            builtinGlobals: true,
            hoist: "all",
        }],
        "no-shadow-restricted-names": ERROR,
        "no-undef": [ERROR, { typeof: false }],
        "no-undef-init": OFF, // init-declarations should take care of this anyway
        "no-undefined": OFF, // no-redeclare will guard for shadowing, ES5 disallows to overwrite global
        "no-unused-vars": [ERROR, {
            vars: "all",
            varsIgnorePattern: undefined,
            args: "none",
            argsIgnorePattern: undefined,
            caughtErrors: "all", // can omit `(error)` instead
            caughtErrorsIgnorePattern: undefined,
            ignoreRestSiblings: true,
        }],
        "no-use-before-define": [WARN, {
            functions: true,
            classes: true,
            variables: true,
        }],

        // CommonJS / Node
        "callback-return": [ERROR, ["callback", "cb", "done", "next"]],
        "global-require": WARN,
        "handle-callback-err": [ERROR, "^(.*(e|E)rr|e$)"],
        "no-buffer-constructor": ERROR,
        "no-mixed-requires": [ERROR, {
            grouping: true,
            allowCall: false,
        }],
        "no-new-require": ERROR,
        "no-path-concat": ERROR,
        "no-process-env": OFF, // needed for dead code removing when bundling
        "no-process-exit": WARN,
        "no-restricted-modules": OFF,
        "no-sync": WARN,

        // Stylistic
        "array-bracket-newline": [ERROR, "consistent"],
        "array-bracket-spacing": [ERROR, "never"],
        "array-element-newline": OFF,
        "block-spacing": [ERROR, "always"],
        "brace-style": [ERROR, "stroustrup", { allowSingleLine: true }],
        "camelcase": [ERROR, {
            properties: "always",
            ignoreDestructuring: false,
        }],
        "capitalized-comments": OFF,
        "comma-dangle": [ERROR, {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
        }],
        "comma-spacing": [ERROR, {
            before: false,
            after: true,
        }],
        "comma-style": [ERROR, "last"],
        "computed-property-spacing": [ERROR, "never"],
        "consistent-this": OFF,
        "eol-last": [ERROR, "always"],
        "func-call-spacing": [ERROR, "never"],
        "func-name-matching": OFF,
        "func-names": [ERROR, "as-needed"],
        "func-style": [ERROR, "expression"],
        "function-paren-newline": OFF, // Can't be linted like I'd want
        "id-blacklist": OFF,
        "id-length": OFF,
        "id-match": OFF,
        "implicit-arrow-linebreak": [ERROR, "beside"],
        "indent": [ERROR, 4, {
            SwitchCase: 1,
        }],
        "jsx-quotes": [ERROR, "prefer-double"],
        "key-spacing": [ERROR, {
            beforeColon: false,
            afterColon: true,
            mode: "strict",
            align: undefined,
        }],
        "keyword-spacing": [ERROR, {
            before: true,
            after: true,
        }],
        "line-comment-position": OFF,
        "linebreak-style": [ERROR, "unix"],
        "lines-around-comment": OFF, // @TODO verify one day if can be enabled
        // @TODO: verify single line for defining non-function properties with esnext
        "lines-between-class-members": [ERROR, "always", { exceptAfterSingleLine: false }],
        "max-depth": [ERROR, {
            max: 5,
        }],
        "max-len": [ERROR, {
            code: 120,
            tabWidth: 4,
            comments: 120,
            ignorePattern: undefined,
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: true,
        }],
        "max-lines": [ERROR, {
            max: 200,
            skipBlankLines: true,
            skipComments: true,
        }],
        "max-lines-per-function": [ERROR, {
            max: 50,
            skipBlankLines: true, // these on 03.10.2018 are documented wrong @TODO suggest a fix
            skipComments: true,
            IIFEs: false,
        }],
        "max-nested-callbacks": OFF, // max-depth will handle this
        "max-params": OFF,
        "max-statements": [ERROR, {
            max: 15,
            // ignoreTopLevelFunctions: false,
        }],
        "max-statements-per-line": [ERROR, {
            max: 2,
        }],
        "multiline-comment-style": OFF,
        "multiline-ternary": [ERROR, "always-multiline"],
        "new-cap": [WARN, {
            newIsCap: true,
            capIsNew: true,
            // newIsCapExceptions: undefined,
            // newIsCapExceptionPattern: undefined,
            // capIsNewExceptions: undefined,
            // capIsNewExceptionPattern: undefined,
            properties: true,
        }],
        "new-parens": ERROR,
        "newline-per-chained-call": OFF,
        "no-array-constructor": ERROR,
        "no-bitwise": OFF,
        "no-continue": OFF,
        "no-inline-comments": OFF,
        "no-lonely-if": OFF,
        "no-mixed-operators": ERROR, // no options here, defaults should always be sane
        "no-mixed-spaces-and-tabs": OFF, // no-tabs will handle this
        "no-multi-assign": OFF,
        "no-multiple-empty-lines": [ERROR, { max: 1, maxBOF: 0, maxEOF: 1 }],
        "no-negated-condition": OFF,
        "no-nested-ternary": OFF,
        "no-new-object": ERROR,
        "no-plusplus": OFF,
        "no-restricted-syntax": OFF,
        "no-tabs": ERROR, // @TODO suggest a fix in documentation to present tab as `\t`
        "no-ternary": OFF,
        "no-trailing-spaces": [ERROR, {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        "no-underscore-dangle": OFF,
        "no-unneeded-ternary": [ERROR, { defaultAssignment: true }],
        "no-whitespace-before-property": ERROR,
        "nonblock-statement-body-position": OFF, // curly will handle this
        "object-curly-newline": [ERROR, {
            multiline: true,
            consistent: true,
        }],
        "object-curly-spacing": [ERROR, "always"],
        "object-property-newline": [ERROR, { allowAllPropertiesOnSameLine: true }],
        "one-var": [ERROR, {
            var: "consecutive",
            let: "consecutive",
            const: "never",
        }],
        "one-var-declaration-per-line": OFF,
        "operator-assignment": OFF,
        "operator-linebreak": [ERROR, "before"],
        "padded-blocks": [ERROR, "never"],
        "padding-line-between-statements": OFF, // @TODO would be nice to have this configured
        "prefer-object-spread": ERROR,
        "quote-props": [ERROR, "consistent-as-needed", {
            keywords: false,
        }],
        "quotes": [ERROR, "double", {
            avoidEscape: false,
            allowTemplateLiterals: true,
        }],
        "require-jsdoc": OFF, // not required, but must be valid, because of valid-jsdoc
        "semi": [ERROR, "always", {
            omitLastInOneLineBlock: false,
        }],
        "semi-spacing": [ERROR, {
            before: false,
            after: true,
        }],
        "semi-style": [ERROR, "last"],
        "sort-keys": OFF, // @TODO contrubute to docs and write about performance of varying keys order
        "sort-vars": OFF,
        "space-before-blocks": [ERROR, "always"],
        "space-before-function-paren": [ERROR, {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
        }],
        "space-in-parens": [ERROR, "never"],
        "space-infix-ops": [ERROR, {
            int32Hint: false,
        }],
        "space-unary-ops": [ERROR, {
            words: true,
            nonwords: false,
        }],
        "spaced-comment": [ERROR, "always", {
            // exceptions: [],
            // markers: [],
        }],
        "switch-colon-spacing": [ERROR, {
            before: false,
            after: true,
        }],
        "template-tag-spacing": [ERROR, "never"],
        "unicode-bom": [ERROR, "never"],
        "wrap-regex": OFF,

        // ES 6

        "arrow-body-style": OFF,
        "arrow-parens": OFF,
        "arrow-spacing": [ERROR, {
            before: true,
            after: true,
        }],
        "constructor-super": ERROR,
        "generator-star-spacing": [ERROR, {
            before: true,
            after: false,
        }],
        "no-class-assign": ERROR,
        "no-confusing-arrow": [ERROR, {
            allowParens: true,
        }],
        "no-const-assign": ERROR,
        "no-dupe-class-members": ERROR,
        "no-duplicate-imports": [ERROR, {
            includeExports: true,
        }],
        "no-new-symbol": ERROR,
        "no-restricted-imports": OFF,
        "no-this-before-super": ERROR,
        "no-useless-computed-key": ERROR,
        "no-useless-constructor": ERROR,
        "no-useless-rename": ERROR,
        "no-var": ERROR,
        "object-shorthand": [ERROR, "consistent-as-needed"],
        "prefer-arrow-callback": OFF,
        "prefer-const": [ERROR, {
            destructuring: "any",
            ignoreReadBeforeAssign: true,
        }],
        "prefer-destructuring": OFF,
        "prefer-numeric-literals": ERROR,
        "prefer-rest-params": ERROR,
        "prefer-spread": ERROR,
        "prefer-template": OFF,
        "require-yield": WARN,
        "rest-spread-spacing": [ERROR, "never"],
        "sort-imports": OFF,
        "symbol-description": WARN,
        "template-curly-spacing": [ERROR, "never"],
        "yield-star-spacing": [ERROR, {
            before: true,
            after: false,
        }],
    },
};
