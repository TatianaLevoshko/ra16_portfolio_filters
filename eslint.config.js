// eslint.config.js
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: {
        version: "detect",
        runtime: "automatic"
      }
    },
    rules: {
      // Не требуем React в скоупе для JSX
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // Отключаем prop‑types
      "react/prop-types": "off",
      // Игнорируем неиспользуемую переменную React
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^React$",
          argsIgnorePattern: "^_"
        }
      ]
    }
  }
];
