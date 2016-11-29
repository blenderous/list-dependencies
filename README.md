# How to ?

## Install the development environment.

    npm install

## Run the tests

    npm run test

## Usage

To use this tool in your project, first include  this folder in your project and then run it from your application's code like so:

```javascript
  'use strict';

  var deps = require('./list-dependencies').writeDependencies;

  deps();
```
