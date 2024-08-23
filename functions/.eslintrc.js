// .eslintrc.js
export default {
  "env": {
      "node": true,
      "es6": true,
      "browser": true
  },
  "extends": [
      "eslint:recommended", // Use the recommended ESLint rules
      "google" // Use Google JavaScript style guide
  ],
  "rules": {
      "no-undef": "off", // Customization based on your preference
      "no-console": "off",
      "no-restricted-globals": ["error", "name", "length"],
      "prefer-arrow-callback": "error",
      "quotes": [
          "error",
          "double", 
          { "allowTemplateLiterals": true } // Allow template literals
      ]
  },
  "parserOptions": {
      "ecmaVersion": 2020
  },
  "overrides": [
      {
          "files": ["**/*.spec.*"],
          "env": { mocha: true }, // Mocha environment for test files
          "rules": {}
      }
  ],
  "globals": {
      "module": "readonly", // Define Node.js globals as readonly
      "require": "readonly",
      "exports": "readonly"
  }
};

