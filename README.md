# JetBrains config for ESLint

## Package contains several configs

`jetbrains`: basic rules  
`jetbrains/browser`: browser rules and environment
`jetbrains/bem`: bem-flavored filenames rule
`jetbrains/es6`: es6 rules and environment 
`jetbrains/node`: node rules and environment
`jetbrains/react`: rules for [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) 
`jetbrains/angular`:  rules for [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular) 
`jetbrains/test`: mocha, jasmine, chai, sinon rules and environment 

## Usage example

```json
{
  "parser": "babel-eslint",
  "extends": [
    "jetbrains",
    "jetbrains/browser",
    "jetbrains/bem",
    "jetbrains/es6",
    "jetbrains/node",
    "jetbrains/react",
    "jetbrains/angular",
    "jetbrains/test"
  ],
  "rules": {
    "valid-jsdoc": 0,
    "angular/directive-name": [2, "rg"]
  }
}
```
