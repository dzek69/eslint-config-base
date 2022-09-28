# eslint-config-base

These are my preferred code style linting rules. You'll probably hate them.

## Idea behind these

No tricks, no magic, no useless code, no complicated code. Very opinionated about all these spaces, quotes, parentheses.
A bit of sanity applied, but not too much.

## ES-which?

Rules are prepared for ES6+ code. Parser is set to `ecmaVersion` 9. Some rules may require ES6+ code so you'd better
update your transpiler.

## Installation

```
npm i eslint @dzek69/eslint-config-base --save-dev
```

Put `.eslintrc.json` in your root directory and fill it with:
```json
{
  "extends": [
    "@dzek69/eslint-config-base"
  ]
}
```

Make sure to set your other config, like `env`, see [eslint config guide](https://eslint.org/docs/user-guide/configuring).

Then to lint `src` and `test` directories with subdirectories run:
```
npx eslint src/**/*.js src/*.js test/**/*.js test/*.js
```

## Test files issues

Some of these rules may be annoying in tests files (like max lines number limit or not allowing global `describe` or
other test runner methods).
Use overrides in your config:
```json
{
  "overrides": [
    {
      "files": ["test/*.js", "test/**/*.js"],
      "env": {
        "mocha": true
      },
      "rules": {
        "max-lines": "off"
      }
    }
  ]
}
```

See [eslint config guide](https://eslint.org/docs/user-guide/configuring) for more details about `env` options.

## Full config example

This is full config that I am using in one of my projects, feel free to take inspiration:

```json
{
  "extends": [
    "@dzek69/eslint-config-base"
  ],
  "env": {
    "node": true
  },
  "overrides": [
    {
      "files": ["src/*.spec.js", "src/**/*.spec.js"],
      "env": {
        "mocha": true
      },
      "rules": {
        "global-require": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-statements": "off",
        "no-magic-numbers": "off"
      }
    }
  ]
}
```

## Suggested CLI config

Add:
- `--no-error-on-unmatched-pattern` - to prevent errors while you start working on your lib and not all patterns matches
yet

## License

MIT
