// Rest Parameters

function example(firstNum, ...rest) {
    console.log("firstNum", firstNum);
    console.log("rest", rest);
    console.log(Array.isArray(rest), Array.isArray(arguments))

}

example(1, 2, 3, 4);

example(4, 5, 6, 7, 8);



// Rest Params 3. Example

var compute = function (op, ...sayilar) {
    var ops = {
        '-': (a, b) => a-b,
        '+': (a, b) => a+b,
        '*': (a, b) => a*b
    };

    var initial = {'-': 0, '+': 0, '*': 1};

    return sayilar.reduce(ops[op], initial[op]);
};



console.log(compute('+', 1, 2, 3, 4, 5));
console.log(compute('*', 1, 2, 3, 4, 5));
console.log(compute('-', 1, 2, 3, 4, 5));
