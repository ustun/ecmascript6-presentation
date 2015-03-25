// let _ = require('lodash');
require("babel/polyfill");
"use strict";
var mygenerator = function *(x) {
    yield x + 5;
    let y = yield x + 6;
    yield y + 7;

};



var myiterator = mygenerator(3);

for (let x of myiterator) {

    console.log("foo", x);


}

var myiteratorwithloop = mygenerator(3);

var done = false;
while (!done) {
    let result, value;
    result = myiteratorwithloop.next();
    done = result.done;
    value = result.value;
    if (!done) {
        console.log("for loop", value);
    }

}


var myseconditerator = mygenerator(4);

console.log(myseconditerator.next());
console.log(myseconditerator.next());
console.log(myseconditerator.next(8));

var mythirditerator = mygenerator("hello ");

console.log(mythirditerator.next().value);
console.log(mythirditerator.next().value);
console.log(mythirditerator.next(10).value);



console.log(typeof [1,2,3][Symbol.iterator])


for (var x of [1,2,3]) {

    console.log(x);

}


// yield* example

var myotherfunction = function *() {
    yield "in second function " + 10;
    yield "in second function  " + 11;
};


var firstTenNumbers = function *() {
    for (let i = 0; i < 10; i++) {
        yield "in first ten numbers", i;
    }

}

var myfunction = function *() {
    yield 1;
    yield 2;
    yield *myotherfunction();
    yield *[21, 22, 23];
    yield *firstTenNumbers();

    yield 3;

}


console.log(typeof myfunction);
// console.log(myfunction().keys());



for (var x of myfunction()) {
    console.log(x);
}




    var mygeneratorinout = function *() {
        console.log("started");
        var x = yield 5;
        console.log(x);

        yield 6;

    };


    var xxx = mygeneratorinout();
    console.log("before next");
    console.log(xxx.next());
    console.log(xxx.next(100));
    console.log(xxx.next());


    for (var x in xxx) {
        console.log(x);
    }



    let obj = {

        foo(x,y)  {
            console.log(x + y);
        },

            *bar(x, y) {
            yield 4;
            yield 5;
        }
    }

    obj.foo(3, 4)

    for (let y of obj.bar()) {
        console.log(y)
    }
