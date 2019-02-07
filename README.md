# Fast-Food-Fast-LMS 8.1

[![Build Status](https://travis-ci.org/kafuuma/Reactify-Fast-Food-Fast.svg?branch=ch-code-climate-integration-163721387)](https://travis-ci.org/kafuuma/Reactify-Fast-Food-Fast)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f078d3b8b16ca068c140/test_coverage)](https://codeclimate.com/github/kafuuma/Reactify-Fast-Food-Fast/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/f078d3b8b16ca068c140/maintainability)](https://codeclimate.com/github/kafuuma/Reactify-Fast-Food-Fast/maintainability)

## project overview

This is a fast food delivery application for a fast food restaurent created\
during Andela Bootcamp
The is app deployed on Heroku [HERE](https://fast-food-staging.herokuapp.com/)

## project overview

## features

1. Users can create an account and log in
2. A user should be able to order for food
3. The admin should be able to add,edit or delete the fast-food items
4. The admin should be able to see a list of fast-food items
5. The Admin user should be able to do the following:
   - _See a list of orders_
   - _Accept and decline orders_
   - _Mark orders as completed_
6. A user should be able to see a history of ordered food

## Folder Structure.

```
LMS 8.1
│   README.md
│   .gitignore
│   package.json
│   travis.yml
|   server.js
|   Procfile
|   webpack.config.js
|   .babelrc
│   yarn.lock
|   .eslintrc
|   .travis.yml
│
|
└───src
│   │   index.js
|   |   App.js
|   |  store.js
│   │
|   |___assets
|   |
│   └───components
│   |   │   components
│   |   │   ...
│   │
│   └───containers
│   |   │   components
│   |   │   ...
|   |   |
│   └───actions
│   |   │   action.js
│   |   │   ...
|   |____Router.js
|   |
|   |____setupTests.js
|   |
│   │
│   └───reducers
│       │   reducer1.js
│       │   ...
```

### Try it out

- Clone the repository locally

  `git clone https://github.com/kafuuma/Reactify-Fast-Food-Fast.git`

- Checkout to the repo directoey

  `cd LMS 8.1`

- Install the dependencies.

  run `yarn`

- start the application.

  `yarn start`

## Testing

`yarn test`

## Testing with coverage`

## Developer

- _**arkafuuma@gmail.com**_
- _**@henryKafuuma**_
