https://webpack.js.org/guides/getting-started/#basic-setup
https://webpack.js.org/migrate/4
https://github.com/postcss/autoprefixer#webpack


# Webpack 4 Babel ES6 starter

Simple skeleton which provides preconfigured setup using Webpack 3 with Babel ES6 and auto-reloading development server.


## Getting started

```
git clone https://github.com/PaperNick/webpack-es6-starter.git
```
```
cd webpack-es6-starter
```
```
npm install
```

## Run Webpack development environment

- To start Webpack dev server with Hot Module Replacement (HMR):
```
npm start
```
- You can open [localhost:3000](http://localhost:3000/) in your browser, once the compilation has been completed.

## Run Webpack production build
```
npm run build
```

This command will:
- Extract Webpack's bootstrap entry (manifest) in a separate file, and decouple it from the other bundles.
- Extract all of your third-party dependencies coming from `node_modules` and bundle them in a separate file, which will be dynamically injected into the final `index.html`.
- Extract all of your application logic in a separate bundle.

The main reason for that separation is to utilize browser caching - the application logic is more likely to change, than the third-party dependencies.


## License
The MIT License (MIT)