module.exports = {
  "rules": {
    // ES6
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, {"before": true, "after": true}],
    "constructor-super": 2,
    "generator-star-spacing": [2, {"before": false, "after": true}],
    "no-class-assign": 2,
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-reflect": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "modules/no-define": 2,
    "modules/no-cjs": 2,
    "modules/no-exports-typo": 2,
    "modules/no-mix-default-named": 0
  },
  "env": {
    "es6": true
  },
  "plugins": [
    "modules"
  ]
};
