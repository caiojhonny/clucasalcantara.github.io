# clucasalcantara.github.io

## Requirements

- Node 10+
- NPM 6+

## Tech stack (In development)

- React v16.8
- Docz
- Jest
- ESLint
- Prettier

## Naming conventions

```
Regular component

src/components/atoms/title <- Folder name
├── index.js    <- Component file
├── Title.mdx   <- Docz file
├── __tests__   <- Tests folder
│   ├── Title.test.js   <- Tests file
│   └── __snapshots__
│       └── Title.test.js.snap

Composed name component
src/components/atoms/my-awesome-component <- Folder name
├── index.js    <- Component file
├── MyAwesomeComponent.mdx   <- Docz file
├── __tests__   <- Tests folder
│   ├── MyAwesomeComponent.test.js   <- Tests file
│   └── __snapshots__
│       └── MyAwesomeComponent.test.js.snap
```

## Running locally

```
$ git clone git@github.com:clucasalcantara/clucasalcantara.github.io.git
$ yarn
$ yarn start
```

| `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Available Scripts

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn docz:dev`

Launches the docz server in the interactive watch mode.

### `yarn docz:build`

Build the docz static output.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
