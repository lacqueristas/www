module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "babel",
    "immutable",
    "import",
    "react",
    "jsx-a11y",
    "flowtype",
    "promise"
  ],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off", // We have babel
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-callback-in-promise": "error",
    "promise/avoid-new": "error",
    "promise/prefer-await-to-then": "off", // Not convinced of await/async
    "promise/prefer-await-to-callbacks": "off", // Not convinced of await/async
    "accessor-pairs": "error",
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "arrow-body-style": "off", // Weird style
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "babel/new-cap": "error",
    "babel/no-invalid-this": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "callback-return": "error",
    "camelcase": "warn",
    "capitalized-comments": "error",
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "componentDidMount",
          "componentDidUpdate",
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUnmount",
          "componentWillUpdate",
          "render",
          "shouldComponentUpdate"
        ]
      }
    ],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "complexity": "error",
    "computed-property-spacing": "error",
    "consistent-return": "error",
    "consistent-this": "error",
    "constructor-super": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "flowtype/boolean-style": "error",
    "flowtype/define-flow-type": "error",
    "flowtype/delimiter-dangle": ["error", "only-multiline"],
    "flowtype/generic-spacing": "error",
    "flowtype/no-dupe-keys": "error",
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-weak-types": "off", // Not very useful
    "flowtype/object-type-delimiter": "error",
    "flowtype/require-parameter-type": "error",
    "flowtype/require-return-type": "error",
    "flowtype/require-variable-type": "off", // Super annoying
    "flowtype/semi": "off", // Super annoying
    "flowtype/sort-keys": "off", // Causes more work than anything else
    "flowtype/space-after-type-colon": "error",
    "flowtype/space-before-generic-bracket": "error",
    "flowtype/space-before-type-colon": "error",
    "flowtype/type-id-match": "error",
    "flowtype/union-intersection-spacing": "error",
    "flowtype/use-flow-type": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": ["error", "expression", {allowArrowFunctions: true}],
    "generator-star-spacing": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "error",
    "id-match": "error",
    "immutable/no-let": "error",
    "immutable/no-mutation": "warn",
    "immutable/no-this": "off", // Doesn't work with react
    "import/default": "error",
    "import/export": "error",
    "import/extensions": "error",
    "import/first": "error",
    "import/max-dependencies": "warn",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "off", // This rule doesn't understand my style
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-namespace": "off", // Doesn't work with star imports?
    "import/no-nodejs-modules": "off", // Only for frontend
    "import/no-restricted-paths": "off", // Isn't quite helpful
    "import/no-unassigned-import": "error",
    "import/no-unresolved": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/order": "error",
    "import/prefer-default-export": "error",
    "import/unambiguous": "error",
    "indent": ["error", 2, {"SwitchCase": 1}],
    "init-declarations": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/href-no-hash": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/img-has-alt": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/label-has-for": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-onchange": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/onclick-has-focus": "error",
    "jsx-a11y/onclick-has-role": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "lines-around-directive": "error",
    "max-depth": "error",
    "max-len": "off", // Causes more work than anything else
    "max-lines": "warn",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements-per-line": "error",
    "max-statements": "warn",
    "multiline-ternary": ["error", "never"],
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "error",
    "newline-before-return": "error",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "error",
    "no-class-assign": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": "warn",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off", // This rule doesn't understand my style
    "no-else-return": "error",
    "no-empty-character-class": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-empty": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "warn",
    "no-mixed-operators": "error",
    "no-mixed-requires": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-obj-calls": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "off", // What a stupid rule
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off", // Not sure this is a good rule
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": "error",
    "object-property-newline": "error",
    "object-shorthand": "error",
    "one-var-declaration-per-line": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padded-blocks": ["error", "never"],
    "prefer-arrow-callback": "off", // This really isn't an appropriate rule
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-reflect": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed", {keywords: true}],
    "quotes": "error",
    "radix": "error",
    "react/display-name": "error",
    "react/forbid-component-props": "off", // Not sure this is a good idea
    "react/forbid-elements": "off", // Don't have a use yet
    "react/forbid-foreign-prop-types": "error",
    "react/forbid-prop-types": "warn",
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": "off", // I don't like making busy work for myself
    "react/jsx-first-prop-new-line": "off", // I don't like making busy work for myself
    "react/jsx-handler-names": "error",
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": "error",
    "react/jsx-max-props-per-line": "off", // I don't like making busy work for myself
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off", // What the actual fuck
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "off", // I don't like making busy work for myself
    "react/jsx-space-before-closing": "error",
    "react/jsx-tag-spacing": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off", // I don't like making busy work for myself
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-danger": "error",
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "off", // Gives false positives?
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "warn",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off", // Gives false positives?
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": ["warn", {ignorePureComponents: true}],
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "error",
    "react/require-optimization": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "off", // I don't like making busy work for myself
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/wrap-multilines": "off", // I don't like making busy work for myself
    "require-await": "error",
    "require-jsdoc": "off", // What is this even?
    "require-yield": "error",
    "rest-spread-spacing": "error",
    "semi-spacing": "error",
    "semi": ["error", "never"],
    "sort-imports": "off", // I don't like making busy work for myself
    "sort-keys": "off", // I don't like making busy work for myself
    "sort-vars": "off", // I don't like making busy work for myself
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "strict": ["error", "never"],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": "error"
  },
  settings: {
    "import/core-modules": [
      "@lacqueristas/colors",
      "@lacqueristas/decorators",
      "@lacqueristas/elements",
      "@lacqueristas/pages",
      "@lacqueristas/queries",
      "@lacqueristas/reactions",
      "@lacqueristas/resources",
      "@lacqueristas/route",
      "@lacqueristas/signals",
      "@lacqueristas/styles",
      "@lacqueristas/ui"
    ]
  }
}
