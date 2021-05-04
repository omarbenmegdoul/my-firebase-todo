# My Firebase Todo List App

## Setup instructions

## Notes

## Todos

## steps
### First commit: setting up our project folder
1. Create repo on github
2. clone on vscode 
3. open that folder in vscode
4. `yarn init` and mash the Enter key
5. `yarn add react react-dom` to install react
6. Create .gitignore in main level of the repo folder and write "node-modules" to ensure dependencies don't get committed to github
7. stage changes with `git add .` (`.` meaning the current directory)
8. (If it's not working, make sure VS Code is open to the cloned repo folder and not a parent folder!)
9. `git commit -m "initial commit"` to commit with message "initial commit"
10. `git push` for local changes to be reflected on github

### Second commit: setup react
1. Create subfolders called `public` and `src` under the root folder. `public` will contain the files served to your customer, more or less. `src` will contain our programming. (Grain of salt here) 
2. Create `/public/index.html`, type `!` then Tab to insert boilerplate. add `<div id="root"></div>` in the body.
3. Create `/src/index.js` and write 
```js
import React from 'react';
import ReactDOM from "react-dom";
const rootDiv = document.getElementById("root"); 
ReactDOM.render(<div>Hello World</div>, rootDiv)
```
4. In terminal, do `yarn add -D @babel/core @babel/preset-react` to automatically convert react code to JS when you launch your project in the browser. These dependencies will get added to package.json.dependencies by default but -D ensures they go to package.json.devDependencies (end user does not need Babel)
5. In terminal, do `yarn add -D webpack webpack-cli babel-loader style-loader css-loader`. Your package.json dependencies should look like this, potentially with different version numbers:
```json
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/core": "^7.14.0",
    "@babel/preset-react": "^7.13.13",
    "@babel/preset-env": "^7.14.1",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.4",
    "style-loader": "^2.0.0",
    "webpack": "^5.36.2",
    "webpack-cli": "^4.6.0"
  }
```
Close and open package.json again if it's missing one. 
6. Create `webpack.config.js` in the root folder and paste the following, then save:
```js 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development", // don't minify, don't optimize for size etc. This isn't the final build
    entry: "./src/index.js", //main file of your program
    devtool: "eval-source-map", //helps ensure console warnings point to right line etc.
    output: {
        path: path.resolve(__dirname, "dist"), //more reliable url than ./
        filename: "index.bundle.js", //where the webpack bundle gets outpu
    },
    module: { // loaders go here: they plug our css and js in
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            // favicon: path.resolve(__dirname, "public", "favicon-16x16.png"),
        }),
        new Dotenv(), //plug in environment variables
        // new BundleAnalyzerPlugin(),
        // We're going to uncomment that line out later
    ],
};
```

Run `yarn add -D dotenv-webpack html-webpack-plugin webpack-bundle=analyzer` to import the plugins in the last few lines of the previous snippet. These should appear in package.json.

7. in package.json, before the dependencies, write:
```json
"scripts":{
    "dev":"webpack serve --mode-development"
  },
```
8. Save the following under the root folder as `babel.config.json`:
```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "chrome": 87
                }
            }
        ],
        "@babel/preset-react"
    ]
}
```

9. Run `yarn dev` and if prompted to install a dependency type Y to accept.

10. The frontend runs at localhost:8080 so navigate to that url in your browser.


### Third commit: adding components to the react app
1. Create `App.js` under src:
```js
import React from 'react';

export default function App()
{
  return <div>Hello World</div>;
};
```

And update `src/index.js`
```js
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"

const rootDiv = document.getElementById("root"); 
ReactDOM.render(<App />, rootDiv)
```