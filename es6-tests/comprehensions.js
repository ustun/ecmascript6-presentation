require("babel/polyfill");

var x = [for (i of [0, 1, 2, 3]) i * i];

var y = [for (i of [0, 1, 2, 3]) if (i % 2 === 0) i * i * i];


console.log(x, y);
