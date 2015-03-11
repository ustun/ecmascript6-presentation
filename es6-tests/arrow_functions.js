var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Sum even numbers
var sum = 0;
for (var i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}


console.log("sum of even numbers", sum);

/* process.exit() */


var evens = x.filter(function (i) {return i % 2 === 0});
var sumEvens = evens.reduce(function (a, b) { return a + b});

console.log("sum of even numbers with filter and reduce", sumEvens);


var sum = x.filter(i => i % 2 === 0)
           .reduce((a, b) => a + b);

console.log("sum" , sum);

// with comprehensions
var numbers = x;
require("babel/polyfill");
console.log([for (i of x) i * i * i]);

console.log([for (i of x) if (i % 2 === 0) i].reduce((a,b)=>a+b));
