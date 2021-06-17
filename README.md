# React Native Template ⚛️ 🥷
##### `An Enterprise React Native template which comes with typescript, Global state management, Unit testing, snapshot testing, globally uniform styling and Continuous integration & deployment.🔥🔥`
![React Native Template CI](https://github.com/tap0212/rn-template/workflows/React-Native-Template-CI/badge.svg)
![React Native Template CD](https://github.com/tap0212/rn-template/workflows/React-Native-Template-CD/badge.svg)

## TypeScript 
- Check [tsonfig.js](https://github.com/tap0212/rn-template/blob/main/tsconfig.json) for more
## Global state management
- Using [React Redux](https://react-redux.js.org/)
- Getting state using [Reselect](https://github.com/reduxjs/reselect)
## Navigation
- using [react-navigation](https://reactnavigation.org/)
## Implementing CI/CD pipelines using Github Actions

- CI/CD using Github Actions. 
  The CI pipeline has the following phases
  - Checkout
  - Install dependencies
  - Lint
  - Test
    
  The CD pipeline has the following phases
  - Checkout
  - Install dependencies
  - Build
  - Export bundle as artifact on github

  Take a look at the following files
  - [.github/workflows/ci.yml](.github/workflows/ci.yml)
  - [.github/workflows/cd.yml](.github/workflows/cd.yml)
  
## Testing ⚙️
- using [jest](https://jestjs.io/)
- component rendering using [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

# Contributing 🥷
- Select or create an issue
- clone the repo using
    `git clone https://github.com/tap0212/rn-template.git`
- Install dependencies using
    `yarn` or `npm i`
- Run iOS
    `yarn ios`
- Run Android
    `yarn android`
- Create your first PR 💪
