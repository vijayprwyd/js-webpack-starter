# JS Starter

## Running the project

`yarn install`

`yarn dev` for running in dev mode and the application would open in http://localhost:8080/

`yarn build` for generating the prod build and output availiable in `dist/index.html`

## Useful packages

**webpack** : JS bundler for web applications.
**webpack-merge** : merge base config and create separate configs for dev and prod.
**webpack-dev-server**: Using webpack with development server that provides live reloading.

**prettier pretty-quick**: Format the code and fix indendations. Rules specified in `.prettierrc`
`npx prettier --write "**/*.js"`
`npx prettier --write "**/*.json"`

**eslint** : Find JS lint errors

`npx eslint --init`

### Plugins

**html-webpack-plugin** : To create html files to serve the webpack bundle.

### Loaders

**style-loader and css-loader** to load CSS files

### Config

#### Prod Config

1.  Externalize 3rd party libraries ( like React, ReactDOM etc ) and serve it via CDN
2.  Analyze webpack bundle size using bundle-analyzer

### Dev Config

1.  Uncomment devtool option in webpack.config.dev.js for fine grained debugging

## Testing the Project

`jest` and `jest-cli` are installed as dev dependencies