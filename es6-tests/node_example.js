// Run this as: node node_example.js
// i.e. no manual babel pre-processing is necessary
require("babel/register");

var numbers = require('./foo');
console.log(numbers.x, numbers.y, numbers.z );
