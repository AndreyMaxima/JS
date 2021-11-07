const package = {
  "name": "1.eject-react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@babel/core": "7.12.3", // Полифил Babel (выполняет приобразование нового синтаксиса в старый для поддержки старых браузеров)
    "@pmmmwh/react-refresh-webpack-plugin": "0.4.3", // Плагин для дев-сервера для перезагрузки при изменениях
    "@svgr/webpack": "5.5.0", // Для работы с SVG как с React-омпонентом
    "@testing-library/jest-dom": "^5.15.0", // Расширение возможностей Jest
    "@testing-library/react": "^11.2.7", // Расширение возможностей Jest
    "@testing-library/user-event": "^12.8.3", // Расширение возможностей Jest
    "@types/jest": "^26.0.24", // Типы для библиотеки тестирования Jest
    "@types/node": "^12.20.36", // Типы для node
    "@types/react": "^17.0.34", // Типы для react
    "@types/react-dom": "^17.0.11", // Типы для react DOM
    "@typescript-eslint/eslint-plugin": "^4.5.0", // Плагин для линтинга TypeScript через ESLint
    "@typescript-eslint/parser": "^4.5.0", // Парсер TypeScript для ESLint
    "babel-eslint": "^10.1.0", // Для взаимодействия babel и eslint
    "babel-jest": "^26.6.0", // Для взаимодействия babel и jest
    "babel-loader": "8.1.0", // Лоадер babel
    "babel-plugin-named-asset-import": "^0.3.7", // Именованные импорты
    "babel-preset-react-app": "^10.0.0", // Пресеты babel
    "bfj": "^7.0.2", // Big Friendly, для обработки больших JSON-файлов
    "camelcase": "^6.1.0", // Преобразование имён в camelCase
    "case-sensitive-paths-webpack-plugin": "2.3.0", // Для работы с путями в Webpack
    "css-loader": "4.3.0", //Лоадер CSS
    "dotenv": "8.2.0", // Работа с конфигурациями .env
    "dotenv-expand": "5.1.0", // Работа с конфигурациями .env
    "eslint": "^7.11.0", // Линтер
    "eslint-config-react-app": "^6.0.0", // Настройки ESLint
    "eslint-plugin-flowtype": "^5.2.0", // ESLint плагин
    "eslint-plugin-import": "^2.22.1", // ESLint плагин
    "eslint-plugin-jest": "^24.1.0", // Плагин для взаимодействия eslint и jest
    "eslint-plugin-jsx-a11y": "^6.3.1", // Линтинг стандартов доступности
    "eslint-plugin-react": "^7.21.5", // Плагин react для eslint
    "eslint-plugin-react-hooks": "^4.2.0", // Плагин react-хуков для eslint
    "eslint-plugin-testing-library": "^3.9.2", // Плание eslint для тестирования
    "eslint-webpack-plugin": "^2.5.2", // Плагин для взаимодействия сборщика с ESLint
    "file-loader": "6.1.1", // Модуль webpack для работы с файлами
    "fs-extra": "^9.0.1", // Расширяет методы FS
    "html-webpack-plugin": "4.5.0", // Генерация html
    "identity-obj-proxy": "3.0.0",
    "jest": "26.6.0", // Библиотека для тестирования
    "jest-circus": "26.6.0", // Тестировние
    "jest-resolve": "26.6.0", // Тестировние
    "jest-watch-typeahead": "0.6.1", // Тестировние
    "mini-css-extract-plugin": "0.11.3", // Плагин Webpack для минификации CSS
    "optimize-css-assets-webpack-plugin": "5.0.4", // Оптимизация/минимизация CSS
    "pnp-webpack-plugin": "1.6.4", // Ещё один плагин для Webpack
    "postcss-flexbugs-fixes": "4.2.1", // Исправление flex багов для PostCSS
    "postcss-loader": "3.0.0", // Лоадер PostCSS
    "postcss-normalize": "8.0.1", // Поддержка кросбраузерности PostCSS
    "postcss-preset-env": "6.7.0", // Поддержка совместимости с браузерами PostCSS
    "postcss-safe-parser": "5.0.2", // Синтаксический анализатор PostCSS
    "prompts": "2.4.0", // Подсказки для командной строки
    "react": "^17.0.2",
    "react-app-polyfill": "^2.0.0", // Полифил для реакт
    "react-dev-utils": "^11.0.3",
    "react-dom": "^17.0.2",
    "react-refresh": "^0.8.3", // Для обновления страницы при изменении без потери состояния компонентов
    "resolve": "1.18.1",
    "resolve-url-loader": "^3.1.2", // Для Webpack и SCSS
    "sass-loader": "^10.0.5", // Лоадер SASS
    "semver": "7.3.2",
    "style-loader": "1.3.0",
    "terser-webpack-plugin": "4.2.3", // Ещё один плагин для webpack
    "ts-pnp": "1.2.0",
    "typescript": "^4.4.4",
    "url-loader": "4.1.1",
    "web-vitals": "^1.1.2",
    "webpack": "4.44.2", // Сборщик webpack
    "webpack-dev-server": "3.11.1", // dev-server сборщика webpack
    "webpack-manifest-plugin": "2.2.0", // Плагин для генерации манифеста
    "workbox-webpack-plugin": "5.1.4" // Для service-workers
  },
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ],
    "setupFiles": [
      "react-app-polyfill/jsdom"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/src/setupTests.ts"
    ],
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jsdom",
    "testRunner": "C:\\Users\\Maxima\\IdeaProjects\\JS-delta\\lesson-19\\1.eject-react-app\\node_modules\\jest-circus\\runner.js",
    "transform": {
      "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.tsx",
      "tsx",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ],
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ],
    "resetMocks": true
  },
  "babel": {
    "presets": [
      "react-app"
    ]
  }
}
