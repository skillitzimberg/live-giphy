# React Application Configuration

#### By **Phil Mass**

## Description

_This is a configuration setup for a React application. In this setup, I use the latest versions of all of the npm packages and the most current recommendations to be as future-proof as possible_

_You can see the deployed app [here](https://philrmass.github.io/react-config/)._

## To Build a New Project from this Configuration

* Git clone the repository at https://github.com/philrmass/react-config.git to a local directory
* Add your own project code

## Steps to Recreate this Configuration

* Create the directory, init git and npm (you can accept the defaults, creates package.json)
```console
mkdir react-config
cd react-config
git init
npm init
```
* Install webpack, webpack-cli, and webpack-dev-server
* _Note: all packages are installed locally in the project (no globals) and can be accessed via package.json scripts_
```console
npm install --save-dev webpack webpack-cli webpack-dev-server
```
* Install the babel packages
```console
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
* Install the hot module replacement
```console
npm install --save-dev react-hot-loader
```
* Install eslint and the eslint webpack loader
```console
npm install --save-dev eslint eslint-loader eslint-plugin-react
```
* Install react and react-dom
```console
npm install --save react react-dom
```
* Install url-loader and file-loader
```console
npm install --save-dev url-loader file-loader
```
* Install css-loader and style-loader
```console
npm install --save-dev css-loader style-loader
```
* Add scripts to `./package.json` by adding the content:
```text
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode production",
    "lint": "eslint src/** src/**/**"
  },
```
* Create `./.gitignore` with the content:
```text
# npm and build, allow index.html
node_modules/
public/*
!public/index.html

# mac
.DS_STORE/

# vim
*.swp
```
* Add the webpack configuration file `./webpack.config.js` with the content:
```text
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(png|gif|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        test:/\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
};
```
* Create a babel configuration file at `./.babelrc` with the content:
```text
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
* Create an eslint configuration file at `./.eslintrc.json` with the content:
```text
{
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [ "error", 2 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "always" ],
        "no-console": "warn"
    }
}
```
* Create a `./public` directory and base file `.public/index.html` with the content:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>React Application</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```
* Create a `./src` directory and entry point file `./src/index.jsx` with the content:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();
```
* Create a `./src/components` directory and an app component file `./src/components/App.jsx` with the content:
```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>React Application</h1>
    </div>
  );
}

export default App;
```

I put together the information contained here from the following sources:
* https://webpack.js.org/guides/installation/
* https://webpack.js.org/guides/getting-started/
* https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
* https://github.com/webpack-contrib/eslint-loader
* https://www.learnhowtoprogram.com/react

## Known Bugs

_None_

## Support and Contact Details

If you have any issues or questions, please email me at philrmass@gmail.com

## Legal

Copyright (c) 2018 Phil Mass

This software is licensed under the MIT License


