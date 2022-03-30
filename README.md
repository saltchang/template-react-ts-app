# template-react-ts-app

[![License](https://img.shields.io/badge/license-MIT-a31f34)](./LICENSE)

A project template for React, with TypeScript.

## Requirements

## Getting Started

Clone this template:

```bash
git clone https://github.com/saltchang/template-react-ts-app.git
```

Rename to your app's name:

```bash
cp -r template-react-ts-app <your-app>
cd <your-app>
```

Set up the project:

```bash
# replace the project name to yours
sed -i 's/template-react-ts-app/<your-app>/g' package.json README.md package-lock.json

# run this if you are on a BSD systems like macOS
sed -i '.bak' 's/template-react-ts-app/<your-app>/g' package.json README.md package-lock.json
```

You can also choose to reset the git repository (optional):

```bash
rm -rf .git
git init
```

## Usage

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Run test:

```bash
npm run test
```

Build the Production package:

```bash
npm run build
```

Run the Production package:

```bash
npm run serve
```

Run lintting:

```bash
npm run lint

# with fix
npm run lint-fix
```

Format documents:

```bash
npm run format
```
