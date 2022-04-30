 <div align="center">
  <img align="center" width="330" src="https://user-images.githubusercontent.com/25509135/157361952-f5263114-06a8-43d8-b053-0ea6012ca764.svg" />
  <h2>electron-webpack-boilerplate</h2>

  <blockquote>Minimal Electron Starter Kit built with Typescript, React, Webpack 5 and Babel 7</blockquote>
 
 <a href="https://www.npmjs.com/package/electron-webpack-boilerplate"><img src="https://badgen.net/npm/v/electron-webpack-boilerplate?color=blue" alt="npm version"></a> <a href="https://github.com/hodgef/electron-webpack-boilerplate"><img src="https://img.shields.io/github/last-commit/hodgef/electron-webpack-boilerplate" alt="latest commit"></a> <a href="https://github.com/hodgef/electron-webpack-boilerplate/actions"><img alt="Build Status" src="https://github.com/hodgef/electron-webpack-boilerplate/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/hodgef/electron-webpack-boilerplate/actions"> <img alt="Publish Status" src="https://github.com/hodgef/electron-webpack-boilerplate/workflows/Publish/badge.svg?color=green" /></a>

<strong>To create a JS library, check out [js-library-boilerplate-basic](https://github.com/hodgef/js-library-boilerplate-basic).</strong>

   

 
</div>

## ⭐️ Features

- Electron 17
- React 17
- Webpack 5
- Babel 7
- Hot reloading (`npm start`)
- Jest unit testing (+ Enzyme)

## 📦 Getting Started

```
git clone https://github.com/hodgef/electron-webpack-boilerplate.git my-app
npm install
```

> ⚠️ Note: This boilerplate uses `nodeIntegration` by default, which allows your renderer code to access node. Only use this boilerplate if you are running trusted code in your app. Alternatively, you can change this setting in `src/main/index.ts` and adjust accordingly.

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (This will be used to package your app)
3. (Optional) Set-up releases, code signing, notarization for your app. Additional docs on this coming soon.

## ⚙️ Development

- Use `npm start` to develop your app with Hot Reloading on changes.
- Use `npm serve:dist` to serve a semi-production app from the build folder.
- Use `npm run dist` to build executables for your app, according to the information in your package.json.
- Use `npm run test` to run unit tests for your app.

## 🚀 Publishing

Check out the reference project [PRSS](https://github.com/hodgef/PRSS) for publishing ideas. This project includes code-signing, Apple notarization and building native packages (such as sqlite) with node-gyp:

- Package configuration: [package.json](https://github.com/hodgef/PRSS/blob/master/package.json)
- Package CI publishing: [publish.yml](https://github.com/hodgef/PRSS/blob/master/.github/workflows/publish.yml)
- Release page (end result): https://github.com/hodgef/PRSS/releases
