## A FullStack Key / Value store with a React / Redux front end and NodeJS back end.
This project contains a front end React application as well as a back end node
express app for the Rest api for the key value store.  It uses a simple in memory
store so there is very little to configure.

## Setup
```
npm install
```

## Run Development App
http://localhost:3000/  This starts the webpack development server for the front end application and also starts the backend rest api.
```
npm run start:dev
```

## Run integration tests
```
npm run test
```

## Build the Production release
```
npm run build
```

## Run Production build
http://localhost:8080/ This starts the backend rest api and also serves the static front end files.
```
npm run start
```

## Rest API

Retrieve an object with all Key/Value pairs
```
GET /items/
```

Retrieve the Value for the given Key
```
GET /item/:key
```

Add or Update a Key/Value pair
```
POST /item     body: {key: 'key', value: 'Some Value'}
```