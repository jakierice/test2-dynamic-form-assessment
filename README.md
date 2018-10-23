# [Test 2 Dynamic Form (React)](https://friendly-dijkstra-14b519.netlify.com/)

> Simple [create-react-app](https://github.com/facebook/create-react-app) based client side application demonstrating custom dynamic nexted form functionality with session storage persistance

## Overview

This application is built use [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/), and it has basic test coverage from unit and integration tests using [jest](https://jestjs.io/docs/en/getting-started) [react-testing-library](https://github.com/kentcdodds/react-testing-library). The hosted version of this site can be viewed [here](https://friendly-dijkstra-14b519.netlify.com/).

Most functionality and application state is controlled through a single component `<RoomSelectionForm>`. This component utilizes the popular [render props pattern](https://jestjs.io/docs/en/getting-started) to make available the required state and control functionality to children in the React node tree.

## Installation

Clone this repository with the following command

```bash
git clone https://github.com/jakierice/test2-dynamic-form-assessment
```

Install required dependencies and development dependencies using yarn package manager CLI

```bash
yarn install
```

OR if you prefer to use NPM, first remove the `package-lock.json` file and `node_modules` directory by running the following command

```bash
rm -rf node_modules package-lock.json
```

## Develop
Start the webpack development server configured and provided by `create-react-app` with the following command

```bash
yarn start
```

OR for NPM

```bash
npm run start
```

## Testing
Run the jest test suite in watch mode with the following command

```bash
yarn test
```

OR for NPM

```bash
npm run test
```
