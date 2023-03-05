// eslint-disable-next-line import/no-commonjs
module.exports = {
    env: {
        es6: true,
        jest: true,
    },
    extends: [
        "@react-native-community",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:promise/recommended",
        "plugin:security/recommended",
        "plugin:import/errors",
        "plugin:jest/recommended",
        "plugin:react-redux/recommended",
    ],
    plugins: [
        "prettier",
        "json",
        "no-loops",
        "promise",
        "security",
        "no-secrets",
        "filenames",
        "jest",
        "@revved/immutable",
        "react-redux",
        "react-hooks",
    ],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: "module",
    },
    rules: {
        "no-shadow": ["error"],
        curly: ["error", "multi-line"],
        "no-use-before-define": ["error", { functions: false }],
        "no-unused-vars": ["error", { args: "after-used" }],
        "no-loops/no-loops": "error",
        camelcase: ["error", { properties: "never" }],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: "*", next: "export" },
        ],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-max-depth": ["error", { max: 4 }],
        "no-nested-ternary": "error",
        "promise/always-return": "error",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/catch-or-return": "error",
        "promise/no-nesting": "error",
        "promise/no-promise-in-callback": "error",
        "promise/no-callback-in-promise": "error",
        "promise/avoid-new": "error",
        "promise/no-new-statics": "error",
        "promise/no-return-in-finally": "error",
        "promise/valid-params": "error",
        "no-secrets/no-secrets": "error",
        "filenames/match-regex": ["error", "^[a-zA-Z1-9-.]+$"],
        "filenames/match-exported": [
            "error",
            [null, "snake", "kebab", "camel", "pascal"],
            "\\.test$",
        ],
        "filenames/no-index": "off",
        "import/no-commonjs": "error",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "parent", "sibling", "index"],
                pathGroups: [
                    {
                        pattern: "~**/**",
                        group: "parent",
                        position: "before",
                    },
                ],
                alphabetize: { order: "asc", caseInsensitive: true },
                "newlines-between": "always",
            },
        ],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off", // To make it easier using modules like module-alias
        "module-resolver/use-alias": "error",
        "no-param-reassign": ["error", { props: false }],
        "security/detect-object-injection": "off",
        "class-methods-use-this": "off",
        "react-native/no-color-literals": "error",
        "@revved/immutable/no-let": "error",
        "@revved/immutable/no-this": "error",
        "@revved/immutable/no-mutation": [
            "error",
            {
                exceptions: [
                    {
                        object: "module",
                        property: "exports",
                    },
                    {
                        property: "propTypes",
                    },
                ],
            },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "security/detect-non-literal-fs-filename": "off",
        "react/display-name": "off",
        "react-redux/useSelector-prefer-selectors": "off",
        "max-lines": ["error", { max: 300 }],
        "no-restricted-imports": [
            "error",
            { paths: ["lodash"], patterns: ["lodash/*"] },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            "babel-module": {},
        },
        // TODO: remove once this issue is addressed https://github.com/facebook/react-native/issues/28549
        "import/ignore": [
            "node_modules/react-native/index\\.js$",
            "react-native",
        ],
    },
};
