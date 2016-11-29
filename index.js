'use strict';

var wiredep = require('wiredep');
var fs = require('fs');
var path = require('path');

var getAllDependencies = function() {
  // get all dependencies using wiredep
  var array = wiredep().js;

  // create an array of output with relative path
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var relativePath = path.relative('./', array[i]);
    output.push(relativePath);
  }

  return output;
}

module.exports = {

  getAllDependencies: getAllDependencies,

  writeDependencies: function() {

    var file = './include.js';
    var array = getAllDependencies();

    // generate the content to be written

    var contents = '\'use strict\';\n\n';
    for (var i = 0; i < array.length; i++) {
      contents += 'require(\'' + array[i] + '\');\n';
    }
    contents += '\n';

    // write the contents to file

    try {
      fs.writeFileSync(file, contents, 'utf-8');
    } catch (err) {
      console.log(err);
      return false;
    }
    
    return true;

  }
}
