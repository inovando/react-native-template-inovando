# react-native-template-inovando
> 📱 Inovando's template for react-native-cli

## Usage
1. Initialize your RN project with this command:

```bash
react-native init AwesomeProject --template https://github.com/inovando/react-native-template-inovando
```

2. Delete `~/App.js`

3. Duplicate `.env.example` to `.env` and `.env.production` fulfilling variables as needed

4. Done 🎉

## Android

Add these lines to `dependencies` at `android/app/build.gradle`:
```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

## Features
- [x] [Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver)
- [x] [ESLint](https://github.com/santospatrick/eslint-config-react)/[Prettier](https://github.com/santospatrick/prettier-config)
- [x] [Styled Components](https://styled-components.com/docs/basics#react-native)
- [x] [Dotenv](https://github.com/zetachang/react-native-dotenv)
- [x] [Axios](https://www.npmjs.com/package/axios)
- [x] [React Navigation](https://reactnavigation.org/en/)
