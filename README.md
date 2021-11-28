# react-ts-yarn-berry-app

[![License](https://img.shields.io/badge/license-MIT-a31f34)](./LICENSE)

A project template for React, with TypeScript and Yarn v3.

## Requirements

- [Yarn Berry (v3)](https://yarnpkg.com/getting-started/install)

## Getting Started

Clone this template:

```bash
git clone https://github.com/saltchang/react-ts-yarn-berry-app.git
```

Rename to your app's name:

```bash
cp -r react-ts-yarn-berry-app <your-app>
cd <your-app>
```

Set up the project:

```bash
# replace the project name to yours
sed -i 's/react-ts-yarn-berry-app/<your-app>/g' package.json README.md yarn.lock

# run this if you are on a BSD systems like macOS
sed -i '.bak' 's/react-ts-yarn-berry-app/<your-app>/g' package.json README.md yarn.lock
```

You can also choose to reset the git repository (optional):

```bash
rm -rf .git
git init
```

## Usage

Install the dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn start
```

Run test:

```bash
yarn test
```

Build the Production package:

```bash
yarn build
```

Run the Production package:

```bash
yarn serve
```

Run lintting:

```bash
yarn lint

# with fix
yarn lint-fix
```

Format documents:

```bash
yarn format
```
