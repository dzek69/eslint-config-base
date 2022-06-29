/* eslint-disable max-lines, no-magic-numbers */

"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

const possibleErrors = {
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
    "no-dupe-else-if": ERROR,
    "no-dupe-keys": ERROR,
    "no-duplicate-case": ERROR,
    "no-empty": [WARN, { allowEmptyCatch: true }],
    "no-empty-character-class": ERROR,
    "no-ex-assign": ERROR,
    "no-extra-boolean-cast": [ERROR, { enforceForLogicalOperands: true }],
    "no-extra-parens": OFF,
    "no-extra-semi": ERROR,
    "no-func-assign": ERROR,
    "no-inner-declarations": [ERROR, "both"],
    "no-import-assign": ERROR,
    "no-invalid-regexp": [ERROR, { allowConstructorFlags: [] }],
    "no-irregular-whitespace": [ERROR, {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
    }],
    "no-loss-of-precision": ERROR,
    "no-misleading-character-class": ERROR,
    "no-obj-calls": ERROR,
    "no-promise-executor-return": ERROR,
    "no-prototype-builtins": OFF,
    "no-regex-spaces": ERROR,
    "no-setter-return": ERROR,
    "no-sparse-arrays": WARN,
    "no-template-curly-in-string": WARN,
    "no-unexpected-multiline": WARN,
    "no-unreachable": ERROR,
    "no-unreachable-loop": ERROR,
    "no-unsafe-finally": ERROR,
    "no-unsafe-negation": [ERROR, { enforceForOrderingRelations: true }],
    "no-unsafe-optional-chaining": [ERROR, { disallowArithmeticOperators: true }],
    "no-useless-backreference": WARN,
    "require-atomic-updates": ERROR,
    "use-isnan": [ERROR, {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
    }],
    "valid-jsdoc": [ERROR, { // it doesn't require jsdoc, but if present it should be valid
        // @TODO deprecated and replaceable with https://www.npmjs.com/package/eslint-plugin-jsdoc ?
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
};

const bestPractices = {
    "accessor-pairs": OFF,
    "array-callback-return": [ERROR, { allowImplicit: true }],
    "block-scoped-var": OFF,
    "class-methods-use-this": OFF,
    "complexity": OFF,
    "consistent-return": OFF,
    "curly": [ERROR, "all"],
    "default-case": OFF,
    "default-case-last": ERROR,
    "default-param-last": ERROR,
    "dot-location": [ERROR, "property"],
    "dot-notation": [ERROR, { allowKeywords: true, allowPattern: undefined }],
    "eqeqeq": [ERROR, "always", { null: "ignore" }],
    "grouped-accessor-pairs": [ERROR, "getBeforeSet"],
    "guard-for-in": WARN,
    "max-classes-per-file": OFF,
    "no-alert": OFF,
    "no-caller": ERROR,
    "no-case-declarations": OFF,
    "no-constructor-return": WARN,
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
    "no-implicit-coercion": [
        // @TODO should disallowTemplateShorthand be true? one of ts rules asks for template strings instead of adding
        // things
        ERROR, { boolean: true, string: true, number: true, disallowTemplateShorthand: false, allow: [] },
    ],
    "no-implicit-globals": [ERROR, { lexicalBindings: false }], // @TODO something about making it true in README?
    "no-implied-eval": ERROR,
    "no-invalid-this": ERROR,
    "no-iterator": ERROR,
    "no-labels": OFF,
    "no-lone-blocks": OFF,
    "no-loop-func": ERROR,
    "no-magic-numbers": [ERROR, {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: false,
        enforceConst: false,
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
    "no-nonoctal-decimal-escape": ERROR,
    "no-octal": ERROR,
    "no-octal-escape": ERROR,
    "no-param-reassign": [ERROR, {
        props: true,
        ignorePropertyModificationsFor: [],
        // ignorePropertyModificationsForRegex: //,
    }],
    "no-proto": ERROR,
    "no-redeclare": [ERROR, { builtinGlobals: true }],
    "no-restricted-properties": OFF,
    "no-return-assign": [ERROR, "except-parens"],
    "no-return-await": ERROR,
    "no-script-url": OFF,
    "no-self-assign": [ERROR, { props: true }],
    "no-self-compare": ERROR,
    "no-sequences": [WARN, { allowInParentheses: true }],
    "no-throw-literal": ERROR,
    "no-unmodified-loop-condition": ERROR,
    "no-unused-expressions": [ERROR, {
        allowShortCircuit: true,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
    }],
    "no-unused-labels": ERROR, // @TODO put on a list to disable in tests
    "no-useless-call": OFF,
    "no-useless-catch": ERROR,
    "no-useless-concat": ERROR,
    "no-useless-escape": ERROR,
    "no-useless-return": ERROR,
    "no-void": [ERROR, { allowAsStatement: false }],
    "no-warning-comments": [ERROR, {
        terms: ["FIXME", "@fixme"],
        location: "anywhere",
    }],
    "no-with": ERROR,
    "prefer-named-capture-group": OFF,
    "prefer-promise-reject-errors": [ERROR, { allowEmptyReject: false }],
    "prefer-regex-literals": [ERROR, { disallowRedundantWrapping: true }],
    "radix": [ERROR, "always"],
    "require-await": WARN,
    "require-unicode-regexp": OFF, // @TODO enable someday, when IE will be destroyed
    // ^ transpiling unicode regexpes has too many traps to be worth to relying on this
    "vars-on-top": ERROR,
    "wrap-iife": [ERROR, "inside", {
        functionPrototypeMethods: true,
    }],
    "yoda": [ERROR, "never"],
};

const strictMode = {
    strict: [ERROR, "safe"],
};

const variables = {
    "init-declarations": OFF,
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
};

const commonJS = {
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
};

const stylistic = {
    "array-bracket-newline": [ERROR, "consistent"],
    "array-bracket-spacing": [ERROR, "never"],
    "array-element-newline": OFF,
    "block-spacing": [ERROR, "always"],
    "brace-style": [ERROR, "stroustrup", { allowSingleLine: true }],
    "camelcase": [ERROR, {
        properties: "always",
        ignoreDestructuring: false,
        ignoreImports: true,
        ignoreGlobals: false,
        // allow: ["^UNSAFE_"], @TODO say something about it in react package
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
    "computed-property-spacing": [ERROR, "never", {
        enforceForClassMembers: true,
    }],
    "consistent-this": OFF,
    "eol-last": [ERROR, "always"],
    "func-call-spacing": [ERROR, "never"],
    "func-name-matching": OFF,
    "func-names": [ERROR, "as-needed"],
    "func-style": [ERROR, "expression"],
    "function-call-argument-newline": OFF, // Maybe enable later?
    "function-paren-newline": OFF, // Can't be linted like I'd want
    "id-denylist": OFF,
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
    "new-parens": [ERROR, "always"],
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
    "prefer-exponentiation-operator": OFF,
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
        block: {
            balanced: true,
        },
        markers: ["/"],
    }],
    "switch-colon-spacing": [ERROR, {
        before: false,
        after: true,
    }],
    "template-tag-spacing": [ERROR, "never"],
    "unicode-bom": [ERROR, "never"],
    "wrap-regex": OFF,

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
    "no-restricted-exports": OFF,
    "no-this-before-super": ERROR,
    "no-useless-computed-key": [ERROR, { enforceForClassMembers: true }],
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
};

module.exports = {
    rules: {
        ...possibleErrors,
        ...bestPractices,
        ...strictMode,
        ...variables,
        ...commonJS,
        ...stylistic,
    },
};
