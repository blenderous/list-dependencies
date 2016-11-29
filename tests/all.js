var expect = require("chai").expect;

/**
 * get all bower dependencies
 **/
var getAllDependencies = require('../index.js').getAllDependencies;

describe('Retreiving dependencies', function() {
  it('should get an array of all dependencies from bower.json', function() {
    expect(getAllDependencies()).to.be.an('Array');
  });
});

/**
 * write all the bower dependencies
 **/
var writeDependencies = require('../index.js').writeDependencies;

describe('Including all dependencies in the js file', function() {
 it('should write dependencies to the include.js file', function() {
   expect(writeDependencies()).to.be.ok;
 });
});
