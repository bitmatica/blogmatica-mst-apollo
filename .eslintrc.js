module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "react/prop-types": "off",
    //----------------------------------------------------------------------
    // React Hooks Rules
    //----------------------------------------------------------------------

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    //----------------------------------------------------------------------
    // Typescript Rules
    //----------------------------------------------------------------------

    // Not sure if this is necessary, but it seems misleading to await
    // something that is not a Promise.
    "@typescript-eslint/await-thenable": "error",

    // This exception allows to write
    // const Box: React.FC = () => (<div>...</div>)
    // instead of
    // const Box: React.FC = (): ReactElement => (<div>...</div>)
    // which is a common case for us.
    // The React.FC type will still cause Typescript to display error if we
    // return something invalid (like a string) from a function component.
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowTypedFunctionExpressions: true,
      },
    ],

    // Open to input on this rule. This seems not overly restrictive while
    // helping people navigate class definitions.
    // This ordering is based on:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md#member-group-types-with-scope-ignoring-accessibility
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "static-field",
          "instance-field",
          "constructor",
          "static-method",
          "instance-method",
        ],
      },
    ],

    // Doubt anyone on our team would do this, but still, don't.
    "@typescript-eslint/no-extraneous-class": "error",

    // Use for-of for arrays.
    "@typescript-eslint/no-for-in-array": "error",

    // The meaning of the following methods is more obvious and clear than
    // the way we did things before.
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",

    // Javascript sorts values _alphabetically_? WTF? How did I not know that?
    "@typescript-eslint/require-array-sort-compare": "error",

    // Don't add numbers and strings please.
    "@typescript-eslint/restrict-plus-operands": "error",

    quotes: ["error", "double", { avoidEscape: true }],
    indent: ["error", 2],
    "comma-dangle": ["error", "always-multiline"],
    "jsx-quotes": ["error", "prefer-double"],
  },

  overrides: [
    {
      files: ["*.test.{js,jsx,ts,tsx}"],
      env: {
        jest: true,
      },
      rules: {
        // Function expressions are really common in test cases and
        // their return type is void -- not worth specifying every time.
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    }, {
      files: [ "src/models/*.ts" ],
      rules: {
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
      }
    }
  ],
};
