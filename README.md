## A basic FullStack app to demonstrate React with Redux with NodeJS back end.
This project contains a front end React application as well as a back end node
express app as the Rest api for the key value store.  It uses a simple in memory
store so there is very little to configure.

## Setup
```
npm install
```

## Run Development App
http://localhost:3000/

```
npm run start
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
http://localhost:8080/
```
npm run start:prod
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